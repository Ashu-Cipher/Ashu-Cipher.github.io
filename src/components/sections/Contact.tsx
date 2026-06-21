
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.currentTarget);
        formData.append("access_key","db113c01-71f5-4402-a5ba-7c674d2264e5");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setStatus("sent");
                e.currentTarget.reset();
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-32 px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{once: true }}
                >
                 <p className="text-hacker-green font-mono text-sm mb-4">05. What&apos;s Next?</p> 
                 <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                    Get In Touch
                    </h2>  
                    <p className="text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
                        It&apos;s Ashu-Cipher, thank you for your time. Whether you have a
                        question or just want to say hi, my inbox is always open.
                    </p>
                </motion.div>  

                <motion.form
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 onSubmit={handleSubmit}
                 className="glass p-8 rounded-lg text-left space-y-6 max-w-2xl mx-auto"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-hacker-green text-sm font-mono mb-2 block">
                                {">"} name
                            </label>
                            <input 
                             type="text"
                             name="name"
                             required
                             className="w-full bg-hacker-bg border border-hacker-green/20 rounded px-4 py-3 text-gray-300 focus:outline-none focus:border-hacker-green transition-colors font-mono text-sm"
                             placeholder="ASHU"
                            />
                        </div>
                        <div>
                            <label className="text-hacker-green text-sm font-mono mb-2 block">
                                {">"} email
                            </label>
                            <input
                             type="email"
                             name="email"
                             required
                             className="w-full bg-hacker-bg border border-hacker-green/20 rounded px-4 py-3 text-gray-300 focus:outline-none focus:border-hacker-green transition-colors font-mmono text-sm"
                             placeholder="me@example.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-hacker-green text-sm font-mono mb-2 block">
                            {">"} message
                        </label>
                        <textarea
                         name="message"
                         required
                         rows={5}
                         className="w-full bg-hacker-bg border border-hacker-green/20 rounded px-4 py-3 text-gray-300 focus:outline-none focus:border-hacker-green transition-colors font-mono text-sm resize-none"
                         placeholder="Your message..."
                        />
                    </div>



                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-3 bg-hacker-green text-black font-bold rounded hover:bg-hacker-green/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                        {status === "sending" ? (
                            "Sending..."
                        ) : status === "sent" ? (
                            "Message Sent! ✓"
                        ) : status === "error" ? (
                            "Submission Error ✗"
                        ) : (
                            <>
                              <Send size={16} />
                            </>
                        )}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}