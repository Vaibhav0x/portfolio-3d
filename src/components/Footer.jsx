import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900/50 backdrop-blur-lg py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Vaibhav Raj
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Crafting digital experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Connect</h4>
                        <div className="flex space-x-4">
                            <motion.a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaGithub size={24} />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </motion.a>
                            <motion.a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaTwitter size={24} />
                            </motion.a>
                            <motion.a
                                href="https://instagram.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaInstagram size={24} />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Vaibhav Raj. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;