
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero", key: "01" },
    { name: "About", href: "#about", key: "02" },
    { name: "Projects", href: "#projects", key: "03" },
    { name: "Skills", href: "#skills", key: "04" },
    { name: "Contact", href: "#contact", key: "05" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? "glass shadow-lg shadow-hacker-green/5" : "bg-transparent"
        }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/*Logo*/}
                <motion.a
                href="#hero"
                className="flex items-center gap-2 text-hacker-green font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                >
                    <Terminal size={20} />
                    <span className="crt-effect">~/Ashu-Cipher</span>
                    <span className="animate-pulse-green">_</span>
                </motion.a>

                {/*Desktop Nav*/}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <motion.a
                        key={item.key}
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-hacker-green transition-colors group"
                        whileHover={{ y: -2 }}
                        >
                            <span className="text-hacker-green/60 text-xs mr-1">
                             {item.key}.
                            </span>
                            {item.name}
                            <span className="block h-[1px] w-0 group-hover:w-full transition-all duration-300 bg-hacker-green" />
                        </motion.a>
                    ))}
                    <motion.a
                      href="resume.pdf"
                      target="_blank"
                      className="px-4 py-2 border border-hacker-green text-hacker-green text-sm rounded hover:bg-hacker-green/10 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Resume
                    </motion.a>
                </div>

                <button
                  className="md:hidden text-hacker-green"
                  onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass border-t border-hacker-green/10"
                >
                    <div className="px-6 py-6 flex flex-col gap-4">
                        {navItems.map((item, i) => (
                            <motion.a
                             key={item.key}
                             href={item.href}
                             initial={{ x: -20, opacity: 0 }}
                             animate={{ x: 0, opacity: 1 }}
                             transition={{ delay: i * 0.1 }}
                             className="text-gray-400 hover:text-hacker-green transition-colors py-2"
                             onClick={() => setIsOpen(false)}
                            >
                                <span className="text-hacker-green/60 mr-2">{item.key}.</span>
                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}