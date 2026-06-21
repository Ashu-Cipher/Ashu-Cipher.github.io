"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;
        const ctx = canvasEl.getContext("2d");
        if (!ctx) return;

        canvasEl.width = window.innerWidth;
        canvasEl.height = window.innerHeight;

        const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>/{}[]();:.";
        const charArray = chars.split("");
        const fontSize = 14;
        const columns = canvasEl.width / fontSize;
        const drops: number[] = Array(Math.floor(columns)).fill(1);

        function draw() {
            if (!canvasEl || !ctx) return;
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
            ctx.fillStyle = "rgba(0, 255, 65, 0.08)";
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                const x = i * fontSize;
                ctx.fillText(text, x, y * fontSize);

                
                if (y * fontSize > canvasEl.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            });
        }

        const interval = setInterval(draw, 50);

        const handleResize = () => {
            if (!canvasEl) return;
            canvasEl.width = window.innerWidth;
            canvasEl.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-0"
        />
    );
}
