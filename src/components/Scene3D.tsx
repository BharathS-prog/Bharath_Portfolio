import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  className?: string;
  size?: number;
}

export const Scene3D: React.FC<Scene3DProps> = ({ className, size = 320 }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group for mouse rotation
    const group = new THREE.Group();
    scene.add(group);

    // 1. Outer Icosahedron Wireframe (Futuristic AI neural grid)
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerMesh);

    // 2. Inner Glowing Core (Octahedron)
    const innerGeo = new THREE.OctahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6, // Violet
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // 3. Central Solid Core Node
    const coreGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // 4. Orbiting Floating Neural Nodes (Particles)
    const particleCount = 48;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 0.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    group.add(particleSystem);

    // Mouse Tracking for 3D Interaction
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center
      const dx = (e.clientX - centerX) / (window.innerWidth / 2);
      const dy = (e.clientY - centerY) / (window.innerHeight / 2);

      targetX = dy * 0.8;
      targetY = dx * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Ambient 3D rotation
      outerMesh.rotation.y = elapsed * 0.25;
      outerMesh.rotation.x = elapsed * 0.15;

      innerMesh.rotation.y = -elapsed * 0.4;
      innerMesh.rotation.z = elapsed * 0.2;

      coreMesh.scale.setScalar(0.95 + Math.sin(elapsed * 2.5) * 0.08);

      particleSystem.rotation.y = elapsed * 0.12;
      particleSystem.rotation.x = elapsed * 0.08;

      // Smooth mouse follow interpolation
      group.rotation.x += (targetX - group.rotation.x) * 0.05;
      group.rotation.y += (targetY - group.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [size]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        width: size,
        height: size,
        display: 'inline-block',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default Scene3D;
