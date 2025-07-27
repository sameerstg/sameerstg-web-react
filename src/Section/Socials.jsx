import React, { useEffect, useRef, useState } from 'react';
import github from '../Assets/Images/Socials/github.svg';
import linkedin from '../Assets/Images/Socials/linkedin.svg';
import artstation from '../Assets/Images/Socials/artstation.svg';
import facebook from '../Assets/Images/Socials/facebook.svg';
import playstore from '../Assets/Images/Socials/playstore.svg';
import instagram from '../Assets/Images/Socials/instagram.svg';
import youtube from '../Assets/Images/Socials/youtube.svg';
import discord from '../Assets/Images/Socials/discord.svg';
import IconBox from '../Components/IconBox';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Socials() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const canvasRef = useRef(null);
  const [positions, setPositions] = useState([]);

  const socials = [
    { image: playstore, href: 'https://play.google.com/store/apps/developer?id=Sameerstg' },
    { image: github, href: 'https://github.com/sameerstg' },
    { image: linkedin, href: 'https://www.linkedin.com/in/sameerstg/' },
    { image: artstation, href: 'https://www.artstation.com/sameerstg8' },
    { image: facebook, href: 'https://www.facebook.com/profile.php?id=100069067089055' },
    { image: instagram, href: 'https://www.instagram.com/sameerstg/' },
    { image: youtube, href: 'https://www.youtube.com/channel/UCt68mmpafwAmhsENbxr_5Lg?view_as=subscriber' },
    { image: discord, href: 'https://discord.gg/pJVTACah' },
  ];

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 0, scale: 0.8, transition: { duration: 0.5 } });
    }
  }, [inView]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const drawLines = () => {
      if (!positions.length) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#0ff';
      ctx.lineWidth = 1;
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const a = positions[i];
          const b = positions[j];
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    };

    const render = () => {
      drawLines();
      animationFrameId = window.requestAnimationFrame(render);
    };

    if (inView) render();
    else ctx.clearRect(0, 0, canvas.width, canvas.height);

    return () => cancelAnimationFrame(animationFrameId);
  }, [positions, inView]);

  useEffect(() => {
    const elements = document.querySelectorAll('.social-icon');
    const newPos = Array.from(elements).map((el) => {
      const rect = el.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    });
    setPositions(newPos);
  }, [inView]);

  return (
    <div id='socials' className='relative my-10'>
      <h2 className='my-3 text-center'>Socials</h2>

      <motion.canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={300}
        className='absolute top-0 left-0 w-full h-full pointer-events-none z-0'
        style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease' }}
      />

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, scale: 0.8 }}
        className='relative z-10 flex flex-row flex-wrap gap-3 justify-center items-center px-4'
      >
        {socials.map((social, index) => (
          <IconBox key={index} image={social.image} href={social.href} className='social-icon' />
        ))}
      </motion.div>
    </div>
  );
}
