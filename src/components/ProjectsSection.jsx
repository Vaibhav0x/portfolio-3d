import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectsSection = () => {
    return (
        <section className="min-h-screen py-20 px-6" id="projects">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all cursor-pointer group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 10px 40px rgba(100, 255, 218, 0.1)"
                            }}
                        >
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                                {project.image}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-cyan-400 group-hover:text-purple-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.github && project.live && (
                                <div className="flex gap-4 mt-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-center transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        GitHub
                                    </motion.a>
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-center transition-colors text-black font-semibold"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Live Demo
                                    </motion.a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;