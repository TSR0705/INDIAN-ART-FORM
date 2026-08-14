import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Sparkles, ExternalLink } from 'lucide-react';

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  category?: string;
  color?: string;
  link?: {
    url: string;
    text: string;
  };
  onInspect?: () => void;
}

interface Timeline3DProps {
  events: TimelineEvent[];
  backgroundColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  accentColor?: string;
  showImages?: boolean;
  className?: string;
  onSelectEvent?: (eventId: string) => void;
}

const defaultColors = {
  background: 'bg-slate-950',
  primary: 'bg-amber-500',
  secondary: 'bg-amber-700',
  text: 'text-slate-100',
  accent: 'bg-amber-400',
};

interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
  activeEvent: string | null;
  setActiveEvent: (id: string | null) => void;
  mousePosition: { x: number; y: number };
  primaryColor: string;
  accentColor: string;
  showImages: boolean;
  onSelectEvent?: (eventId: string) => void;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  event,
  index,
  activeEvent,
  setActiveEvent,
  mousePosition,
  primaryColor,
  accentColor,
  showImages,
  onSelectEvent,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;
  const isSelected = activeEvent === event.id;
  const eventColor = event.color ? `bg-${event.color}-500` : primaryColor;

  return (
    <motion.div
      ref={ref}
      className={`relative mb-16 md:mb-24 ${
        isEven ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
      } md:w-1/2 flex ${isEven ? 'md:justify-start' : 'md:justify-end'} px-3 sm:px-4`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          x: isEven ? 40 : -40,
          y: 20,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      {/* Central Timeline node */}
      <div
        className={`absolute left-4 md:left-auto ${
          isEven ? 'md:-left-5' : 'md:-right-5'
        } top-6 transform -translate-x-1/2 md:translate-x-0 z-20`}
      >
        <motion.button
          className={`w-10 h-10 rounded-full ${eventColor} flex items-center justify-center border-4 border-slate-950 cursor-pointer shadow-lg shadow-amber-500/20 text-slate-950 font-bold text-sm focus:outline-none`}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setActiveEvent(isSelected ? null : event.id);
            if (onSelectEvent) onSelectEvent(event.id);
          }}
          animate={{
            boxShadow: isSelected
              ? [
                  '0 0 0 0 rgba(197, 160, 89, 0.7)',
                  '0 0 0 12px rgba(197, 160, 89, 0)',
                  '0 0 0 0 rgba(197, 160, 89, 0.7)',
                ]
              : '0 0 10px rgba(0,0,0,0.5)',
          }}
          transition={{
            repeat: isSelected ? Infinity : 0,
            duration: 1.8,
          }}
          aria-label={`Select ${event.title}`}
        >
          {event.icon || <span>{index + 1}</span>}
        </motion.button>
      </div>

      {/* Museum Exhibition Card */}
      <motion.div
        className={`relative z-10 w-full ml-8 md:ml-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 border ${
          isSelected
            ? 'border-amber-400/80 bg-slate-900/95 shadow-amber-500/10'
            : 'border-slate-800/80 bg-slate-900/80 hover:border-amber-500/40 hover:bg-slate-900/90'
        } backdrop-blur-xl`}
        whileHover={{
          y: -4,
          transition: { duration: 0.25 },
        }}
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) rotateY(${
            mousePosition.x * (isEven ? -2.5 : 2.5)
          }deg) rotateX(${mousePosition.y * -2.5}deg)`,
        }}
        onMouseEnter={() => setActiveEvent(event.id)}
      >
        {/* Artwork Image Frame */}
        {showImages && event.image && (
          <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-slate-950 border-b border-slate-800/60 group">
            <motion.img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-contain p-2 sm:p-3 transition-transform duration-700 group-hover:scale-105"
              initial={{ scale: 1 }}
            />
            
            {/* Ambient vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none"></div>

            {/* Category Era Pill */}
            {event.category && (
              <div className="absolute top-3.5 right-3.5 z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-amber-500/90 text-slate-950 shadow-md backdrop-blur-sm border border-amber-300/30">
                  {event.category}
                </span>
              </div>
            )}

            {/* Date Pill Top Left */}
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold tracking-wider bg-slate-900/90 text-amber-300 border border-slate-700/80 shadow-md backdrop-blur-sm">
                {event.date}
              </span>
            </div>
          </div>
        )}

        {/* Card Content Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-slate-100 group-hover:text-amber-300 transition-colors">
              {event.title}
            </h3>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed font-sans line-clamp-3 mb-4">
            {event.description}
          </p>

          {/* Expanded / Action Buttons */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                if (onSelectEvent) onSelectEvent(event.id);
                else if (event.onInspect) event.onInspect();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Masterpiece</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {event.link && (
              <a
                href={event.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-amber-300 transition-colors"
              >
                <span>{event.link.text}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom accent glow bar */}
        <motion.div
          className={`h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600`}
          initial={{ width: '0%' }}
          animate={{ width: isSelected ? '100%' : '30%' }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

export const Timeline3D: React.FC<Timeline3DProps> = ({
  events,
  backgroundColor = defaultColors.background,
  primaryColor = defaultColors.primary,
  secondaryColor = defaultColors.secondary,
  textColor = defaultColors.text,
  accentColor = defaultColors.accent,
  showImages = true,
  className = '',
  onSelectEvent,
}) => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      className={`w-full ${backgroundColor} py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ${textColor} ${className}`}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Floating atmospheric ambient orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full opacity-10 ${
                i % 2 === 0 ? 'bg-amber-500' : 'bg-amber-700'
              }`}
              animate={{
                x: [
                  `${15 + i * 14}%`,
                  `${25 + i * 10}%`,
                  `${10 + i * 15}%`,
                  `${15 + i * 14}%`,
                ],
                y: [
                  `${10 + i * 15}%`,
                  `${22 + i * 12}%`,
                  `${35 + i * 8}%`,
                  `${10 + i * 15}%`,
                ],
                scale: [1, 1.3, 1.1, 1],
              }}
              transition={{
                duration: 22 + i * 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              }}
              style={{
                width: `${70 + i * 30}px`,
                height: `${70 + i * 30}px`,
                filter: 'blur(30px)',
                zIndex: 0,
              }}
            />
          ))}
        </div>

        {/* Main timeline content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">Chronological Exhibition</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-black mt-2 text-slate-100 tracking-tight">
              Artifacts Across <span className="gold-gradient-text">Epochs</span>
            </h2>
            <p className="text-slate-400 font-cormorant text-base sm:text-lg max-w-xl mx-auto mt-2">
              Hover or click any milestone to discover historical context, metallurgy, symbolism, and museum provenance.
            </p>
          </div>

          <div className="relative">
            {/* Central golden luminous timeline track */}
            <div
              className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 via-amber-400 to-amber-600 rounded-full"
              style={{
                boxShadow: '0 0 15px rgba(197, 160, 89, 0.4)',
              }}
            ></div>

            {/* Timeline Event Cards */}
            {events.map((event, index) => (
              <TimelineCard
                key={event.id}
                event={event}
                index={index}
                activeEvent={activeEvent}
                setActiveEvent={setActiveEvent}
                mousePosition={mousePosition}
                primaryColor={primaryColor}
                accentColor={accentColor}
                showImages={showImages}
                onSelectEvent={onSelectEvent}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline3D;
