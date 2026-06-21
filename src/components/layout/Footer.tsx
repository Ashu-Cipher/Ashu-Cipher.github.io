
"use client";

import { SiGithub, SiX, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-10 bg-black/95 backdrop-blur-md py-8 px-6 border-t border-hacker-green/10">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
                <div className="flex gap-6">
                    {[
                        { icon: SiGithub, href: "https://github.com/Ashu-Cipher" },
                        { icon: FaLinkedin, href: "https://linkedin.com/in/ashu-cipher" },
                        { icon: SiX, href: "https://x.com/ashu_cipher" },
                        { icon: SiInstagram, href: "https://www.instagram.com/ashu_cipher/"},
                    ].map(({ icon: Icon, href }) => (
                        <a
                          key={href}
                          href={href}
                          target="_blank"
                          className="text-gray-400 hover:text-hacker-green hover:scale-100 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
                <p className="text-gray-400 text-xs font-mono flex items-center gap-1 mt-2">
                    Built with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse mx-1" /> by Ashu-Cipher
                    © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}