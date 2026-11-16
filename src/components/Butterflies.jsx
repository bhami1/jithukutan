import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Butterflies clustered specifically around the profile image corner
const imageButterflyConfigs = [
  {
    id: 1,
    size: 26,
    wingColor: '#b8d8be', // Pastel sage
    accentColor: '#9ec5ab',
    positionClasses: '-top-6 -right-4 sm:-top-7 sm:-right-6',
    flyAnimation: {
      x: [0, 8, -6, 4, 0],
      y: [0, -10, 5, -6, 0],
      rotate: [18, 30, 8, 22, 18],
    },
    duration: 9,
    wingSpeed: 0.3,
    opacity: 0.9,
  },
  {
    id: 2,
    size: 23,
    wingColor: '#d8b4e2', // Pastel lavender
    accentColor: '#c4b5fd',
    positionClasses: '-top-8 right-16 sm:-top-10 sm:right-24',
    flyAnimation: {
      x: [0, -7, 6, -4, 0],
      y: [0, 8, -7, 4, 0],
      rotate: [-12, -25, 4, -16, -12],
    },
    duration: 11,
    wingSpeed: 0.28,
    opacity: 0.85,
  },
  {
    id: 3,
    size: 21,
    wingColor: '#fed7aa', // Pastel peach
    accentColor: '#fdba74',
    positionClasses: 'top-1/4 -right-7 sm:top-1/4 sm:-right-8',
    flyAnimation: {
      x: [0, 6, -8, 5, 0],
      y: [0, -12, 6, -5, 0],
      rotate: [15, -10, 20, 5, 15],
    },
    duration: 10,
    wingSpeed: 0.33,
    opacity: 0.8,
  },
  {
    id: 4,
    size: 19,
    wingColor: '#bae6fd', // Pastel celestial mist
    accentColor: '#a5f3fc',
    positionClasses: '-top-4 left-8 sm:-top-5 sm:left-12',
    flyAnimation: {
      x: [0, -6, 8, -4, 0],
      y: [0, 6, -8, 4, 0],
      rotate: [-10, -22, 6, -14, -10],
    },
    duration: 12,
    wingSpeed: 0.32,
    opacity: 0.8,
  }
];

