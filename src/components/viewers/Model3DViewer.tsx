import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Maximize2, Sparkles, RefreshCw } from 'lucide-react';

interface Model3DViewerProps {
  artifactId: string;
  artifactTitle: string;
  imageSrc: string;
  hotspots?: Array<{ id: string; title: string; detail: string; x: number; y: number }>;
  onSelectHotspot?: (hotspot: any) => void;
}

export const Model3DViewer: React.FC<Model3DViewerProps> = ({
  artifactId,
  artifactTitle,
  imageSrc,
  hotspots = [],
  onSelectHotspot,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<any | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x07080d);

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4.0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    currentMount.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.2);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.7);
    fillLight.position.set(-4, -1, -2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xc5a059, 2.8, 12);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // Museum Pedestal
    const pedestalGeo = new THREE.CylinderGeometry(1.3, 1.45, 0.2, 40);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x121420,
      roughness: 0.7,
      metalness: 0.3,
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -1.45;
    pedestal.receiveShadow = true;
    scene.add(pedestal);

    // Artifact Group
    const artifactGroup = new THREE.Group();
    scene.add(artifactGroup);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageSrc);
    texture.colorSpace = THREE.SRGBColorSpace;

    // Material parameters
    let meshMaterial: THREE.MeshStandardMaterial;
    if (artifactId === 'dancing-girl' || artifactId === 'nataraja') {
      meshMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.6,
        roughness: 0.4,
        bumpMap: texture,
        bumpScale: 0.03,
      });
    } else {
      meshMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.1,
        roughness: 0.65,
        bumpMap: texture,
        bumpScale: 0.04,
      });
    }

    // Geometry tailored to artifact type
    let sculptureMesh: THREE.Mesh;
    if (artifactId === 'nataraja') {
      const geo = new THREE.CylinderGeometry(1.05, 1.05, 2.2, 36, 16, true);
      sculptureMesh = new THREE.Mesh(geo, meshMaterial);
      sculptureMesh.position.y = -0.3;
    } else if (artifactId === 'lion-capital') {
      const geo = new THREE.CylinderGeometry(0.85, 0.95, 2.3, 32, 16);
      sculptureMesh = new THREE.Mesh(geo, meshMaterial);
      sculptureMesh.position.y = -0.3;
    } else if (artifactId === 'standing-buddha') {
      const geo = new THREE.CapsuleGeometry(0.68, 1.45, 16, 32);
      sculptureMesh = new THREE.Mesh(geo, meshMaterial);
      sculptureMesh.position.y = -0.3;
    } else {
      const geo = new THREE.CylinderGeometry(0.6, 0.7, 2.1, 32, 16);
      sculptureMesh = new THREE.Mesh(geo, meshMaterial);
      sculptureMesh.position.y = -0.3;
    }

    sculptureMesh.castShadow = true;
    artifactGroup.add(sculptureMesh);

    // Smooth Orbit Drag Interactions
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      artifactGroup.rotation.y += deltaX * 0.007;
      artifactGroup.rotation.x = Math.max(-0.35, Math.min(0.35, artifactGroup.rotation.x + deltaY * 0.004));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => { isDragging = false; };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(2.6, Math.min(5.8, camera.position.z + e.deltaY * 0.003));
    };

    currentMount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    currentMount.addEventListener('wheel', onWheel, { passive: false });

    // Touch Support
    let touchStart = { x: 0, y: 0 };
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - touchStart.x;
      artifactGroup.rotation.y += deltaX * 0.009;
      touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => { isDragging = false; };

    currentMount.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    // Render Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (autoRotate && !isDragging) {
        artifactGroup.rotation.y += 0.004;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      if (currentMount) {
        currentMount.removeEventListener('mousedown', onMouseDown);
        currentMount.removeEventListener('touchstart', onTouchStart);
        currentMount.removeEventListener('wheel', onWheel);
        if (renderer.domElement.parentNode === currentMount) {
          currentMount.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
    };
  }, [artifactId, imageSrc, autoRotate]);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden bg-[#07080d] border border-amber-500/20 shadow-2xl">
      {/* 3D WebGL Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive 3D Replica</span>
        </span>
      </div>

      {/* Floating Control Toolbar */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 backdrop-blur-md border transition-all cursor-pointer ${
            autoRotate
              ? 'bg-amber-500/20 text-amber-300 border-amber-400/60 shadow-md'
              : 'bg-slate-900/80 text-slate-400 border-slate-700 hover:text-white'
          }`}
          title="Toggle 360° Auto Rotation"
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
          <span>{autoRotate ? 'Rotate' : 'Paused'}</span>
        </button>
      </div>

      {/* Hotspots Quick Pill Strip */}
      {hotspots.length > 0 && (
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div className="bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-2xl border border-slate-800 shadow-xl flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              Key Features:
            </span>
            <div className="flex flex-wrap gap-1.5 justify-end">
              {hotspots.slice(0, 4).map((hs) => (
                <button
                  key={hs.id}
                  onClick={() => {
                    setActiveHotspot(hs);
                    if (onSelectHotspot) onSelectHotspot(hs);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    activeHotspot?.id === hs.id
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                  }`}
                >
                  {hs.title.split('(')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Active Hotspot Tooltip */}
      {activeHotspot && (
        <div className="absolute top-16 left-4 max-w-xs z-30 bg-slate-900/95 border border-amber-400/50 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase">{activeHotspot.title}</span>
            <button
              onClick={() => setActiveHotspot(null)}
              className="text-slate-400 hover:text-white text-xs p-1"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed font-sans">
            {activeHotspot.detail}
          </p>
        </div>
      )}
    </div>
  );
};

export default Model3DViewer;
