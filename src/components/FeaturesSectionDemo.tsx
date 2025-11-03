import React from "react";
import { cn } from "../lib/utils";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled, IconWorld } from "@tabler/icons-react";
import createGlobe from "cobe";
import {
    IconBrandReact,
    IconBrandVue,
    IconBrandAngular,
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandJavascript,
    IconBrandTailwind,
    IconBrandBootstrap,
    IconBrandFlutter,
    IconBrandReactNative,
    IconBrandSwift,
    IconBrandKotlin,
    IconBrandNodejs,
    IconBrandLaravel,
    IconBrandDjango,
    IconBrandAws,
    IconBrandGoogle,
    IconBrandFirebase,
    IconBrandDocker,
    IconBrandGithub,
    IconDatabase,
    IconBrandMysql,
    IconBrandMongodb,
    IconBrandReddit,
    IconBrandFigma,
    IconBrandAdobe,
    IconBrandStripe,
    IconBrandPaypal,
    IconBrandVisa,
    IconBrandTrello,
    IconBrandSentry,
    IconBrandGoogleAnalytics,
    IconBrandMixpanel,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
    const features = [
        {
            title: "Experience & Achievements",
            description:
                "Completed certifications in Deep Learning Specialization (Andrew Ng) and Generative AI with Large Language Models. Participated in multiple Kaggle competitions and worked on open-source NLP projects.",
            skeleton: <SkeletonOne />,
            className:
                "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
        },
        {
            title: "Skills & Tech Stack",
            description:
                "I specialize in modern machine learning and AI technologies. My expertise spans across Python, deep learning frameworks, NLP tools, and MLOps platforms to deliver cutting-edge AI solutions.",
            skeleton: <SkeletonTwo />,
            className:
                "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
        },
        {
            title: "Driven by Innovation, Built on Trust",
            description:
                "I'm driven by innovation and built on trust. I'm committed to delivering high-quality AI solutions that solve real-world problems and create meaningful impact through ethical and explainable machine learning.",
            skeleton: <SkeletonThree />,
            className:
                "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
        },
        {
            title: "Global Collaboration & Remote Work",
            description:
                "I collaborate with clients and teams across the globe, breaking time zone barriers to deliver seamless AI solutions. Experienced in remote work environments and international project coordination.",
            skeleton: <SkeletonFour />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ];

    return (
        <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
            <div className="px-8">
                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-black dark:text-white">
                    About Asim's Portfolio
                </h4>

                <p className="text-sm lg:text-base  max-w-4xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300 leading-relaxed">
                    I’m a passionate Machine Learning Engineer and Web
                    Application Developer with a focus on Natural Language
                    Processing and Generative AI. I love transforming complex
                    ideas into scalable, real-world solutions from fine-tuning
                    Large Language Models (LLMs) and building intelligent
                    chatbots to deploying AI-powered web applications that make
                    an impact.
                </p>
            </div>

            <div className="relative ">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            className={feature.className}
                        >
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>
                                {feature.description}
                            </FeatureDescription>
                            <div className=" h-full w-full">
                                {feature.skeleton}
                            </div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p
            className={cn(
                "text-sm md:text-base  max-w-4xl text-left mx-auto",
                "text-neutral-500 text-center font-normal dark:text-neutral-300",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </p>
    );
};

export const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 px-2 gap-10 h-full">
            <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                        alt="Modern tech office with professional team"
                        width={800}
                        height={800}
                        className="h-full w-full aspect-square object-cover object-center rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl filter grayscale group-hover:grayscale-0"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};

export const SkeletonThree = () => {
    return (
        <div className="relative flex h-full group">
            <div className="w-full mx-auto bg-transparent dark:bg-transparent h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Team collaboration representing innovation and trust"
                        width={800}
                        height={800}
                        className="h-full w-full aspect-square object-cover object-center rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl -ml-8 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
            </div>
        </div>
    );
};

// Technology icons data
const technologies = {
    languages: [
        { name: "Python", icon: IconBrandNodejs },
        { name: "JavaScript", icon: IconBrandJavascript },
        { name: "TypeScript", icon: IconBrandJavascript },
        { name: "SQL", icon: IconDatabase },
    ],
    "backend development": [
        { name: "Node.js", icon: IconBrandNodejs },
        { name: "Express.js", icon: IconBrandNodejs },
        { name: "FastAPI", icon: IconBrandNodejs },
        { name: "Flask", icon: IconBrandNodejs },
    ],
    "frontend development": [
        { name: "React", icon: IconBrandReact },
        { name: "Next.js", icon: IconBrandReact },
        { name: "Tailwind CSS", icon: IconBrandTailwind },
        { name: "HTML", icon: IconBrandHtml5 },
        { name: "CSS", icon: IconBrandCss3 },
    ],
    "cloud & databases": [
        { name: "Firebase", icon: IconBrandFirebase },
        { name: "Firestore", icon: IconBrandFirebase },
        { name: "MySQL", icon: IconBrandMysql },
        { name: "MongoDB", icon: IconBrandMongodb },
        { name: "REST APIs", icon: IconBrandGoogle },
    ],
    "machine learning": [
        { name: "Scikit-learn", icon: IconBrandGoogle },
        { name: "XGBoost", icon: IconBrandGoogle },
        { name: "LightGBM", icon: IconBrandGoogle },
    ],
    "deep learning": [
        { name: "PyTorch", icon: IconBrandAws },
        { name: "TensorFlow", icon: IconBrandAws },
        { name: "Keras", icon: IconBrandAws },
    ],
    "nlp/generative ai": [
        { name: "Hugging Face", icon: IconBrandGithub },
        { name: "GPT Models", icon: IconBrandGoogle },
        { name: "LangChain", icon: IconBrandGithub },
        { name: "RAG", icon: IconBrandGoogle },
        { name: "OpenAI API", icon: IconBrandGoogle },
    ],
    deployment: [
        { name: "Docker", icon: IconBrandDocker },
        { name: "Streamlit", icon: IconBrandNodejs },
        { name: "Vercel", icon: IconBrandGoogle },
        { name: "Render", icon: IconBrandGoogle },
        { name: "FastAPI", icon: IconBrandNodejs },
    ],
    "mlops & experiment tracking": [
        { name: "MLflow", icon: IconBrandGithub },
        { name: "Weights & Biases", icon: IconBrandGoogle },
        { name: "Git", icon: IconBrandGithub },
        { name: "CI/CD", icon: IconBrandGithub },
    ],
    "data tools": [
        { name: "Pandas", icon: IconBrandGithub },
        { name: "NumPy", icon: IconBrandGithub },
        { name: "Matplotlib", icon: IconBrandGithub },
        { name: "Seaborn", icon: IconBrandGithub },
    ],
};

export const SkeletonTwo = () => {
    return (
        <div className="relative flex flex-col gap-6 h-full overflow-hidden p-4">
            {Object.entries(technologies).map(([category, techs]) => (
                <div key={category} className="space-y-3">
                    <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 capitalize">
                        {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                            <motion.div
                                key={tech.name}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                {tech.name}
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export const SkeletonFour = () => {
    return (
        <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
            <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
        </div>
    );
};

export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: 600,
                height: 600,
                maxWidth: "100%",
                aspectRatio: 1,
            }}
            className={className}
        />
    );
};
