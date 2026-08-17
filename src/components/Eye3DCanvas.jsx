import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { anatomicalStructures } from '../data/medicalAtlasData';

export default function Eye3DCanvas({ activeStructureId, onSelectStructure, viewMode, activeLayerFilter }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef({
    isDragging: false,
    previousMousePosition: { x: 0, y: 0 },
    rotation: { x: 0.15, y: -0.92 },
    targetRotation: { x: 0.15, y: -0.92 },
    zoom: 6.0,
    targetZoom: 6.0
  });
  const pinsGroupRef = useRef(null);
  const eyeModelGroupRef = useRef(null);
  const requestRef = useRef(null);
  const [hoveredPin, setHoveredPin] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera Setup
    const width = container.clientWidth;
    const height = container.clientHeight || 580;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, controlsRef.current.zoom);
    cameraRef.current = camera;

    // 3. High-Quality WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Clinical Studio Multi-Point Lighting (Key, Fill, Rim, Subsurface)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaf0, 3.0);
    keyLight.position.set(8, 10, 9);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x93c5fd, 2.0);
    fillLight.position.set(-8, -6, -7);
    scene.add(fillLight);

    const rimGoldLight = new THREE.PointLight(0xf59e0b, 3.6, 30);
    rimGoldLight.position.set(0, 8, -6);
    scene.add(rimGoldLight);

    const fundusInteriorLight = new THREE.PointLight(0xf97316, 2.5, 7);
    fundusInteriorLight.position.set(0, 0, 0);
    scene.add(fundusInteriorLight);

    // 5. Eye Model Group & Pins Group
    const eyeGroup = new THREE.Group();
    eyeModelGroupRef.current = eyeGroup;
    scene.add(eyeGroup);

    const pinsGroup = new THREE.Group();
    pinsGroupRef.current = pinsGroup;
    eyeGroup.add(pinsGroup);

    // Build Photorealistic Anatomical 3D Model
    buildPhotorealisticEyeAnatomy(eyeGroup, viewMode, activeLayerFilter);
    build3DPins(pinsGroup, anatomicalStructures, activeStructureId, activeLayerFilter);

    // 6. Interaction Controls (Mouse / Touch Orbit)
    let isMouseDown = false;
    let prevX = 0;
    let prevY = 0;

    const onMouseDown = (e) => {
      if (e.button !== 0 && e.button !== 2) return;
      isMouseDown = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onMouseMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Raycasting for 3D pins
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);
      if (pinsGroupRef.current) {
        const pinMeshes = pinsGroupRef.current.children.map(g => g.children[0]).filter(Boolean);
        const intersects = raycaster.intersectObjects(pinMeshes);
        if (intersects.length > 0) {
          const hitPin = intersects[0].object.userData.structureId;
          setHoveredPin(hitPin);
          renderer.domElement.style.cursor = 'pointer';
        } else {
          setHoveredPin(null);
          renderer.domElement.style.cursor = isMouseDown ? 'grabbing' : 'grab';
        }
      }

      if (!isMouseDown) return;
      const deltaX = e.clientX - prevX;
      const deltaY = e.clientY - prevY;

      controlsRef.current.targetRotation.y += deltaX * 0.008;
      controlsRef.current.targetRotation.x += deltaY * 0.008;
      controlsRef.current.targetRotation.x = Math.max(-Math.PI / 2.1, Math.min(Math.PI / 2.1, controlsRef.current.targetRotation.x));

      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onMouseUp = () => {
      isMouseDown = false;
      renderer.domElement.style.cursor = 'grab';
    };

    const onClick = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);
      if (pinsGroupRef.current) {
        const pinMeshes = pinsGroupRef.current.children.map(g => g.children[0]).filter(Boolean);
        const intersects = raycaster.intersectObjects(pinMeshes);
        if (intersects.length > 0) {
          const structureId = intersects[0].object.userData.structureId;
          if (structureId && onSelectStructure) {
            onSelectStructure(structureId);
          }
        }
      }
    };

    const onWheel = (e) => {
      e.preventDefault();
      controlsRef.current.targetZoom += e.deltaY * 0.005;
      controlsRef.current.targetZoom = Math.max(3.5, Math.min(10.0, controlsRef.current.targetZoom));
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('click', onClick);
    dom.addEventListener('wheel', onWheel, { passive: false });

    // Touch events for mobile/tablets
    let touchDist = 0;
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isMouseDown = true;
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        touchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length === 1 && isMouseDown) {
        const deltaX = e.touches[0].clientX - prevX;
        const deltaY = e.touches[0].clientY - prevY;
        controlsRef.current.targetRotation.y += deltaX * 0.008;
        controlsRef.current.targetRotation.x += deltaY * 0.008;
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        const newDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const diff = (touchDist - newDist) * 0.01;
        controlsRef.current.targetZoom = Math.max(3.5, Math.min(10.0, controlsRef.current.targetZoom + diff));
        touchDist = newDist;
      }
    };

    const onTouchEnd = () => {
      isMouseDown = false;
    };

    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    dom.addEventListener('touchmove', onTouchMove, { passive: true });
    dom.addEventListener('touchend', onTouchEnd, { passive: true });

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height || 580;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // 7. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for orbit controls
      controlsRef.current.rotation.x += (controlsRef.current.targetRotation.x - controlsRef.current.rotation.x) * 0.1;
      controlsRef.current.rotation.y += (controlsRef.current.targetRotation.y - controlsRef.current.rotation.y) * 0.1;
      controlsRef.current.zoom += (controlsRef.current.targetZoom - controlsRef.current.zoom) * 0.1;

      eyeGroup.rotation.x = controlsRef.current.rotation.x;
      eyeGroup.rotation.y = controlsRef.current.rotation.y;
      camera.position.z = controlsRef.current.zoom;

      // Animate pulsing 3D beacon pins
      if (pinsGroupRef.current) {
        pinsGroupRef.current.children.forEach((pinGroup) => {
          const outerRing = pinGroup.children[1];
          if (outerRing) {
            const scale = 1.0 + 0.3 * Math.sin(elapsedTime * 4.2 + pinGroup.position.x);
            outerRing.scale.set(scale, scale, scale);
          }
        });
      }

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('click', onClick);
      dom.removeEventListener('wheel', onWheel);
      dom.removeEventListener('touchstart', onTouchStart);
      dom.removeEventListener('touchmove', onTouchMove);
      dom.removeEventListener('touchend', onTouchEnd);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, [viewMode, activeLayerFilter]);

  // Re-build pins when activeStructureId changes
  useEffect(() => {
    if (pinsGroupRef.current) {
      build3DPins(pinsGroupRef.current, anatomicalStructures, activeStructureId, activeLayerFilter);
    }
  }, [activeStructureId, activeLayerFilter]);

  // Camera focus animation
  useEffect(() => {
    if (!activeStructureId) return;
    const structure = anatomicalStructures.find(s => s.id === activeStructureId);
    if (structure && structure.pinPosition) {
      const [px, py, pz] = structure.pinPosition;
      const targetY = -Math.atan2(px, pz);
      const targetX = Math.atan2(py, Math.sqrt(px * px + pz * pz));
      controlsRef.current.targetRotation.y = targetY;
      controlsRef.current.targetRotation.x = targetX * 0.72;
      controlsRef.current.targetZoom = 5.2;
    }
  }, [activeStructureId]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '580px' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '580px', borderRadius: '12px', overflow: 'hidden' }} />
      
      {/* 3D Viewport Controls HUD */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
        display: 'flex',
        gap: '0.6rem',
        background: 'rgba(10, 10, 12, 0.85)',
        backdropFilter: 'blur(12px)',
        padding: '0.45rem 0.9rem',
        borderRadius: '8px',
        border: '1px solid var(--border-glass)',
        fontSize: '0.82rem',
        color: 'var(--text-secondary)'
      }}>
        <span>🖱️ 360° Rotate</span>
        <span>•</span>
        <span>🔍 Scroll to Zoom</span>
        <span>•</span>
        <span>🎯 Click 3D Pins</span>
      </div>

      {/* Hovered Pin Tooltip */}
      {hoveredPin && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          background: 'rgba(20, 21, 26, 0.95)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--accent-gold)',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          color: '#fff',
          fontSize: '0.9rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
          pointerEvents: 'none',
          zIndex: 30
        }}>
          <strong style={{ color: 'var(--accent-gold)' }}>
            {anatomicalStructures.find(s => s.id === hoveredPin)?.name}
          </strong>
          <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            {anatomicalStructures.find(s => s.id === hoveredPin)?.latin}
          </span>
        </div>
      )}

      {/* Camera Reset */}
      <button
        onClick={() => {
          controlsRef.current.targetRotation = { x: 0.15, y: -0.92 };
          controlsRef.current.targetZoom = 6.0;
        }}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(20, 21, 26, 0.85)',
          border: '1px solid var(--border-glass)',
          color: 'var(--text-primary)',
          padding: '0.45rem 0.9rem',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '0.82rem',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s',
          zIndex: 30
        }}
        title="Reset 3D Camera View"
      >
        ↺ Reset 3D View
      </button>
    </div>
  );
}

