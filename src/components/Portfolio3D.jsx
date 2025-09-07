import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import ThreeBackground from './ThreeBackground';
import ExperienceSection from './ExperienceSection';
// import Footer from './Footer';

const Portfolio3D = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    // Mouse tracking for interactive effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="bg-black text-white overflow-hidden">
            {/* 3D Background */}
            <ThreeBackground />

            {/* Animated Background Gradient */}
            <motion.div
                className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 -z-20"
                style={{ y: backgroundY }}
            />

            {/* Navigation */}
            <Navigation />

            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <AboutSection />

            {/* Experience Section */}
            <ExperienceSection />

            {/* Projects Section */}
            <ProjectsSection />

            {/* Freelance Projects Section */}
            {/* <FreelanceProject /> */}

            {/* <ReviewsSection /> */}
            {/* Contact Section */}
            <ContactSection />

            {/* <Footer /> */}
            {/* Interactive cursor effect */}
            <motion.div
                className="fixed w-6 h-6 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
                animate={{
                    x: mousePosition.x * 20,
                    y: mousePosition.y * 20,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28
                }}
            />
        </div>
    );
};

export default Portfolio3D;