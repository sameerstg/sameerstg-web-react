'use client';

import { useEffect, useState } from 'react';

interface ExperienceCounterProps {
    title: string;
    startDate: string | Date;
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

export default function ExperienceComponent({ title, startDate }: ExperienceCounterProps) {
    const [time, setTime] = useState(() => getTimeDifference(new Date(startDate)));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeDifference(new Date(startDate)));
        }, 1000);

        return () => clearInterval(interval);
    }, [startDate]);

    const format = (num: number) => num.toString().padStart(2, '0');

    return (
        <div className=" flex flex-col items-center justify-center px-6 bg-white dark:bg-black text-black dark:text-white font-mono">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base">
                <span>{time.years}Y</span>
                <span>{time.months}M</span>
                <span>{time.days}D</span>
                <span>{format(time.hours)}h</span>
                <span>{format(time.minutes)}m</span>
                <span className="text-blue-600 dark:text-blue-400 animate-pulse">{format(time.seconds)}s</span>
            </div>
        </div>
    );
}
