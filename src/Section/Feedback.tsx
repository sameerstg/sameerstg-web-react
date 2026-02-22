import React, { useState } from 'react';
import { createFeedback } from '../../methods/feedback';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare, Mail } from 'lucide-react';

export default function Feedback() {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createFeedback(email, feedback);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setEmail('');
                setFeedback('');
            }, 5000);
        } catch (error) {
            console.error('Error submitting feedback:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="feedback" className="flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="w-full max-w-2xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl tablet:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-tertiary bg-clip-text text-transparent">
                        Get in Touch
                    </h2>
                    <p className="text-tertiary text-lg tablet:text-xl max-w-lg mx-auto">
                        Have a question, an idea, or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="box bg-secondary/5 backdrop-blur-md rounded-3xl p-6 tablet:p-10 border border-primary/10 shadow-2xl"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-secondary ml-1">
                                        <Mail size={16} />
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-black/40 border-2 border-primary/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-secondary/50 transition-all placeholder:text-gray-600"
                                        placeholder="hello@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="feedback" className="flex items-center gap-2 text-sm font-semibold text-secondary ml-1">
                                        <MessageSquare size={16} />
                                        Message
                                    </label>
                                    <textarea
                                        id="feedback"
                                        rows={5}
                                        className="w-full bg-black/40 border-2 border-primary/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-secondary/50 transition-all placeholder:text-gray-600 resize-none"
                                        placeholder="Tell me what's on your mind..."
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group w-full bg-secondary hover:bg-white text-black font-bold py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="box bg-secondary/10 backdrop-blur-md rounded-3xl p-12 text-center border border-secondary/30 shadow-[0_0_50px_rgba(0,255,255,0.1)]"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-black animate-bounce">
                                    <CheckCircle2 size={40} />
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-secondary">Message Received!</h3>
                            <p className="text-tertiary text-lg mb-8">
                                Thanks for reaching out. I'll get back to you as soon as I can!
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="text-secondary hover:text-white underline underline-offset-4 transition-colors font-medium"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
