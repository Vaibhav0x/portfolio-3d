import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const AboutSection = () => {
    return (
        <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8" id="about">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-cyan-400">
                            Software Engineer & Creative Developer
                        </h3>
                        <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                            I'm a Software Engineer & Creative Developer who loves pushing the boundaries of web technology.
                            With expertise in Python, Django, React, Three.js, and modern web frameworks, I create
                            immersive digital experiences that captivate users and drive results.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                            When I'm not coding, you'll find me exploring new technologies, contributing
                            to open-source projects, or experimenting with the latest in web animation
                            and 3D graphics.
                        </p>

                        {/* Mobile-friendly stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 sm:mt-8">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">20+</div>
                                <div className="text-sm sm:text-base text-gray-300">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-purple-400">1+</div>
                                <div className="text-sm sm:text-base text-gray-300">Years Exp</div>
                            </div>
                            <div className="text-center col-span-2 sm:col-span-1">
                                <div className="text-2xl sm:text-3xl font-bold text-pink-400">100%</div>
                                <div className="text-sm sm:text-base text-gray-300">Satisfaction</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-4 sm:space-y-6 order-1 lg:order-2"
                    >
                        {skills.map((skill, i) => (
                            <div key={skill.name} className="bg-gray-800/50 p-3 sm:p-4 rounded-lg backdrop-blur-sm">
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-sm sm:text-base">{skill.name}</span>
                                    <span className="text-cyan-400 text-sm sm:text-base">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <motion.div
                                        className="h-2 rounded-full"
                                        style={{ backgroundColor: skill.color }}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;