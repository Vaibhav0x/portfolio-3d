import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord,FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiFiverr } from 'react-icons/si';

const ContactSection = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const [visits, setVisits] = useState(null);

    useEffect(() => {
        fetch('https://api.countapi.xyz/hit/vaibhav-raj-tech.vercel.app/visits')
            .then(res => res.json())
            .then(data => setVisits(data.value));
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your form submission logic here
        setLoading(true);
        setError(null);
        setSuccess(false);

        setSuccess(false);

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        const successSound = new Audio('/success.mp3');
        // Reset form

        // setFormData({ name: '', email: '', message: '' });
        try {
            await emailjs.sendForm(
                serviceID, // Replace with your Service ID
                templateID, // Replace with your Template ID
                form.current,
                publicKey // Replace with your Public Key
            );

            setSuccess(true);
            successSound.play(); // Play sound on success
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setError('Failed to send message. Please try again.');
            console.error('EmailJS Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8" id="contact">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Let's Create Something Amazing
                </motion.h2>

                <motion.p
                    className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto text-center leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Ready to bring your ideas to life? Let's collaborate and build something extraordinary together.
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400 text-sm sm:text-base"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400 text-sm sm:text-base"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="4"
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400 resize-none text-sm sm:text-base"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all"
                                whileHover={!loading ? {
                                    scale: 1.02,
                                    boxShadow: "0 0 30px rgba(100, 255, 218, 0.3)"
                                } : {}}
                                whileTap={!loading ? { scale: 0.98 } : {}}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </motion.button>
                            {success && (
                                <p className="text-green-400 text-sm mt-2">
                                    Message sent successfully! We'll get back to you soon.
                                </p>
                            )}

                            {error && (
                                <p className="text-red-400 text-sm mt-2">
                                    {error}
                                </p>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6 sm:space-y-8 order-1 lg:order-2"
                    >
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-cyan-400">Get In Touch</h3>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                I'm always open to discussing new opportunities, creative projects,
                                or just having a chat about technology and innovation.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-cyan-400 text-lg sm:text-xl">📧</span>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="font-semibold text-sm sm:text-base">Email</p>
                                    <p className="text-gray-300 text-sm sm:text-base break-all">rajjvaibhavv121@gmail.com</p>
                                </div>
                            </div>

                            {/* <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-purple-400 text-lg sm:text-xl">📱</span>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="font-semibold text-sm sm:text-base">Phone</p>
                                    <p className="text-gray-300 text-sm sm:text-base">+914546766879</p>
                                </div>
                            </div> */}

                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-pink-400 text-lg sm:text-xl">📍</span>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="font-semibold text-sm sm:text-base">Location</p>
                                    <p className="text-gray-300 text-sm sm:text-base">Delhi, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-4 sm:pt-6">
                            <h4 className="text-lg font-semibold mb-3 sm:mb-4">Connect With Me</h4>
                            <div className="flex gap-3 sm:gap-4">
                                <motion.a
                                    href="mailto:rajjvaibhavv121@gmail.com"
                                    target="_blank"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-red-400 rounded-lg flex items-center justify-center transition-colors group"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <MdEmail className="text-lg sm:text-xl group-hover:text-black" />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/vaibhav-raj-0x/"
                                    target="_blank"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaLinkedin className="text-lg sm:text-xl group-hover:text-black" />
                                </motion.a>
                                <motion.a
                                    href="https://x.com/vaiibhvv"
                                    target="_blank"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-sky-400 rounded-lg flex items-center justify-center transition-colors group"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaTwitter className="text-lg sm:text-xl group-hover:text-black" />
                                </motion.a>
                                <motion.a
                                    href="https://www.instagram.com/vbhav_404?igsh=MXI5N2NnOXlxeG13aQ=="
                                    target="_blank"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors group"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaInstagram className="text-lg sm:text-xl group-hover:text-black" />
                                </motion.a>
                                <motion.a
                                    href="https://www.fiverr.com/users/vaibhavraj01x/"
                                    target="_blank"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors group"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <SiFiverr className="text-lg sm:text-xl group-hover:text-black" />
                                </motion.a>
                                <motion.a
                                    href="https://discord.com/users/669880381649977354"
                                    target="_blank"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-indigo-500 rounded-lg flex items-center justify-center transition-colors group"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaDiscord className="text-lg sm:text-xl group-hover:text-black" />
                                </motion.a>
                                <motion.a
                                    href="https://github.com/Vaibhav0x"
                                    target="_blank"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors group"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaGithub className="text-lg sm:text-xl group-hover:text-white" />
                                </motion.a>
                            </div>
                            {/* Visitor Counter */}
                            <div className="pt-4 text-gray-400 text-sm text-center">
                                {visits !== null ? `👀 ${visits} visitors so far` : 'Loading visitors...'}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
