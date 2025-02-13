"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.07),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    let wordClass = "";
                    if (word === "User" || word === "Experiences" || word === "Next.js." || word === "React") {
                        wordClass = "text-purple";
                    }

                    if (word === "Amit") {
                        wordClass = "text-purple";
                    }

                    return (
                        <motion.span
                            key={word + idx}
                            className={`${wordClass} opacity-0`}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="my-4">
                <div className="dark:text-white text-black leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
