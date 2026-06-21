
"use client";

import { motion } from "framer-motion";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
    return (
        <motion.div 
         className={`relative inline-block ${className}`}
         animate={{ opacity: [0, 1, 1, 0, 0] }}
         transition={{
            duration: 3,
            repeat: Infinity,
            times: [0, 0.1, 0.25, 0.06, 1]
         }}
        >
            <span className="relative z-10">{text}</span>
            <span 
              className="absolute top-0 left-0 text-hacker-cyan opacity-70 animate-glitch"
              style={{ clipPath: "inset(0 0 50% 0)"}}
              aria-hidden
            >
                {text}
            </span>
            <span
             className="absolute top-0 left-0 text-hacker-red opacity-70 animate-glitch"
             style={{
                clipPath: "inset(50% 0 0 0)",
                animationDelay: "0.1s",
                animationDirection: "reverse",
             }}
             aria-hidden
            >
                {text}
            </span>
        </motion.div>
    );
}
