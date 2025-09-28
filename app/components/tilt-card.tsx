"use client"

import { motion, useSpring } from "motion/react"
import { useRef } from "react"

interface TiltCardProps {
  children: React.ReactNode
  maxTilt?: number
  className?: string
}

export default function TiltCard({ children, maxTilt = 15, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const z = useSpring(0)
  const rotateX = useSpring(0)
  const rotateY = useSpring(0)

  const calculateTilt = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return { rotateX: 0, rotateY: 0 }

    const rect = cardRef.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Convert coordinates to percentages
    const xPercent = x / rect.width
    const yPercent = y / rect.height

    return {
      rotateX: maxTilt * (0.5 - yPercent),
      rotateY: maxTilt * (xPercent - 0.5),
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={className}
      style={{
        z,
        rotateX,
        rotateY,
        transformPerspective: 500,
        willChange: "transform",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onPointerMove={(e) => {
        const tilt = calculateTilt(e)
        rotateX.set(tilt.rotateX)
        rotateY.set(tilt.rotateY)
      }}
      onPointerLeave={() => {
        rotateX.set(0)
        rotateY.set(0)
        z.set(0)
      }}
      onPointerEnter={() => {
        z.set(-10)
      }}
    >
      {children}
    </motion.div>
  )
}
