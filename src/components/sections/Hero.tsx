"use client";

import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";
import TypeWriter from "../ui/TypeWriter";
import MatrixRain from "../ui/MatrixRain";
import { ChevronDown, Icon } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify center overflow-hidden"
        >
            <MatrixRain />

            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

            <div className="absolute inset-0 bg-gradient-radial from-hacker-green/5 via-transparent to-transparent" />

            <div className="reltive z-10 text-center px-6 max-w-4xl">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-hacker-green/20 bg-hacker-green/5 mb-8"
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
                        Hello, World! I'm
                    </p>
                    <h1 className="tex-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                        <GlitchText text="Ashu-Cipher" className="text-gradient" />
                    </h1>
                </motion.div>                   

                <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.8 }}
                 className="text-xl md:text-2xl text-gray-400 mb-8 h-8"
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
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
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
