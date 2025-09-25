'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TrailImage {
  id: number;
  x: number;
  y: number;
  imageIndex: number;
  velocityX: number;
  velocityY: number;
}

interface ImageTrailProps {
  fadeOutDuration?: number;
  images?: string[];
  imageSize?: number;
  spawnDistance?: number;
  velocityFactor?: number;
}

export default function ImageTrail({
  fadeOutDuration = 1.2,
  images = [
    "/assets/cursor-trail/ricardo-kaka.jpg",
    "/assets/cursor-trail/diego-maradona.jpg", 
    "/assets/cursor-trail/eliud-kipchoge.jpg",
    "/assets/cursor-trail/jon-jones.jpg",
    "/assets/cursor-trail/michael-jordan.jpg",
    "/assets/cursor-trail/milkha-singh.jpg",
    "/assets/cursor-trail/rahul-dravid.jpg",
    "/assets/cursor-trail/roger-federer.jpg",
    "/assets/cursor-trail/usain-bolt.jpg",
    "/assets/cursor-trail/michael-phelps.jpg",
    "/assets/cursor-trail/muhammad-ali.jpg",
    "/assets/cursor-trail/luka-modric.jpg",
    "/assets/cursor-trail/sachin-tendulkar.jpg",
    "/assets/cursor-trail/ronaldo-nazario.jpg",
    "/assets/cursor-trail/steph-curry.jpg",
  ],
  imageSize = 90,
  spawnDistance = 42,
  velocityFactor = 0.1
}: ImageTrailProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [distance, setDistance] = useState<number | undefined>(undefined);
  const [trailImages, setTrailImages] = useState<TrailImage[]>([]);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const lastPointerRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(Date.now());

  const wrap = (min: number, max: number, value: number) => {
    const range = max - min;
    return ((value - min) % range + range) % range + min;
  };

  const spawnImage = useCallback((x: number, y: number) => {
    const newId = Date.now() + Math.random();
    const newImage: TrailImage = {
      id: newId,
      x: x - imageSize / 2,
      y: y - imageSize / 2,
      imageIndex: imageIndex,
      velocityX: velocity.x,
      velocityY: velocity.y
    };

    setTrailImages(prev => [...prev, newImage]);
    setImageIndex(prev => wrap(0, images.length, prev + 1));

    // Remove image after fade out duration
    setTimeout(() => {
      setTrailImages(prev => prev.filter(img => img.id !== newImage.id));
    }, fadeOutDuration * 1000);
  }, [imageIndex, velocity, imageSize, images.length, fadeOutDuration]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const deltaTime = now - lastTimeRef.current;
      
      if (deltaTime > 0) {
        const newVelocity = {
          x: (e.clientX - lastPointerRef.current.x) / deltaTime * 1000,
          y: (e.clientY - lastPointerRef.current.y) / deltaTime * 1000
        };
        setVelocity(newVelocity);
      }

      const newPointer = { x: e.clientX, y: e.clientY };
      
      // Calculate distance moved
      const deltaX = newPointer.x - lastPointerRef.current.x;
      const deltaY = newPointer.y - lastPointerRef.current.y;
      const distanceMoved = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance === undefined) {
        setDistance(0);
        lastPointerRef.current = newPointer;
        lastTimeRef.current = now;
        return;
      }

      const newDistance = distance + distanceMoved;
      setDistance(newDistance);

      if (newDistance >= spawnDistance) {
        spawnImage(newPointer.x, newPointer.y);
        setDistance(0);
      }

      lastPointerRef.current = newPointer;
      lastTimeRef.current = now;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [distance, spawnDistance, spawnImage]);

  return (
    <div className="fixed inset-0 overflow-hidden z-1">
      <AnimatePresence>
        {trailImages.map((image) => (
          <motion.img
            key={image.id}
            className="absolute object-contain pointer-events-none z-10"
            src={images[image.imageIndex]}
            style={{
              left: `${image.x}px`,
              top: `${image.y}px`,
              willChange: 'opacity, transform',
              height: `${imageSize}px`,
              opacity: 0.5
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 0.3,
              scale: 1,
              x: 0,
              y: 0
            }}
            transition={{
              duration: 0.1,
              x: {
                type: 'inertia',
                velocity: image.velocityX * velocityFactor
              },
              y: {
                type: 'inertia',
                velocity: image.velocityY * velocityFactor
              }
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              transition: { duration: 0.3 }
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
