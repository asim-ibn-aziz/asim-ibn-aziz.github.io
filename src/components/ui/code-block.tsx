"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";

type CodeBlockProps = {
    language: string;
    filename: string;
    highlightLines?: number[];
} & (
    | {
          code: string;
          tabs?: never;
      }
    | {
          code?: never;
          tabs: Array<{
              name: string;
              code: string;
              language?: string;
              highlightLines?: number[];
          }>;
      }
);

export const CodeBlock = ({
    language,
    filename,
    code,
    highlightLines = [],
    tabs = [],
}: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [revealedLength, setRevealedLength] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [position, setPosition] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const codeBlockRef = useRef<HTMLDivElement>(null);

    const tabsExist = tabs.length > 0;
    const activeCode = tabsExist ? tabs[activeTab].code : code || "";
    const activeLanguage = tabsExist
        ? tabs[activeTab].language || language
        : language;
    const activeHighlightLines = tabsExist
        ? tabs[activeTab].highlightLines || []
        : highlightLines;

    const copyToClipboard = async () => {
        const textToCopy = activeCode;
        if (textToCopy) {
            try {
                await navigator.clipboard.writeText(textToCopy);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error("Failed to copy:", err);
            }
        }
    };

    // Get the display code with cursor
    const getDisplayCodeWithCursor = useCallback(
        (originalCode: string, revealLength: number) => {
            if (!originalCode) return "";

            const revealedPart = originalCode.slice(0, revealLength);
            const hiddenPart = originalCode.slice(revealLength);

            // Add cursor at the reveal position
            const cursor = revealLength < originalCode.length ? "|" : "";

            return revealedPart + cursor + hiddenPart.replace(/./g, " ");
        },
        []
    );

    // Handle scroll-based character revelation and position
    const handleScroll = useCallback(() => {
        if (!codeBlockRef.current || !activeCode) return;

        try {
            const element = codeBlockRef.current;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how much of the element is in view
            const elementTop = rect.top;
            const elementHeight = rect.height;

            // Define the scroll range where the effect should happen
            const startReveal = windowHeight * 0.8;
            const endReveal = -elementHeight * 0.2;

            let progress = 0;

            if (elementTop <= startReveal && elementTop >= endReveal) {
                progress =
                    (startReveal - elementTop) / (startReveal - endReveal);
                progress = Math.max(0, Math.min(1, progress));
            } else if (elementTop < endReveal) {
                progress = 1;
            }

            setScrollProgress(progress);

            // Calculate position based on scroll, but cap it at 33%
            const maxOffset = 33; // Move to 1/3 of screen width
            const newPosition = Math.min(progress * maxOffset, maxOffset);
            setPosition(newPosition);

            // Set fixed state when we reach the target position
            setIsFixed(progress >= 0.8);

            // Map progress to character count
            const totalChars = activeCode.length;
            const targetLength = Math.floor(progress * totalChars);
            setRevealedLength(targetLength);
        } catch (err) {
            console.error("Scroll handler error:", err);
        }
    }, [activeCode]);

    // Set up scroll listener
    useEffect(() => {
        const throttledHandleScroll = () => {
            requestAnimationFrame(handleScroll);
        };

        window.addEventListener("scroll", throttledHandleScroll, {
            passive: true,
        });
        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, [handleScroll]);

    // Reset when tab changes
    useEffect(() => {
        setRevealedLength(0);
        setScrollProgress(0);
        setPosition(0);
        setIsFixed(false);
        setTimeout(handleScroll, 100);
    }, [activeTab, handleScroll]);

    const displayCode = activeCode
        ? getDisplayCodeWithCursor(activeCode, revealedLength)
        : "";

    return (
        <div className="w-full min-h-screen flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                {/* Code block container */}
                <div
                    ref={codeBlockRef}
                    className="w-full flex justify-center"
                    style={{
                        transform: `translateX(${position}%)`,
                        transition: "transform 0.1s linear",
                    }}
                >
                    {/* Code block */}
                    <div
                        className={`${
                            isFixed ? "w-[600px]" : "w-full max-w-4xl"
                        }`}
                    >
                        <div className="relative w-full rounded-xl bg-slate-900 p-4 font-mono text-sm shadow-2xl">
                            <div className="flex flex-col gap-2">
                                {tabsExist && (
                                    <div className="flex overflow-x-auto">
                                        {tabs.map((tab, index) => (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    setActiveTab(index)
                                                }
                                                className={`px-3 py-2 text-xs transition-colors font-sans ${
                                                    activeTab === index
                                                        ? "text-white"
                                                        : "text-zinc-400 hover:text-zinc-200"
                                                }`}
                                            >
                                                {tab.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                                {!tabsExist && filename && (
                                    <div className="flex justify-between items-center py-2">
                                        <div className="text-xs text-zinc-400">
                                            {filename}
                                        </div>
                                        <button
                                            onClick={copyToClipboard}
                                            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
                                        >
                                            {copied ? (
                                                <IconCheck size={14} />
                                            ) : (
                                                <IconCopy size={14} />
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="relative rounded-lg overflow-hidden">
                                <SyntaxHighlighter
                                    language={activeLanguage}
                                    style={atomDark}
                                    customStyle={{
                                        margin: 0,
                                        padding: 0,
                                        background: "transparent",
                                        fontSize: "0.875rem",
                                        borderRadius: "0.5rem",
                                    }}
                                    wrapLines={true}
                                    showLineNumbers={true}
                                    lineNumberStyle={{
                                        color: "#6b7280",
                                        backgroundColor: "transparent",
                                        paddingRight: "1em",
                                        textAlign: "right",
                                        userSelect: "none",
                                        minWidth: "2em",
                                    }}
                                    lineProps={(lineNumber) => ({
                                        style: {
                                            backgroundColor:
                                                activeHighlightLines.includes(
                                                    lineNumber
                                                )
                                                    ? "rgba(255,255,255,0.1)"
                                                    : "transparent",
                                            display: "block",
                                            width: "100%",
                                        },
                                    })}
                                    PreTag="div"
                                >
                                    {displayCode}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content that appears below */}
                {isFixed && (
                    <div
                        className="w-full max-w-7xl mx-auto"
                        style={{
                            opacity: scrollProgress,
                            transform: `translateY(${
                                (1 - scrollProgress) * 50
                            }px)`,
                            transition:
                                "opacity 0.3s ease-out, transform 0.3s ease-out",
                        }}
                    >
                        {/* Removed FeaturesSectionDemo to prevent duplication */}
                    </div>
                )}
            </div>
        </div>
    );
};
