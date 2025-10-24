import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message:
                        "Thank you for your message! We will get back to you soon.",
                });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                const errorData = await response.json();
                setSubmitStatus({
                    type: "error",
                    message:
                        errorData.message ||
                        "Failed to send message. Please try again.",
                });
            }
        } catch (err) {
            setSubmitStatus({
                type: "error",
                message: "Network error. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Have a question or want to work together? Let's talk!
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {submitStatus.type && (
                            <div
                                className={`rounded-lg p-4 ${
                                    submitStatus.type === "success"
                                        ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                                        : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                                }`}
                            >
                                <p
                                    className={`text-sm ${
                                        submitStatus.type === "success"
                                            ? "text-green-600 dark:text-green-400"
                                            : "text-red-600 dark:text-red-400"
                                    }`}
                                >
                                    {submitStatus.message}
                                </p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-neutral-900 text-black dark:text-white"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-neutral-900 text-black dark:text-white"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-neutral-900 text-black dark:text-white"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-neutral-900 text-black dark:text-white resize-none"
                                placeholder="Your message here..."
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="flex items-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white dark:border-black mr-2"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
