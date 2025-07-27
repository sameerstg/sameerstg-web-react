'use client';

import React, { useEffect, useState, useRef } from 'react';

interface ExperienceProps {
    title: string;
    startDate: string | Date;
    titleColor?: string;
}

function getTimeDifference(startDate: Date) {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const diffInMs = now.getTime() - startDate.getTime();
    const totalSeconds = Math.floor(diffInMs / 1000);

    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;

    return { years, months, days, hours, minutes, seconds };
}

const Experience: React.FC<ExperienceProps> = ({ title, startDate, titleColor = 'text-white' }) => {
    const [time, setTime] = useState(() => getTimeDifference(new Date(startDate)));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeDifference(new Date(startDate)));
        }, 1000);

        return () => clearInterval(interval);
    }, [startDate]);

    const format = (num: number) => num.toString().padStart(2, '0');

    return (
        <div className="flex flex-col items-center  justify-center px-6   text-black dark:text-white font-mono py-8 transition-all duration-500 ease-in-out">
            <h2 className={`text-xl font-bold mb-2 ${titleColor} transition-colors duration-500 ease-in-out`}>{title}</h2>
            <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base text-white">
                <span >{time.years}Y</span>
                <span>{time.months}M</span>
                <span>{time.days}D</span>
                <span>{format(time.hours)}h</span>
                <span>{format(time.minutes)}m</span>
                <span className="text-blue-600 dark:text-blue-400 animate-pulse">{format(time.seconds)}s</span>
            </div>
        </div>
    );
};

const ExperienceTimeline: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [isSectionVisible, setIsSectionVisible] = useState(false);
    const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    const experiences = [
        { title: 'Web Development', startDate: '2019-03-15T03:13:12Z' },
        { title: 'Game Development', startDate: '2021-04-21T20:45:13Z' },
        { title: 'Mobile Development', startDate: '2021-03-02T12:05:06Z' },
        { title: 'Photo Editing', startDate: '2015-03-01T20:45:13Z' },
        { title: 'Video Editing', startDate: '2019-03-05T21:30:08Z' },
    ];

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        clearTimeout(timeout);
                        timeout = setTimeout(() => {
                            const index = experienceRefs.current.indexOf(entry.target as HTMLDivElement);
                            setActiveIndex(index);
                        }, 100);
                    }
                });
            },
            {
                root: null,
                threshold: 0.5,
                rootMargin: '-40% 0px -40% 0px',
            }
        );

        experienceRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            clearTimeout(timeout);
            experienceRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsSectionVisible(entry.isIntersecting);
                });
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                sectionObserver.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const updateTitlePosition = () => {
            if (titleRef.current) {
                titleRef.current.style.top = `calc(50vh - ${titleRef.current.offsetHeight / 2}px)`;
            }
        };
        updateTitlePosition();
        window?.addEventListener('resize', updateTitlePosition);
        return () => window?.removeEventListener('resize', updateTitlePosition);
    }, [isSectionVisible]);

    return (
        <div ref={sectionRef} className="text-white flex flex-col md:flex-row ">
            <div className="md:w-1/3 w-full p-4">
                <h1
                    ref={titleRef}
                    className={`text-3xl font-bold text-white text-center transition-opacity duration-300 ${isSectionVisible ? 'sticky' : 'static'
                        }`}
                >
                    Experience Timeline
                </h1>
            </div>

            <div className="md:w-2/3 w-full flex flex-col items-center ">
                <div
                    className="flex flex-col items-center  w-full max-w-md snap-y snap-mandatory overflow-y-scroll hide-scrollbar "
                >
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                experienceRefs.current[index] = el;
                            }}
                            className={`w-full flex items-center justify-center snap-center transition-all duration-500 ease-in-out ${activeIndex === index ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                                }`}
                        >
                            <Experience
                                title={exp.title}
                                startDate={exp.startDate}
                                titleColor={activeIndex === index ? 'text-yellow-400' : 'text-white'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceTimeline;