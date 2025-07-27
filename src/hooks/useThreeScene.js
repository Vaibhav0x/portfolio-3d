import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const useThreeScene = () => {
    const canvasRef = useRef();
    const sceneRef = useRef();
    const rendererRef = useRef();
    const meshRef = useRef();

    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Create geometry
        const geometry = new THREE.IcosahedronGeometry(1, 1);
        const material = new THREE.MeshPhongMaterial({
            color: 0x64ffda,
            wireframe: true,
            transparent: true,
            opacity: 0.6
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Add lights
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x64ffda, 1, 100);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        camera.position.z = 5;

        sceneRef.current = scene;
        rendererRef.current = renderer;
        meshRef.current = mesh;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            if (meshRef.current) {
                meshRef.current.rotation.x += 0.01;
                meshRef.current.rotation.y += 0.01;
            }

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return { canvasRef, meshRef };
};