// Sparkle particle component for the twinkle evaporation effect
function TwinkleBurst({ color }) {
  const sparks = [
    { angle: 0, dist: 20 },
    { angle: 45, dist: 24 },
    { angle: 90, dist: 18 },
    { angle: 135, dist: 23 },
    { angle: 180, dist: 20 },
    { angle: 225, dist: 24 },
    { angle: 270, dist: 18 },
    { angle: 315, dist: 23 },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
      
      {/* Central Twinkle Star */}
      <motion.div
        initial={{ scale: 0, opacity: 1, rotate: 0 }}
        animate={{ scale: [0, 1.6, 0], opacity: [1, 1, 0], rotate: [0, 60, 120] }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="absolute"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
          style={{ fill: color }}
        >
          <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
        </svg>
      </motion.div>

      {/* Halo Glow */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0.9 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute w-9 h-9 rounded-full"
        style={{
          background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`,
        }}
      />

      {/* Radiating Sparkles */}
      {sparks.map((spark, i) => {
        const rad = (spark.angle * Math.PI) / 180;
        const targetX = Math.cos(rad) * spark.dist;
        const targetY = Math.sin(rad) * spark.dist;

        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{
              x: targetX,
              y: targetY,
              scale: [1, 1.2, 0],
              opacity: [1, 0.8, 0],
            }}
            transition={{ duration: 0.5, delay: i * 0.02, ease: 'easeOut' }}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: '#ffffff',
              boxShadow: `0 0 6px ${color}`,
            }}
          />
        );
      })}
    </div>
  );
}

function CornerButterflyItem({ config, onEvaporate, isEvaporated }) {
  const { id, size, wingColor, accentColor, positionClasses, flyAnimation, duration, wingSpeed, opacity } = config;
  const [isEvaporating, setIsEvaporating] = useState(false);

  if (isEvaporated) return null;

  const handleTouch = () => {
    if (isEvaporating) return;
    setIsEvaporating(true);
    setTimeout(() => {
      onEvaporate(id);
    }, 550);
  };

  return (
    <div
      className={`absolute ${positionClasses} z-40 select-none`}
      style={{
        width: size + 20, // generous clickable target
        height: size + 20,
      }}
    >
      <motion.div
        animate={isEvaporating ? { scale: 1.3, opacity: 0, filter: 'blur(4px)' } : flyAnimation}
        transition={
          isEvaporating
            ? { duration: 0.35, ease: 'easeOut' }
            : { duration, repeat: Infinity, ease: 'easeInOut' }
        }
        onClick={handleTouch}
        onMouseEnter={handleTouch}
        onTouchStart={handleTouch}
        title="Touch to release"
        className="w-full h-full flex items-center justify-center cursor-pointer group"
      >
        {/* Twinkle Sparkle Burst on Evaporation */}
        {isEvaporating && (
          <TwinkleBurst color={wingColor} />
        )}

        {/* Butterfly Body & Wings */}
        <div
          className="relative flex items-center justify-center transition-transform group-hover:scale-115"
          style={{
            width: size,
            height: size,
            opacity: isEvaporating ? 0 : opacity,
            transition: 'opacity 0.25s ease',
          }}
        >
          {/* Left Wing */}
          <motion.div
            style={{
              transformOrigin: 'right center',
              width: size * 0.52,
              height: size * 0.85,
            }}
            animate={
              isEvaporating
                ? { rotateY: 90, opacity: 0 }
                : { rotateY: [0, 68, 0] }
            }
            transition={{
              duration: isEvaporating ? 0.25 : wingSpeed,
              repeat: isEvaporating ? 0 : Infinity,
              ease: 'easeInOut',
            }}
            className="absolute right-1/2"
          >
            <svg viewBox="0 0 24 36" fill="none" className="w-full h-full drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]">
              <path
                d="M24 18 C20 8, 8 2, 2 6 C-3 10, 4 22, 24 18 Z"
                fill={wingColor}
                fillOpacity="0.9"
              />
              <path
                d="M24 18 C16 22, 6 26, 4 32 C2 36, 12 36, 24 19 Z"
                fill={accentColor}
                fillOpacity="0.8"
              />
              <path
                d="M24 18 C14 12, 8 8, 4 8"
                stroke="#ffffff"
                strokeWidth="0.75"
                strokeOpacity="0.5"
              />
            </svg>
          </motion.div>

          {/* Slender Body */}
          <div
            className="relative z-10 rounded-full"
            style={{
              width: Math.max(2, size * 0.08),
              height: size * 0.65,
              backgroundColor: '#334155',
              boxShadow: '0 0 3px rgba(255,255,255,0.25)',
            }}
          />

          {/* Right Wing */}
          <motion.div
            style={{
              transformOrigin: 'left center',
              width: size * 0.52,
              height: size * 0.85,
            }}
            animate={
              isEvaporating
                ? { rotateY: -90, opacity: 0 }
                : { rotateY: [0, -68, 0] }
            }
            transition={{
              duration: isEvaporating ? 0.25 : wingSpeed,
              repeat: isEvaporating ? 0 : Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-1/2"
          >
            <svg viewBox="0 0 24 36" fill="none" className="w-full h-full drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]">
              <path
                d="M0 18 C4 8, 16 2, 22 6 C27 10, 20 22, 0 18 Z"
                fill={wingColor}
                fillOpacity="0.9"
              />
              <path
                d="M0 18 C8 22, 18 26, 20 32 C22 36, 12 36, 0 19 Z"
                fill={accentColor}
                fillOpacity="0.8"
              />
              <path
                d="M0 18 C10 12, 16 8, 20 8"
                stroke="#ffffff"
                strokeWidth="0.75"
                strokeOpacity="0.5"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Butterflies() {
  const [enabled, setEnabled] = useState(true);
  const [evaporatedSet, setEvaporatedSet] = useState(() => new Set());
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setEnabled(!mediaQuery.matches);

    const handler = () => setEnabled(!mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleEvaporate = (id) => {
    setEvaporatedSet((prev) => {
      const next = new Set(prev);
      next.add(id);

      if (next.size === imageButterflyConfigs.length) {
        setToastMessage("✨ All butterflies released. They'll return on refresh.");
        setTimeout(() => setToastMessage(null), 3500);
      }
      return next;
    });
  };

  if (!enabled) return null;

  return (
    <>
      {imageButterflyConfigs.map((b) => (
        <CornerButterflyItem
          key={b.id}
          config={b}
          onEvaporate={handleEvaporate}
          isEvaporated={evaporatedSet.has(b.id)}
        />
      ))}

      {/* Gentle toast feedback when all are released */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-2xl glass-card border border-pastel-sage/30 bg-[#12141c]/95 text-xs font-mono text-pastel-cream shadow-xl shadow-black/60 flex items-center gap-2 pointer-events-none"
          >
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
