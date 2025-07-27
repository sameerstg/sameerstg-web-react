'use client';
import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type IconEntry = {
  src: string;
  name: string;
};

// Separate icons into two rings
const languageIcons: IconEntry[] = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', name: 'HTML5' },
  { src: 'https://www.svgrepo.com/show/452185/css-3.svg', name: 'CSS3' },
  { src: 'https://www.svgrepo.com/show/349419/javascript.svg', name: 'JavaScript' },
  { src: 'https://www.svgrepo.com/show/374146/typescript-official.svg', name: 'TypeScript' },
  { src: 'https://www.svgrepo.com/show/521299/next-16.svg', name: 'Next.js' },
  { src: 'https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg', name: 'Node.js' },
  { src: 'https://www.svgrepo.com/show/354259/react.svg', name: 'React' },
  { src: 'https://cdn-icons-png.flaticon.com/512/888/888847.png', name: 'C' },
  { src: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000', name: 'C++' },
  { src: 'https://www.svgrepo.com/show/373604/flutter.svg', name: 'Flutter' },
  { src: 'https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg', name: 'MySQL' },
  { src: 'https://www.svgrepo.com/show/374016/python.svg', name: 'Python' },
];

const softwareIcons: IconEntry[] = [
  { src: 'https://www.svgrepo.com/show/473818/unity.svg', name: 'Unity' },
  { src: 'https://www.svgrepo.com/show/353488/blender.svg', name: 'Blender' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png', name: 'Photoshop' },
  { src: 'https://www.adobe.com/cc-shared/assets/img/product-icons/svg/after-effects.svg', name: 'After Effects' },
  { src: 'https://www.audacityteam.org/_astro/Audacity_Logo.DK8H7nvr.svg', name: 'Audacity' },
  { src: 'https://www.svgrepo.com/show/373441/arduino.svg', name: 'Arduino' }, // Your full Base64 Arduino icon here
  { src: 'https://icon.icepanel.io/Technology/svg/.NET-core.svg', name: '.NET' },
  { src: 'https://www.svgrepo.com/show/448222/figma.svg', name: 'Figma' },
  { src: 'https://www.svgrepo.com/show/354202/postman-icon.svg', name: 'Postman' },
  { src: 'https://www.svgrepo.com/show/373595/firebase.svg', name: 'Firebase' },
];

const GithubAndTools: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const [radii, setRadii] = useState({ inner: 100, outer: 150 });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const iconRotation = useTransform(rotate, (r: number) => -r);

  useLayoutEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const size = containerRef.current.offsetWidth;
        setRadii({
          inner: size / 3.5, // e.g., 110
          outer: size / 2.2, // e.g., 170
        });
      }
    };
    updateRadius();
    if (typeof window !== "undefined")
      window?.addEventListener('resize', updateRadius);
    return () => window?.removeEventListener('resize', updateRadius);
  }, []);

  const renderIcons = (icons: IconEntry[], radius: number) =>
    icons.map(({ src, name }, index) => {
      const angle = (index / icons.length) * 2 * Math.PI;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      return (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
          }}
        >
          <motion.div style={{ rotate: iconRotation }}>
            <img src={src} alt={name} width={28} height={28} />
          </motion.div>
        </motion.div>
      );
    });

  return (
    <div ref={targetRef} className="flex flex-col gap-6 mx-4 items-center h-screen justify-center">
      <button className="mx-auto w-full text-white font-semibold  p-2 rounded-xl">
        <a href="https://github.com/sameerstg" target="_blank" rel="noreferrer noopener">
          Github 🔗
        </a>
      </button>

      <img
        className="border border-white rounded-xl w-full max-w-sm"
        src="https://github-readme-streak-stats.herokuapp.com/?user=sameerstg&theme=dark&hide_border=true"
        alt="sameerstg"
      />

      <div ref={containerRef} className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
        <motion.div style={{ rotate }} className="absolute w-full h-full">
          {renderIcons(softwareIcons, radii.outer)}
          {renderIcons(languageIcons, radii.inner)}
        </motion.div>

        <a
          href="https://github.com/sameerstg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-center text-sm sm:text-lg"
        >
          Tools I Use
        </a>
      </div>
    </div>
  );
};

export default GithubAndTools;
