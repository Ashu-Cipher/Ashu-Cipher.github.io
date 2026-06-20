"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { features, title } from "process";
import { SiGithub, SiMarkdown } from "react-icons/si";

const projects = [
    {
        title: "CyberScore",
        description: 
          "Web based assessment tool design to test and improve user awareness against modern cyner threat.",
        tech: ["JavaScript", "CSS", "HTML"],
        SiGithub: "https://github.com/CyberScore",
        live: "https://ashu-cipher.github.io/CyberScore",
        featured: true,
        image: "/projects/cyberscore.png",
    },
    {
        title: "HackingNotes",
        description:
          "A comprehensive, live-updating playbook and active logging system. Built to document my journey.",
        tech: ["Markdown", "mkdocs", "Git"],
        SiGithub: "https://github.com/HackingNotes",
        live: "https://ashu-cipher.github.io/HackingNotes",
        featured: true,
        image: "/projects/hackingnotes.png",
    },
    {
        title: "Darknet Scanner",
        description:
          "Coming Soon...",
        tech: [""],
        SiGithub: "",
        live: "",
        featured: false,
        image: "/projects/darknet.png",
    },
];

export default function Projects() {
    const featured = projects.filter((p) => p.featured);
    const other = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-32 px-6 relative">
            <div className="max-w-6xl mx-auto">

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                        <span className="text-hacker-green font-mono text-xl">03.</span>
                        <span className="text-gradient">Projects</span>
                        <span className="flex-1 h-[1px] bg-gradient-to-r from-hacker-green/20 to-transparent ml-4" />
                    </h2>
                </motion.div>

                <div className="space-y-24 mb-24">
                    {featured.map((project, i) => (
                        <motion.div
                         key={project.title}
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: i * 0.2 }}
                         className={`relative grid md:grid-cols-2 gap-8 items-center ${
                            i % 2 !== 0 ? "md:text-right" : ""
                         }`}
                        >

                            <div
                              className={`relative group ${i % 2 !== 0 ? "md:order-2" : ""}`}
                            >
                                <div className="aspect-video bg-hacker-terminal rounded-lg border border-hacker-green/10 overflow-hidden relative">
                                 <div className="absolute inset-0 bg-hacker-green/5 group-hover:bg-transparent transition-all duration-300" />
                                 <div className="w-full h-full flex items-center justify-center text-hacker-green/30 text-6xl font-bold">
                                   {project.title[0]}
                                 </div>
                                </div>
                            </div>

                            <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                                <p className="text-hacker-green font-mono text-sm mb-2">
                                    Featured Project 
                                </p>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {project.title}
                                </h3>
                                <div className="glass p-6 rounded-lg mb-4">
                                    <p className="text-gray-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div 
                                  className={`flex flex-wrap gap-3 mb-4 ${
                                    i % 2 !== 0 ? "md:justify-end" : ""
                                  }`}
                                >
                                    {project.tech.map((t) => (
                                        <span 
                                         key={t}
                                         className="text-xs font-mono text-hacker-green/70"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div
                                 className={`flex gap-4 ${
                                    i % 2 !== 0 ? "md:justify-end" : ""
                                 }`}
                                >
                                    <a
                                     href={project.SiGithub}
                                     target="_blank"
                                     className="text-gray-400 hover:text-hacker-green transition-colors"
                                    >
                                        <SiGithub size={20} />
                                    </a>
                                    {project.live && (
                                        <a
                                         href={project.live}
                                         target="_blank"
                                         className="text-gray-400 hover:text-hacker-green transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <h3 className="text-center text-xl font-bold text-gray-300 mb-12">
                    Other Noteworthy Projects
                </h3>
                <div className="grid md:grid-cols-0 lg:grid-cols-3 gap-4">
                    {other.map((project, i) => (
                        <motion.div 
                         key={project.title}
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: i * 0.1 }}
                         whileHover={{ y: -8 }}
                         className="glass p-6 rounded-lg group hover:border-hacker-green/30 transition-a;; duration-300"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <Folder className="text-hacker-green" size={36} />
                                <div className="flex gap-3">
                                    <a
                                     href={project.SiGithub}
                                     target="_blank"
                                     className="text-gray-500 hover:text-hacker-green transition-colors"
                                    >
                                        <SiGithub size={18} />
                                    </a>
                                    {project.live && (
                                        <a 
                                         href={project.live}
                                         target="_blank"
                                         className="text-gray-500 hover:text-hacker-green transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-white group-hover:text-hacker-green transition-colors mb-3">
                                {project.title}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                     key={t}
                                     className="text-xs font-mono text-gray-600"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
