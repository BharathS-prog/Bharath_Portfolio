import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const FuturisticBackground3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera Setup with Cosmic AI Atmosphere
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070f, 0.011);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 46;
    camera.position.y = 6;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Dynamic Canvas Particle Glow Texture
    const makeGlowTexture = (innerColor: string, outerColor: string) => {
      const c = document.createElement('canvas');
      c.width = 32;
      c.height = 32;
      const ctx = c.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.35, innerColor);
        grad.addColorStop(0.75, outerColor);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(c);
    };

    const cyanGlowTex = makeGlowTexture('rgba(34, 211, 238, 0.9)', 'rgba(6, 182, 212, 0.25)');
    const violetGlowTex = makeGlowTexture('rgba(168, 85, 247, 0.9)', 'rgba(139, 92, 246, 0.25)');

    // -------------------------------------------------------------
    // 2. SUPERINTELLIGENCE CORE (Hyper-dimensional Cognitive Nexus)
    // -------------------------------------------------------------
    const superAiGroup = new THREE.Group();
    scene.add(superAiGroup);
    superAiGroup.position.set(0, 2, -10);

    // Singularity Outer Geodesic Lattice
    const coreGeo = new THREE.IcosahedronGeometry(12, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    superAiGroup.add(coreMesh);

    // Inner Cognitive Nucleus
    const innerNucleusGeo = new THREE.IcosahedronGeometry(7, 1);
    const innerNucleusMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const innerNucleusMesh = new THREE.Mesh(innerNucleusGeo, innerNucleusMat);
    superAiGroup.add(innerNucleusMesh);

    // Hyper-Torus Concentric Quantum Rings (Superintelligence Orbital Accelerators)
    const torusRing1Geo = new THREE.TorusGeometry(17, 0.06, 16, 100);
    const torusRing1Mat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const torusRing1 = new THREE.Mesh(torusRing1Geo, torusRing1Mat);
    torusRing1.rotation.x = Math.PI / 3;
    superAiGroup.add(torusRing1);

    const torusRing2Geo = new THREE.TorusGeometry(20, 0.05, 16, 100);
    const torusRing2Mat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });
    const torusRing2 = new THREE.Mesh(torusRing2Geo, torusRing2Mat);
    torusRing2.rotation.y = Math.PI / 4;
    torusRing2.rotation.z = Math.PI / 6;
    superAiGroup.add(torusRing2);

    // -------------------------------------------------------------
    // 3. SYNAPTIC NEURAL CLOUD & DYNAMIC AXON CONDUITS
    // -------------------------------------------------------------
    const nodeCount = 150;
    const maxConnectionDistance = 16;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeVelocities: { x: number; y: number; z: number }[] = [];
    const nodeColors = new Float32Array(nodeCount * 3);

    const c1 = new THREE.Color(0x22d3ee); // Cyan
    const c2 = new THREE.Color(0xa855f7); // Violet
    const c3 = new THREE.Color(0x38bdf8); // Sky blue
    const c4 = new THREE.Color(0x34d399); // Emerald spark

    for (let i = 0; i < nodeCount; i++) {
      nodePositions[i * 3] = (Math.random() - 0.5) * 115;
      nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 70 + 4;
      nodePositions[i * 3 + 2] = (Math.random() - 0.5) * 75;

      nodeVelocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.04,
      });

      const colorPick = i % 4 === 0 ? c1 : i % 4 === 1 ? c2 : i % 4 === 2 ? c3 : c4;
      nodeColors[i * 3] = colorPick.r;
      nodeColors[i * 3 + 1] = colorPick.g;
      nodeColors[i * 3 + 2] = colorPick.b;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeometry.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      size: 1.45,
      vertexColors: true,
      map: cyanGlowTex,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // Dynamic Neural Axon Connections
    const maxLines = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
    );
    lineGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // -------------------------------------------------------------
    // 4. SYNAPTIC THOUGHT PULSES (Signals flowing between AI neurons)
    // -------------------------------------------------------------
    const pulseCount = 35;
    const pulsePositions = new Float32Array(pulseCount * 3);
    const pulseData: { from: number; to: number; progress: number; speed: number }[] = [];

    for (let p = 0; p < pulseCount; p++) {
      const from = Math.floor(Math.random() * nodeCount);
      let to = Math.floor(Math.random() * nodeCount);
      if (to === from) to = (from + 1) % nodeCount;

      pulseData.push({
        from,
        to,
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.016,
      });

      pulsePositions[p * 3] = nodePositions[from * 3];
      pulsePositions[p * 3 + 1] = nodePositions[from * 3 + 1];
      pulsePositions[p * 3 + 2] = nodePositions[from * 3 + 2];
    }

    const pulseGeometry = new THREE.BufferGeometry();
    pulseGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(pulsePositions, 3).setUsage(THREE.DynamicDrawUsage)
    );

    const pulseMaterial = new THREE.PointsMaterial({
      size: 2.4,
      color: 0x67e8f9,
      map: cyanGlowTex,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pulseMesh = new THREE.Points(pulseGeometry, pulseMaterial);
    scene.add(pulseMesh);

    // -------------------------------------------------------------
    // 5. QUANTUM DATA STREAM (Undulating Harmonic Wave Grid)
    // -------------------------------------------------------------
    const gridCols = 46;
    const gridRows = 46;
    const gridCount = gridCols * gridRows;
    const wavePositions = new Float32Array(gridCount * 3);
    const waveColors = new Float32Array(gridCount * 3);

    const stepX = 2.6;
    const stepZ = 2.6;
    const offsetX = (gridCols * stepX) / 2;
    const offsetZ = (gridRows * stepZ) / 2;

    for (let r = 0; r < gridRows; r++) {
      for (let c = 0; c < gridCols; c++) {
        const idx = r * gridCols + c;
        wavePositions[idx * 3] = c * stepX - offsetX;
        wavePositions[idx * 3 + 1] = -21;
        wavePositions[idx * 3 + 2] = r * stepZ - offsetZ - 6;

        const factor = (c + r) / (gridCols + gridRows);
        const col = factor < 0.4 ? c1 : factor < 0.75 ? c2 : c3;
        waveColors[idx * 3] = col.r;
        waveColors[idx * 3 + 1] = col.g;
        waveColors[idx * 3 + 2] = col.b;
      }
    }

    const waveGeometry = new THREE.BufferGeometry();
    waveGeometry.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
    waveGeometry.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    const waveMaterial = new THREE.PointsMaterial({
      size: 0.95,
      vertexColors: true,
      map: violetGlowTex,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const waveMesh = new THREE.Points(waveGeometry, waveMaterial);
    scene.add(waveMesh);

    // -------------------------------------------------------------
    // 6. AMBIENT QUANTUM SPARKS (Cosmic AI Mind Aura)
    // -------------------------------------------------------------
    const sparkCount = 200;
    const sparkPositions = new Float32Array(sparkCount * 3);
    for (let s = 0; s < sparkCount; s++) {
      sparkPositions[s * 3] = (Math.random() - 0.5) * 160;
      sparkPositions[s * 3 + 1] = (Math.random() - 0.5) * 100;
      sparkPositions[s * 3 + 2] = (Math.random() - 0.5) * 120;
    }

    const sparkGeo = new THREE.BufferGeometry();
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    const sparkMat = new THREE.PointsMaterial({
      size: 0.65,
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sparks = new THREE.Points(sparkGeo, sparkMat);
    scene.add(sparks);

    // -------------------------------------------------------------
    // 7. INTERACTION & RESPONSIVENESS HANDLERS
    // -------------------------------------------------------------
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // -------------------------------------------------------------
    // 8. HIGH-PERFORMANCE RENDER LOOP
    // -------------------------------------------------------------
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (document.hidden) return;

      const time = clock.getElapsedTime();

      // Camera parallax with smooth easing
      targetX = mouseX * 6;
      targetY = mouseY * 3;
      camera.position.x += (targetX - camera.position.x) * 0.03;
      camera.position.y += (targetY + 6 - Math.min(scrollY * 0.005, 12) - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      // Superintelligence Core Rotation
      superAiGroup.rotation.y = time * 0.12;
      superAiGroup.rotation.x = Math.sin(time * 0.08) * 0.15;
      torusRing1.rotation.z = time * 0.22;
      torusRing2.rotation.x = -time * 0.18;
      innerNucleusMesh.rotation.y = -time * 0.25;

      if (!prefersReducedMotion) {
        // A. Drifting Neural Nodes
        const posAttr = nodeGeometry.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        for (let i = 0; i < nodeCount; i++) {
          posArray[i * 3] += nodeVelocities[i].x;
          posArray[i * 3 + 1] += nodeVelocities[i].y;
          posArray[i * 3 + 2] += nodeVelocities[i].z;

          if (Math.abs(posArray[i * 3]) > 58) nodeVelocities[i].x *= -1;
          if (Math.abs(posArray[i * 3 + 1] - 4) > 34) nodeVelocities[i].y *= -1;
          if (Math.abs(posArray[i * 3 + 2]) > 38) nodeVelocities[i].z *= -1;
        }
        posAttr.needsUpdate = true;

        // B. Dynamic Neural Axon Connections
        let lineIdx = 0;
        const linePosArray = lineGeometry.attributes.position.array as Float32Array;
        const lineColArray = lineGeometry.attributes.color.array as Float32Array;

        for (let i = 0; i < nodeCount; i++) {
          const x1 = posArray[i * 3];
          const y1 = posArray[i * 3 + 1];
          const z1 = posArray[i * 3 + 2];

          for (let j = i + 1; j < nodeCount; j++) {
            const dx = x1 - posArray[j * 3];
            const dy = y1 - posArray[j * 3 + 1];
            const dz = z1 - posArray[j * 3 + 2];
            const distSq = dx * dx + dy * dy + dz * dz;

            if (distSq < maxConnectionDistance * maxConnectionDistance) {
              const alpha = 1 - Math.sqrt(distSq) / maxConnectionDistance;

              linePosArray[lineIdx * 6] = x1;
              linePosArray[lineIdx * 6 + 1] = y1;
              linePosArray[lineIdx * 6 + 2] = z1;
              linePosArray[lineIdx * 6 + 3] = posArray[j * 3];
              linePosArray[lineIdx * 6 + 4] = posArray[j * 3 + 1];
              linePosArray[lineIdx * 6 + 5] = posArray[j * 3 + 2];

              // Pulsing Superintelligence synaptic line
              const pulseIntensity = 0.5 + 0.5 * Math.sin(time * 2.5 + distSq * 0.05);
              lineColArray[lineIdx * 6] = 0.12 * alpha * pulseIntensity;
              lineColArray[lineIdx * 6 + 1] = 0.85 * alpha * pulseIntensity;
              lineColArray[lineIdx * 6 + 2] = 0.98 * alpha * pulseIntensity;
              lineColArray[lineIdx * 6 + 3] = 0.65 * alpha * pulseIntensity;
              lineColArray[lineIdx * 6 + 4] = 0.32 * alpha * pulseIntensity;
              lineColArray[lineIdx * 6 + 5] = 0.98 * alpha * pulseIntensity;

              lineIdx++;
            }
          }
        }

        lineGeometry.setDrawRange(0, lineIdx * 2);
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;

        // C. Synaptic Thought Packets (Travel along axons)
        const pulsePosAttr = pulseGeometry.attributes.position as THREE.BufferAttribute;
        const pulsePosArray = pulsePosAttr.array as Float32Array;

        for (let p = 0; p < pulseCount; p++) {
          const item = pulseData[p];
          item.progress += item.speed;

          if (item.progress >= 1) {
            item.progress = 0;
            item.from = Math.floor(Math.random() * nodeCount);
            item.to = Math.floor(Math.random() * nodeCount);
            if (item.to === item.from) item.to = (item.from + 1) % nodeCount;
          }

          const fx = posArray[item.from * 3];
          const fy = posArray[item.from * 3 + 1];
          const fz = posArray[item.from * 3 + 2];

          const tx = posArray[item.to * 3];
          const ty = posArray[item.to * 3 + 1];
          const tz = posArray[item.to * 3 + 2];

          pulsePosArray[p * 3] = fx + (tx - fx) * item.progress;
          pulsePosArray[p * 3 + 1] = fy + (ty - fy) * item.progress;
          pulsePosArray[p * 3 + 2] = fz + (tz - fz) * item.progress;
        }
        pulsePosAttr.needsUpdate = true;

        // D. Quantum Undulating Terrain Waves
        const wavePosAttr = waveGeometry.attributes.position as THREE.BufferAttribute;
        const wavePosArray = wavePosAttr.array as Float32Array;

        for (let r = 0; r < gridRows; r++) {
          for (let c = 0; c < gridCols; c++) {
            const idx = r * gridCols + c;
            const x = wavePosArray[idx * 3];
            const z = wavePosArray[idx * 3 + 2];
            wavePosArray[idx * 3 + 1] =
              -21 +
              Math.sin(x * 0.12 + time * 1.3) * 2.4 +
              Math.cos(z * 0.12 + time * 0.95) * 2.2 +
              Math.sin((x + z) * 0.08 + time * 0.7) * 1.5;
          }
        }
        wavePosAttr.needsUpdate = true;

        // E. Ambient Quantum Sparks Slow Drift
        sparks.rotation.y = time * 0.015;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      cyanGlowTex.dispose();
      violetGlowTex.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerNucleusGeo.dispose();
      innerNucleusMat.dispose();
      torusRing1Geo.dispose();
      torusRing1Mat.dispose();
      torusRing2Geo.dispose();
      torusRing2Mat.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      pulseGeometry.dispose();
      pulseMaterial.dispose();
      waveGeometry.dispose();
      waveMaterial.dispose();
      sparkGeo.dispose();
      sparkMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="futuristic-3d-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    />
  );
};

export default FuturisticBackground3D;