// -------------------------------------------------------------
// High-Realism Medical Procedural Textures (Neil Modi / Ophthalmic Reference)
// -------------------------------------------------------------
function createRealisticIrisTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Deep rich multi-chromatic hazel/amber iris stroma
  const grad = ctx.createRadialGradient(512, 512, 80, 512, 512, 512);
  grad.addColorStop(0.0, '#09090b');
  grad.addColorStop(0.12, '#291e14');
  grad.addColorStop(0.25, '#78350f');
  grad.addColorStop(0.48, '#b45309');
  grad.addColorStop(0.72, '#d97706');
  grad.addColorStop(0.92, '#713f12');
  grad.addColorStop(1.0, '#1c1917');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1024);

  // Micro-trabeculae collagen fibrils (280 radial striations)
  ctx.strokeStyle = 'rgba(254, 240, 138, 0.45)';
  ctx.lineWidth = 1.8;
  for (let i = 0; i < 280; i++) {
    const angle = (i * Math.PI) / 140;
    const r1 = 130 + Math.random() * 30;
    const r2 = 490 + Math.random() * 18;
    ctx.beginPath();
    ctx.moveTo(512 + Math.cos(angle) * r1, 512 + Math.sin(angle) * r1);
    ctx.lineTo(512 + Math.cos(angle) * r2, 512 + Math.sin(angle) * r2);
    ctx.stroke();
  }

  // Pupillary collarette ring
  ctx.strokeStyle = 'rgba(217, 119, 6, 0.7)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(512, 512, 280, 0, Math.PI * 2);
  ctx.stroke();

  // Dark central aperture (Pupil)
  ctx.fillStyle = '#050505';
  ctx.beginPath();
  ctx.arc(512, 512, 135, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function createRealisticScleraTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Ivory white with subtle soft gradient
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, 1024, 512);

  // Fine microscopic episcleral blood vessels branching on the sclera exterior
  ctx.strokeStyle = 'rgba(220, 38, 38, 0.35)';
  ctx.lineWidth = 1.2;
  for (let i = 0; i < 35; i++) {
    let x = 300 + Math.random() * 450;
    let y = 50 + Math.random() * 400;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let j = 0; j < 4; j++) {
      x += (Math.random() - 0.5) * 60;
      y += (Math.random() - 0.5) * 60;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function createRealisticRetinaFundusTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Deep warm glowing red/orange clinical fundus
  const bgGrad = ctx.createRadialGradient(512, 256, 30, 512, 256, 512);
  bgGrad.addColorStop(0.0, '#ea580c');
  bgGrad.addColorStop(0.35, '#c2410c');
  bgGrad.addColorStop(0.75, '#9a3412');
  bgGrad.addColorStop(1.0, '#7c2d12');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1024, 512);

  // Optic Disc (Nasal landmark: pale yellow circular disc)
  const discX = 350;
  const discY = 256;
  ctx.fillStyle = '#fef08a';
  ctx.beginPath();
  ctx.arc(discX, discY, 36, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#ca8a04';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Macula Lutea & Fovea Centralis (Temporal landmark: yellow pigment with foveal pit)
  const maculaX = 630;
  const maculaY = 256;
  const maculaGrad = ctx.createRadialGradient(maculaX, maculaY, 6, maculaX, maculaY, 52);
  maculaGrad.addColorStop(0.0, '#f59e0b');
  maculaGrad.addColorStop(0.35, '#7c2d12');
  maculaGrad.addColorStop(1.0, 'transparent');
  ctx.fillStyle = maculaGrad;
  ctx.beginPath();
  ctx.arc(maculaX, maculaY, 52, 0, Math.PI * 2);
  ctx.fill();

  // Branching Retinal Arterioles (Red) and Venules (Blue)
  const drawVesselTree = (startX, startY, isVein) => {
    ctx.strokeStyle = isVein ? 'rgba(30, 64, 175, 0.92)' : 'rgba(220, 38, 38, 0.95)';
    ctx.lineWidth = isVein ? 4.2 : 3.0;
    ctx.lineCap = 'round';

    // Superior temporal arcade
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(startX + 40, startY - 90, startX + 180, startY - 160, startX + 340, startY - 130);
    ctx.stroke();

    // Superior branches
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(startX + 120, startY - 115);
    ctx.lineTo(startX + 190, startY - 200);
    ctx.moveTo(startX + 210, startY - 145);
    ctx.lineTo(startX + 290, startY - 220);
    ctx.stroke();

    // Inferior temporal arcade
    ctx.lineWidth = isVein ? 4.2 : 3.0;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(startX + 40, startY + 90, startX + 180, startY + 160, startX + 340, startY + 130);
    ctx.stroke();

    // Inferior branches
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(startX + 120, startY + 115);
    ctx.lineTo(startX + 190, startY + 200);
    ctx.moveTo(startX + 210, startY + 145);
    ctx.lineTo(startX + 290, startY + 220);
    ctx.stroke();
  };

  drawVesselTree(discX, discY, true);  // Retinal Vein
  drawVesselTree(discX + 4, discY - 2, false); // Retinal Artery

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// -------------------------------------------------------------
// Accurate 3D Anatomical Anatomy Construction (Neil Modi Clinical Standard)
// -------------------------------------------------------------
function buildPhotorealisticEyeAnatomy(group, viewMode, layerFilter) {
  while (group.children.length > 1) {
    group.remove(group.children[group.children.length - 1]);
  }

  const isCutaway = viewMode === 'crossSection';
  const phiLength = isCutaway ? Math.PI * 1.34 : Math.PI * 2;

  const showFibrosa = layerFilter === 'all' || layerFilter === 'fibrosa';
  const showVasculosa = layerFilter === 'all' || layerFilter === 'vasculosa';
  const showNervosa = layerFilter === 'all' || layerFilter === 'nervosa';
  const showOptical = layerFilter === 'all' || layerFilter === 'optical';
  const showNeural = layerFilter === 'all' || layerFilter === 'neural';

  // 1. SCLERA (Outer White Shell with Subsurface Feel - R=2.0)
  if (showFibrosa) {
    const scleraGeo = new THREE.SphereGeometry(2.0, 64, 64, 0, phiLength, 0.42, Math.PI - 0.42);
    const scleraTexture = createRealisticScleraTexture();
    const scleraMat = new THREE.MeshStandardMaterial({
      map: scleraTexture,
      roughness: 0.25,
      metalness: 0.04,
      side: isCutaway ? THREE.DoubleSide : THREE.FrontSide
    });
    const scleraMesh = new THREE.Mesh(scleraGeo, scleraMat);
    scleraMesh.rotation.y = Math.PI / 2;
    group.add(scleraMesh);

    // Extraocular Rectus Muscle Bands (Superior & Inferior Muscle Tendons)
    const muscleGeo = new THREE.BoxGeometry(0.36, 0.09, 1.85);
    const muscleMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.6 });
    
    const supMuscle = new THREE.Mesh(muscleGeo, muscleMat);
    supMuscle.position.set(0, 2.03, -0.45);
    supMuscle.rotation.x = -0.22;
    group.add(supMuscle);

    const infMuscle = new THREE.Mesh(muscleGeo, muscleMat);
    infMuscle.position.set(0, -2.03, -0.45);
    infMuscle.rotation.x = 0.22;
    group.add(infMuscle);

    // 2. CORNEA (Steep Curvature Glossy Refractive Anterior Dome - R=1.24)
    const corneaGeo = new THREE.SphereGeometry(1.24, 56, 56, 0, Math.PI * 2, 0, Math.PI / 2.05);
    const corneaMat = new THREE.MeshPhysicalMaterial({
      color: 0xbae6fd,
      transparent: true,
      opacity: 0.45,
      roughness: 0.015,
      metalness: 0.05,
      transmission: 0.95,
      ior: 1.376,
      side: THREE.DoubleSide
    });
    const corneaMesh = new THREE.Mesh(corneaGeo, corneaMat);
    corneaMesh.position.set(0, 0, 1.44);
    corneaMesh.scale.set(1.0, 1.0, 0.74);
    group.add(corneaMesh);
  }

  // 3. CHOROID (Middle Vascular Layer - R=1.92, deep vascular burgundy)
  if (showVasculosa) {
    const choroidGeo = new THREE.SphereGeometry(1.92, 56, 56, 0, phiLength, 0.46, Math.PI - 0.46);
    const choroidMat = new THREE.MeshStandardMaterial({
      color: 0x7f1d1d,
      roughness: 0.55,
      metalness: 0.1,
      side: THREE.DoubleSide
    });
    const choroidMesh = new THREE.Mesh(choroidGeo, choroidMat);
    choroidMesh.rotation.y = Math.PI / 2;
    group.add(choroidMesh);

    // 4. IRIS & PUPIL WITH PHOTOREALISTIC RADIAL STROMA TEXTURE
    const irisGeo = new THREE.RingGeometry(0.46, 1.22, 56);
    const irisTexture = createRealisticIrisTexture();
    const irisMat = new THREE.MeshStandardMaterial({
      map: irisTexture,
      roughness: 0.35,
      side: THREE.DoubleSide
    });
    const irisMesh = new THREE.Mesh(irisGeo, irisMat);
    irisMesh.position.set(0, 0, 1.46);
    group.add(irisMesh);

    // Ciliary Body Crests (Corpus Ciliare)
    const ciliaryGeo = new THREE.TorusGeometry(1.26, 0.12, 16, 56);
    const ciliaryMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.5 });
    const ciliaryMesh = new THREE.Mesh(ciliaryGeo, ciliaryMat);
    ciliaryMesh.position.set(0, 0, 1.32);
    group.add(ciliaryMesh);
  }

  // 5. RETINA (Inner Neurosensory Layer with Fundus Texture & Vessels - R=1.85)
  if (showNervosa) {
    const retinaGeo = new THREE.SphereGeometry(1.85, 64, 64, 0, phiLength, 0.58, Math.PI - 0.58);
    const retinaTexture = createRealisticRetinaFundusTexture();
    const retinaMat = new THREE.MeshStandardMaterial({
      map: retinaTexture,
      roughness: 0.42,
      metalness: 0.05,
      side: THREE.DoubleSide
    });
    const retinaMesh = new THREE.Mesh(retinaGeo, retinaMat);
    retinaMesh.rotation.y = Math.PI / 2;
    group.add(retinaMesh);

    // 3D Fovea Centralis yellow landmark
    const foveaGeo = new THREE.CircleGeometry(0.22, 32);
    const foveaMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide });
    const foveaMesh = new THREE.Mesh(foveaGeo, foveaMat);
    foveaMesh.position.set(0, 0, -1.84);
    group.add(foveaMesh);

    // 3D Optic Disc landmark
    const discGeo = new THREE.CircleGeometry(0.25, 32);
    const discMat = new THREE.MeshBasicMaterial({ color: 0xfef08a, side: THREE.DoubleSide });
    const discMesh = new THREE.Mesh(discGeo, discMat);
    discMesh.position.set(0.78, 0.22, -1.77);
    discMesh.rotation.y = 0.35;
    group.add(discMesh);
  }

  // 6. CRYSTALLINE LENS & SUSPENSORY ZONULES OF ZINN
  if (showOptical) {
    // Biconvex Crystalline Lens
    const lensGeo = new THREE.SphereGeometry(0.92, 40, 40);
    const lensMat = new THREE.MeshPhysicalMaterial({
      color: 0xe0f2fe,
      transparent: true,
      opacity: 0.88,
      roughness: 0.04,
      transmission: 0.95,
      ior: 1.406
    });
    const lensMesh = new THREE.Mesh(lensGeo, lensMat);
    lensMesh.position.set(0, 0, 1.24);
    lensMesh.scale.set(0.96, 0.96, 0.48);
    group.add(lensMesh);

    // Suspensory Zonules of Zinn (Radially radiating ring)
    const zonuleGeo = new THREE.RingGeometry(0.9, 1.25, 56, 8);
    const zonuleMat = new THREE.MeshBasicMaterial({
      color: 0xfef9c3,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const zonuleMesh = new THREE.Mesh(zonuleGeo, zonuleMat);
    zonuleMesh.position.set(0, 0, 1.24);
    group.add(zonuleMesh);

    // Vitreous Body Cavity (Posterior warm glow)
    if (isCutaway || layerFilter === 'optical') {
      const vitGeo = new THREE.SphereGeometry(1.8, 40, 40, 0, phiLength);
      const vitMat = new THREE.MeshPhysicalMaterial({
        color: 0xfbbf24,
        transparent: true,
        opacity: 0.2,
        roughness: 0.1,
        transmission: 0.95
      });
      const vitMesh = new THREE.Mesh(vitGeo, vitMat);
      vitMesh.rotation.y = Math.PI / 2;
      group.add(vitMesh);
    }
  }

  // 7. OPTIC NERVE (CN II) & CENTRAL RETINAL VESSELS
  if (showNeural || showFibrosa) {
    const nerveGeo = new THREE.CylinderGeometry(0.42, 0.46, 2.0, 32);
    const nerveMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      roughness: 0.35,
      metalness: 0.08
    });
    const nerveMesh = new THREE.Mesh(nerveGeo, nerveMat);
    nerveMesh.position.set(0.88, 0.22, -2.7);
    nerveMesh.rotation.x = Math.PI / 2 + 0.15;
    nerveMesh.rotation.z = -0.15;
    group.add(nerveMesh);

    // Central Retinal Artery (Red)
    const arteryGeo = new THREE.CylinderGeometry(0.045, 0.045, 2.0, 16);
    const arteryMat = new THREE.MeshBasicMaterial({ color: 0xdc2626 });
    const arteryMesh = new THREE.Mesh(arteryGeo, arteryMat);
    arteryMesh.position.set(0.85, 0.26, -2.7);
    arteryMesh.rotation.x = Math.PI / 2 + 0.15;
    group.add(arteryMesh);

    // Central Retinal Vein (Blue)
    const veinGeo = new THREE.CylinderGeometry(0.045, 0.045, 2.0, 16);
    const veinMat = new THREE.MeshBasicMaterial({ color: 0x2563eb });
    const veinMesh = new THREE.Mesh(veinGeo, veinMat);
    veinMesh.position.set(0.91, 0.18, -2.7);
    veinMesh.rotation.x = Math.PI / 2 + 0.15;
    group.add(veinMesh);
  }
}

// -------------------------------------------------------------
// Interactive 3D Pins Construction
// -------------------------------------------------------------
function build3DPins(pinsGroup, structures, activeId, layerFilter) {
  while (pinsGroup.children.length > 0) {
    pinsGroup.remove(pinsGroup.children[0]);
  }

  structures.forEach((structure) => {
    if (layerFilter !== 'all' && structure.layerCategory !== layerFilter) {
      return;
    }

    const isSelected = structure.id === activeId;
    const pinGroup = new THREE.Group();
    pinGroup.position.set(...structure.pinPosition);

    const sphereGeo = new THREE.SphereGeometry(isSelected ? 0.13 : 0.09, 20, 20);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: isSelected ? 0xd4af37 : 0xffffff
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.userData = { structureId: structure.id };
    pinGroup.add(sphereMesh);

    const ringGeo = new THREE.RingGeometry(0.12, 0.17, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: isSelected ? 0xd4af37 : (structure.color || 0x38bdf8),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: isSelected ? 0.95 : 0.7
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.lookAt(0, 0, 10);
    pinGroup.add(ringMesh);

    pinsGroup.add(pinGroup);
  });
}
