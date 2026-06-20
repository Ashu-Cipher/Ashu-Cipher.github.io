"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        icon: "⟨/⟩",
        skills: [
            { name: "Python", level: 95 },
            { name: "Bash", level: 90 },
            { name: "Rust", level: 75 },
            { name: "Go", level: 70 },
            { name: "C#", level: 65 },
        ],
    },
    {
        title: "Offensive Security",
        icon: "⚔",
        skills: [
            { name: "Penetration Testing", level: 80 },
            { name: "Web Security", level: 75 },
            { name: "Network Security", level: 70 },
            { name: "Social Engineering", level: 75 },
        ],
    },
    {
        title: "Threat Modeling",
        icon: "🛡",
        skills: [
            { name: "Risk Assessment", level: 85 },
            { name: "OWASP Top 10", level: 80 },
            { name: "Vulnerability Scanning", level: 75 },
            { name: "OSINT", level: 80}
        ],
    },
    {
        title: "Infra",
        icon: "◉",
        skills: [
            { name: "Docker", level: 85 },
            { name: "AWS", level: 80 },
            { name: "Linux", level: 90 },
            { name: "Git", level: 95 },
        ],
    },
];


export default function Skills() {
    return (
        <section id="skills" className="py-32 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="mb16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                        <span className="text-hacker-green font-mono text-xl">04.</span>
                        <span className="text-gradient">Skills</span>
                        <span className="flex-1 h-[1px] bg-gradient-to-r from-hacker-green/20 to-transparent ml-4" />
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((cat, catIndex) => (
                        <motion.div
                         key={cat.title}
                         initial={{ opacity: 1, y: 0 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: catIndex * 0.15 }}
                         className="glass p-6 rounded-lg hover:board-hacker-green/30 transition-all"
                        >
                            <h3 className="text-lg font-bold text-hacker-green mb-6 flex items-center gap-3">
                                <span className="text-2xl">{cat.icon}</span>
                                {cat.title}
                            </h3>
                            <div className="space-y-4">
                                {cat.skills.map((skill, i) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-hacker-green/60 font-mono text-xs">
                                             {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-1.5 bg-hacker-green/10 rounded-full overflow-hidden">
                                           <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1.5,
                                                delay: catIndex * 0.15 + i * 0.1,
                                                ease: "easeOut",
                                            }}
                                            className="h-full rounded-full bg-gradient-to-r from-hacker-green to-hacker-cyan"
                                          />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
