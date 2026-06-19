
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY});
            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "A" ||
                target.tagName === "BUTTON"
            );
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return() => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <>
        {/*Dot*/}
        <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-hacker-green rounded-full pointer-events-none z-[10000] mix-blend-difference"
        animate={{
            x: position.x - 6,
            y: position.y - 6,
            scale: isClicking ? 0.5 : 1,
        }}
        transition={{type: "spring", stiffness: 500, damping: 28 }}
        />
        {/*Ring*/}
        <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-hacker-green rounded-full pointer-events-none z-[10000] mix-blend-difference"
        animate={{
            x: position.x - 16,
            y: position.y - 16,
            scale: isPointer ? 1.5 : isClicking ? 0.8 : 1,
            opacity: isPointer ? 0.8 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        />
        </>
    );
}
