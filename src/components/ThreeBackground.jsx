import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const canvasRef = useRef();
    const sceneRef = useRef();
    const rendererRef = useRef();
    const meshRef = useRef();
    const particlesRef = useRef();

    useEffect(() => {
        if (!canvasRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Main geometric shape
        const geometry = new THREE.IcosahedronGeometry(1, 1);
        const material = new THREE.MeshPhongMaterial({
            color: 0x64ffda,
            wireframe: true,
            transparent: true,
            opacity: 0.6
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Particle system
        const particleCount = 100;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 20;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            color: 0x64ffda,
            size: 0.02,
            transparent: true,
            opacity: 0.8
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x64ffda, 1, 100);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        const pointLight2 = new THREE.PointLight(0xc084fc, 0.8, 100);
        pointLight2.position.set(-10, -10, -10);
        scene.add(pointLight2);

        camera.position.z = 5;

        // Store references
        sceneRef.current = scene;
        rendererRef.current = renderer;
        meshRef.current = mesh;
        particlesRef.current = particles;

        // Animation loop
        let animationId;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const time = Date.now() * 0.001;

            if (meshRef.current) {
                meshRef.current.rotation.x = time * 0.3;
                meshRef.current.rotation.y = time * 0.2;
                meshRef.current.position.y = Math.sin(time) * 0.1;
            }

            if (particlesRef.current) {
                particlesRef.current.rotation.x = time * 0.1;
                particlesRef.current.rotation.y = time * 0.05;
            }

            // Update point lights
            pointLight.position.x = Math.sin(time * 0.5) * 10;
            pointLight.position.z = Math.cos(time * 0.5) * 10;

            pointLight2.position.x = Math.cos(time * 0.3) * -10;
            pointLight2.position.z = Math.sin(time * 0.3) * -10;

            renderer.render(scene, camera);
        };

        animate();

        // Mouse interaction
        const handleMouseMove = (event) => {
            if (meshRef.current) {
                const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

                meshRef.current.rotation.x += (mouseY * 0.1 - meshRef.current.rotation.x) * 0.05;
                meshRef.current.rotation.y += (mouseX * 0.1 - meshRef.current.rotation.y) * 0.05;
            }
        };

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);

            // Cleanup
            geometry.dispose();
            material.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
            style={{ background: 'transparent' }}
        />
    );
};

export default ThreeBackground;