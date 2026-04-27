'use client';

import { useEffect } from 'react';

export default function BackgroundEffects() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const orbs = document.querySelectorAll('.glow-orb') as NodeListOf<HTMLElement>;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px) scale(1.05)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Background Glow Orbs - Hidden on mobile for performance */}
      <div className="hidden md:block glow-orb bg-blue-300 w-[500px] h-[500px] top-[-100px] left-[-200px] animate-pulse-soft"></div>
      <div className="hidden md:block glow-orb bg-purple-300 w-[400px] h-[400px] top-[40%] right-[-150px] animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      <div className="hidden md:block glow-orb bg-teal-200 w-[300px] h-[300px] bottom-[-50px] left-[20%] animate-pulse-soft" style={{ animationDelay: '2s' }}></div>

      {/* Sparks - Hidden on mobile for performance */}
      <div className="hidden md:block spark spark-blue w-2 h-2 top-[20%] left-[45%] animate-float opacity-60"></div>
      <div className="hidden md:block spark spark-purple w-3 h-3 top-[30%] right-[35%] animate-float-delayed opacity-50"></div>
      <div className="hidden md:block spark spark-teal w-1.5 h-1.5 top-[60%] left-[25%] animate-float-fast opacity-60"></div>
      <div className="hidden md:block spark spark-blue w-2.5 h-2.5 top-[80%] right-[40%] animate-float opacity-50"></div>
    </>
  );
}
