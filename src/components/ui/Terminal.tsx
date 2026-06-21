
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Contact, Minus, Square, X } from "lucide-react";

const commands: Record<string, string> = {
    help: `Available commands:
    about       — Who am I?
    skills      — Tech Stack
    contact     — Reach me
    clear       — Clear terminal
    fastfetch   — System info`,

    about: `
╔══════════════════════════════════════╗
║  Name:     Ashu-Cipher               ║
║  Role:     Penetration Tester        ║
║  Location: Undisclosed, India        ║
║  Focus:    Web3 / Security / AI      ║
╚══════════════════════════════════════╝`,
    
    skills: `
    Scripting:   Python, Bash, Go, Rust, c#
    Foundation:  TypeScript, Node.js, React, FastAPI
    Infra:       Linux, Docker, AWS, SQL
    Focus:       OSCP, CTFs, AD, Labs`,

    contact: `
    Email:      ashu.cipher@gmail.com
    Github:     gitub.com/Ashu-Cipher
    Twitter:    x.com/ashu_cipher
    LinkedIn:   linkedin.com/in/ashu-cipher
    Instagram:  instagram.com/ashu_cipher`,

    fastfetch: `
       ████████           ashu@kali
     ██        ██         ─────────────
   ██    ████    ██       OS: Kali GNU
  ██   ██    ██   ██      Kernel: Linux
  ██   ██    ██   ██      Shell: zsh 5.9
   ██    ████    ██       Terminal: qterminal
     ██        ██         Languages: Python, Bash
       ████████           Coffee: ███████████ 99%`,
};

export default function Terminal() {
    const [history, setHistory] = useState<{ cmd: string; output: string }[]>([]);
    const [input, setInput] = useState("");

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: scrollContainerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLocaleLowerCase();

        if (cmd === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        const output = commands[cmd] || `Command not found: ${cmd}. Type 'help' for available commands.`;
        setHistory((prev) => [...prev, { cmd: input, output }]);
        setInput("");
    };

    return (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden border border-hacker-green/20 glow-green"
          >

            <div className="flex items-center gap-2 px-4 py-3 bg-hacker-terminal border-b border-hacker-green/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-500 ml-4 font-mono">
                ashu@portfolio:~
              </span>
            </div>


            <div 
             ref={scrollContainerRef}
             className="bg-hacker-terminal p-4 h-80 overflow-y-auto font-mono text-sm"
            >
                <div className="text-hacker-green/60 mb-4">
                 Welcome to my portfolio terminal. Type &apos;help&apos; for commands. 
                </div>


                {history.map((entry, i) => (
                    <div key={i} className="mb-3">
                        <div className="flex items-center gap-2">
                            <span className="text-hacker-green">❯</span>
                            <span className="text-gray-300">{entry.cmd}</span>
                        </div>
                        <pre className="text-gray-400 mt-1 whitespace-pre-wrap text-xs leading-relaxed">
                            {entry.output}
                        </pre>
                    </div>    
                ))}


                <form onSubmit={handleCommand} className="flex items-center gap-2">
                    <span className="text-hacker-green">❯</span>
                    <input
                     type="text"
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     className="flex-1 bg-transparent outline-none text-gray-300 caret-hacker-green"
                     autoFocus
                     spellCheck={false}
                    /> 
                </form>
            </div>
          </motion.div>
    );
}
