import React, { useState } from "react";
import { useTheme } from "./theme-provider";
import { IconSun, IconMoon } from "@tabler/icons-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 z-50 w-full">
            {/* Blurred background */}
            <div className="absolute inset-0 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-md" />

            {/* Content */}
            <div className="relative mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
                {/* Left side - Logo */}
                <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-800 dark:text-white">
                        ASIM ARABZAI
                    </span>
                </div>

                {/* Right side - Navigation Links */}
                <div className="hidden md:flex md:items-center md:space-x-8">
                    <button
                        onClick={() => scrollToSection("home")}
                        className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                        Contact
                    </button>
                    {/* iPhone-style Theme Toggle */}
                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                        {theme === "dark" ? (
                            <IconSun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        ) : (
                            <IconMoon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        )}
                    </button>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-lg p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 md:hidden"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="absolute top-14 w-full bg-white/30 dark:bg-neutral-900/30 backdrop-blur-md md:hidden">
                    <div className="flex flex-col space-y-4 p-4">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                        >
                            Contact
                        </button>
                        {/* iPhone-style Theme Toggle for Mobile */}
                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="flex items-center space-x-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                        >
                            <div className="relative h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 ease-in-out">
                                <div
                                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
                                        theme === "dark"
                                            ? "translate-x-5"
                                            : "translate-x-0"
                                    }`}
                                >
                                    <IconSun className="h-5 w-5 text-gray-600 dark:hidden absolute top-0 left-0" />
                                    <IconMoon className="h-5 w-5 text-gray-300 hidden dark:block absolute top-0 left-0" />
                                </div>
                            </div>
                            <span>Toggle Theme</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Fading border */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-neutral-700 to-transparent" />
        </nav>
    );
};

export default Navbar;
