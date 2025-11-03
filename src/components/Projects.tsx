import React from "react";

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
}

const projects: Project[] = [
    {
        title: "Mathrix AI Learning Platform",
        description:
            "An intelligent online learning platform that uses AI to personalize math education. Features adaptive learning paths, AI-powered problem generation, and real-time performance analytics to enhance student learning outcomes.",
        image: "/images/mathrix.png",
        technologies: [
            "Python",
            "TensorFlow",
            "React",
            "FastAPI",
            "PostgreSQL",
            "OpenAI GPT",
        ],
        link: "https://mathrix.co.uk/",
    },
    {
        title: "Cricket Player Performance Analysis",
        description:
            "A data-driven project that analyzes cricket player batting statistics using clustering techniques to uncover player segments. Generates visual insights with scatter plots and dendrograms, and exports cluster assignments for downstream analysis to assist team management and talent identification.",
        image: "/images/cricket-analysis.png",
        technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Seaborn",
            "Matplotlib",
            "SciPy",
        ],
        link: "https://github.com/asim-ibn-aziz/cricket-player-segmentation",
    },
    {
        title: "Chatbot with RAG",
        description:
            "An intelligent chatbot system that uses Retrieval-Augmented Generation (RAG) to provide accurate, context-aware responses. Integrates with knowledge bases for domain-specific conversations.",
        image: "/images/chatbot-rag.png",
        technologies: [
            "Python",
            "LangChain",
            "OpenAI",
            "Pinecone",
            "Streamlit",
            "FAISS",
        ],
        link: "https://github.com/asim-arabzai/chatbot-rag",
    },
    {
        title: "Powder Puff Pandas – Premium Facial Products Store",
        description:
            "A modern, responsive e-commerce platform for premium facial care products. Features include product management, real-time search and filtering, secure authentication, persistent shopping cart, and PayPal-powered checkout. Optimized for performance, mobile-first design, and seamless user experience.",
        image: "/images/powder-puff-pandas.png",
        technologies: [
            "Next.js 15",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Firebase",
            "Cloudinary",
            "PayPal",
        ],
        link: "https://github.com/asim-ibn-aziz/powder-puff-pandas",
    },
    {
        title: "Daily Dose – Production Management System",
        description:
            "A web-based dashboard and management platform for a juice brand, enabling branch managers and super admins to manage sales, inventory, and client data. Features include real-time stock tracking, sales analytics, client management, and role-based access for seamless business operations.",
        image: "/images/daily-dose.png",
        technologies: [
            "Laravel",
            "MySQL",
            "JavaScript",
            "Tailwind CSS",
            "React",
        ],
        link: "https://dailydooze.com/",
    },
    {
        title: "Heavy Machinery Parts – Shop Management System",
        description:
            "A web-based platform for managing the sales, inventory, and client orders of heavy machinery parts. Designed to streamline operations, track stock levels, manage client purchases, and generate analytics for better business decision-making.",
        image: "/images/heavy-machinery-parts.png",
        technologies: [
            "Laravel",
            "MySQL",
            "React",
            "Tailwind CSS",
            "JavaScript",
        ],
        link: "https://abubakarzazai.com/",
    },
    {
        title: "Daily Dose – Customer Care Chatbot",
        description:
            "An AI-powered chatbot designed to assist customers of the Daily Dose juice brand. Handles common queries, provides product recommendations, and streamlines customer support for faster, more efficient service.",
        image: "/images/daily-dose-chatbot.png",
        technologies: [
            "Python",
            "FastAPI",
            "React",
            "Hugging Face Transformers",
            "OpenAI GPT",
            "Firebase",
        ],
        link: "https://dailydooze.com/",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                        My Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Explore my latest work and innovative solutions that
                        solve real-world problems
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.link && project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-medium rounded-lg transition-colors duration-200"
                                >
                                    View Project
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
