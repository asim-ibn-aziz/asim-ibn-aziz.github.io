import React from "react";
import {
    IconBrandInstagram,
    IconBrandFacebook,
    IconBrandLinkedin,
    IconBrandGithub,
} from "@tabler/icons-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-950 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-4">
                            <span className="ml-2 text-xl font-bold">
                                Asim's Portfolio
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4 max-w-md">
                            Your AI & Web Solutions Partner <br /> Turning AI
                            innovation into practical, full-stack applications
                            that solve problems and create meaningful impact.
                        </p>
                        <p className="text-sm text-gray-500">
                            © {currentYear} Asim's Portfolio. All rights
                            reserved.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#home"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-2 text-gray-400">
                            <p>Get in touch with me</p>
                            <p>asimibnaziz@gmail.com</p>
                            <div className="flex space-x-4 mt-3">
                                <a
                                    href="https://www.instagram.com/kamawal_asim?igsh=MThxbzJ5bXcyNnE5MQ%3D%3D&utm_source=qr"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Instagram"
                                >
                                    <IconBrandInstagram size={24} />
                                </a>
                                <a
                                    href="https://www.facebook.com/share/1JH7oL3Egb/?mibextid=wwXIfr"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Facebook"
                                >
                                    <IconBrandFacebook size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/asim-ibnaziz-6962ba387/"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <IconBrandLinkedin size={24} />
                                </a>
                                <a
                                    href="https://github.com/asim-ibn-aziz"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="GitHub"
                                >
                                    <IconBrandGithub size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
