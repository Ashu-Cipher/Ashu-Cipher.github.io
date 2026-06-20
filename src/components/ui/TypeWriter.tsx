
"use client";

import { clear } from "console";
import { useState, useEffect } from "react";

interface TypeWriterProps {
    words: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    delayBetween?: number;
}

export default function TypeWriter({
    words,
    typeSpeed = 100,
    deleteSpeed = 50,
    delayBetween = 200,
}: TypeWriterProps) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setText(currentWord.substring(0, text.length + 1));
                    if (text === currentWord) {
                        setTimeout(() => setIsDeleting(true), delayBetween);
                    }
                } else {
                    setText(currentWord.substring(0, text.length - 1));
                    if (text === "") {
                        setIsDeleting(false);
                        setWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            isDeleting ? deleteSpeed : typeSpeed
        );
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delayBetween]);

    return (
        <span className="text-hacker-green">
            {text}
            <span className="animate-pulse-green text-hacker-green"></span>
        </span>
    );
}
