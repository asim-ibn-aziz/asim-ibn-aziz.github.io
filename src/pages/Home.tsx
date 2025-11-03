import React from "react";
import Macbook from "../components/Macbook";
import { TextHoverEffect } from "../components/ui/text-hover-effect";
import CodeBlockDemo from "../components/CodeBlockDemo";
import FeaturesSectionDemo from "../components/FeaturesSectionDemo";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            <Navbar />
            {/* Hero Section */}
            <section id="home" className="relative pt-0">
                <Macbook
                    src="/images/hero.png"
                    title={
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-xl sm:text-lg text-gray-600 dark:text-gray-400">
                                Hi, I'm
                            </p>
                            <div className="h-32 w-full sm:h-32">
                                <TextHoverEffect text="ASIM ARABZAI" />
                            </div>
                            <p className="text-xl sm:text-lg text-gray-600 dark:text-gray-400">
                                Machine Learning Engineer | NLP & Generative AI
                                Specialist | Web Application Engineer
                            </p>
                            <p className="text-base sm:text-sm text-gray-600 dark:text-gray-400 text-center max-w-md mx-auto leading-relaxed">
                                I bridge the gap between AI research and
                                full-stack development, crafting scalable
                                platforms that combine advanced intelligence
                                with seamless user experiences. From building
                                chatbots, RAG pipelines, and generative apps to
                                designing interactive dashboards and API-based
                                systems, I deliver end-to-end AI-powered
                                solutions.
                            </p>

                            {/* Mobile CTA Buttons */}
                            <div className="flex flex-col sm:hidden gap-3 mt-6 w-40 max-w-sm mx-auto">
                                <button
                                    onClick={() => {
                                        const element =
                                            document.getElementById("projects");
                                        if (element) {
                                            element.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        }
                                    }}
                                    className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 border border-gray-200 dark:border-gray-700 text-sm"
                                >
                                    View My Projects
                                </button>
                                <button
                                    onClick={() => {
                                        // link to download the resume
                                        const link =
                                            document.createElement("a");
                                        link.href = "/resume.pdf"; // Make sure you have resume.pdf in the public folder
                                        link.download =
                                            "Asim_Arabzai_Resume.pdf";
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="w-full bg-gray-800 hover:bg-gray-900 dark:bg-gray-200 dark:hover:bg-gray-100 text-white dark:text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                                >
                                    Download Resume
                                </button>
                            </div>
                        </div>
                    }
                />
            </section>

            {/* Code Block Demo Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <CodeBlockDemo />
            </section>

            {/* About Us Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <FeaturesSectionDemo />
            </section>

            {/* Projects Section */}
            <section id="projects">
                <Projects />
            </section>

            {/* Contact Section */}
            <section id="contact">
                <Contact />
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
