import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const HeroSection = () => {
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <motion.section
            className="min-h-screen h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
            style={{ opacity: heroOpacity }}
            id="home"
        >
            <div className="text-center z-10 max-w-6xl mx-auto">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                        Software
                    </span>
                    <motion.span
                        className="block mt-2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        Engineer
                    </motion.span>
                </motion.h1>
                <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Hi'm Vaibhav Raj, a Software Engineer.
                </motion.p>
                <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Crafting immersive digital experiences with cutting-edge technology
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <motion.a
                        className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all min-w-[200px]"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(100, 255, 218, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        className="w-full sm:w-auto border-2 border-cyan-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all min-w-[200px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                    >
                        Contact Me
                    </motion.a>
                </motion.div>
            </div>

            {/* Floating particles - Responsive */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>
        </motion.section>
    );
};

export default HeroSection;