"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>/{}[]();:.";
        const charArray = chars.split("");
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = Array(Math.floor(columns)).fill(1);

        function draw() {
            ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
            ctx.fillReact(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#00ff4120";
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                const x = i * fontSize;
                ctx.fillText(text, x, y * fontSize);

                
                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            });
        }

        const interval = setInterval(draw, 50);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
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
