import React from "react";
import { Link, useLocation } from "react-router-dom";

const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center space-x-8">
                            <span
                                className="text-2xl font-bold text-black cursor-pointer"
                                onClick={() => scrollToSection("home")}
                            >
                                Asim's Portfolio
                            </span>
                            <button
                                className="text-gray-600 hover:text-black font-medium transition-colors"
                                onClick={() => scrollToSection("home")}
                            >
                                Home
                            </button>
                            <button
                                className="text-gray-600 hover:text-black font-medium transition-colors"
                                onClick={() => scrollToSection("projects")}
                            >
                                Projects
                            </button>
                            <button
                                className="text-gray-600 hover:text-black font-medium transition-colors"
                                onClick={() => scrollToSection("contact")}
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 mt-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                            © 2024 Asim's Portfolio. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-black transition-colors"
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-black transition-colors"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-black transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
