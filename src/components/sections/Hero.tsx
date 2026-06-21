"use client";

import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";
import TypeWriter from "../ui/TypeWriter";
import MatrixRain from "../ui/MatrixRain";
import { ChevronDown, Icon } from "lucide-react";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            <MatrixRain />

            <div className="pointer-events-none absolute inset-0 z-[5] bg-[lineargradient(transparent_50%,rgba(0,0,0,0.8)_50%] bg-[length:100%_4px" />

            <div 
              className="pointer-events-none absolute inset-0 z-[5] opacity-15 mix-blend-overlay"
              style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`              }}
            />

            <div className="pointer-events-none absolute inset-0 z-[6] bg-[radial-gradient(circle_at_center,_transparent_10%,_#000000_100%)] opacity-95" />

            <div className="relative z-10 text-center px-6 max-w-4xl">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-hacker-green/40 bg-black/60 backdrop-blur-md mb-8 shadow-[0_0_10px_rgba(0,255,65,0.05)"
                >
                    <span className="w-2 h-2 bg-hacker-green rounded-full animate-pulse" />
                    <span className="text-hacker-green text-sm">
                        STILL LEARNING...
                    </span>
                </motion.div>
                 
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                    <p className="text-hacker-green text-lg mb-4 font-mono">
                        $ echo "Hello, World! I'm"
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                        <GlitchText text="Ashu-Cipher" className="text-gradient" />
                    </h1>
                </motion.div>                   

                <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.8 }}
                 className="text-xl md:text-3xl text-gray-400 mb-8 h-8"
                >
                    <span className="text-gray-500">{">"}</span>
                    <TypeWriter
                      words={[
                        "Penetration Tester",
                        "Open Source Contributor",
                        "Security Enthusiast",
                        "Problem Solver",
                      ]}
                    />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I am still a student learning about Offensive Security. Currently,
                    I don&apos;t have much to share, i will update it later.

                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
                >
                    <motion.a
                      href="#projects"
                      className="px-8 py-3 bg-hacker-green text-black font-bold rounded hover:bg-hacker-green/90 transition-all allow-green"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,65,0.3)"}}
                      whileTap={{ scale: 0.95 }}
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                     href="#contact"
                     className="px-8 py-3 border border-hacker-green/50 text-hacker-green rounded hover:bg-hacker-green/10 transition-all"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                    >
                        Contact Me
                    </motion.a>
                </motion.div>

                <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1.4 }}
                 className="flex items-center justify-center gap-6"
                >
                    {[
                        { icon: SiGithub, href: "https://github.com/Ashu-Cipher" },
                        { icon: FaLinkedin, href: "https://linkedin.com/in/ashu-cipher" },
                        { icon: SiInstagram, href: "https://instagram.com/ashu_cipher" },
                        { icon: SiX, href: "https://x.com/ashu_cipher" },
                    ].map(({ icon: Icon, href }) => (
                        <motion.a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-hacker-green transition-colors"
                            whileHover={{ y: -3, scale: 1.2 }}
                        >
                            <Icon size={22} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            <motion.div 
             className="absolute bottom-8 left-1/2 -translate-x-1/2"
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
            >
                <ChevronDown className="text-hacker-green/50" size={24} />
            </motion.div>
        </section>
    );
}
