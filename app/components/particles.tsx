'use client';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Particles() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 5 + 8,
    delay: Math.random() * 5,
    drift: Math.random() * 50 - 25,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-1">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full opacity-30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            backgroundColor: 'var(--primary)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.drift, 0],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
