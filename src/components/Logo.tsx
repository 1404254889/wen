import React from 'react';
import { motion } from 'motion/react';
import { Video } from 'lucide-react';

export const Logo = ({ size = 64, className = "", onClick }: { size?: number, className?: string, onClick?: () => void }) => {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      {/* Premium Obsidian Base */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 rounded-[35%] bg-[#0A0A0A] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/[0.03]"
      />
      
      {/* The "Core" - Abstract DR Symbol */}
      <div className="relative z-10 w-[60%] h-[60%]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Abstract "D" outer curve */}
          <motion.path 
            d="M30 20C55 20 80 40 80 55C80 70 55 85 30 85" 
            stroke="url(#goldGradient)" 
            strokeWidth="8" 
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {/* Abstract "R" inner stroke */}
          <motion.path 
            d="M35 35L35 85M35 55L65 85" 
            stroke="url(#goldGradient)" 
            strokeWidth="8" 
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
          />
          {/* The "Record" Point */}
          <motion.circle 
            cx="35" cy="20" r="6" 
            fill="#FFD700"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#886918" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Precision focus corners */}
      <div className="absolute inset-2 border-[0.5px] border-white/5 rounded-[30%]" />
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#FFD700]/30 rounded-tl-xl" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#FFD700]/30 rounded-br-xl" />

      {/* Atmospheric Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#FFD700]/5 blur-xl rounded-full"
      />
    </div>
  );
};
