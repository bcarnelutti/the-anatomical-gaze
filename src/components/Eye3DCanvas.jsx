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
    rotation: { x: 0.3, y: -0.6 },
    targetRotation: { x: 0.3, y: -0.6 },
    zoom: 6.2,
    targetZoom: 6.2
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
    const height = container.clientHeight || 550;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, controlsRef.current.zoom);
    cameraRef.current = camera;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.localClippingEnabled = true;
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.2);
    keyLight.position.set(5, 8, 7);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x7dd3fc, 1.4);
    fillLight.position.set(-6, -4, -5);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xd4af37, 2.5, 20);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    // 5. Build Eye Model Group
    const eyeGroup = new THREE.Group();
    eyeModelGroupRef.current = eyeGroup;
    scene.add(eyeGroup);

    // Pins Group
    const pinsGroup = new THREE.Group();
    pinsGroupRef.current = pinsGroup;
    eyeGroup.add(pinsGroup);

    // Build Model Components
    buildEyeAnatomy(eyeGroup, viewMode, activeLayerFilter);
    build3DPins(pinsGroup, anatomicalStructures, activeStructureId, activeLayerFilter);

    // 6. Interaction Event Handlers (Mouse / Touch Orbit)
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

      // Raycast pins on hover
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
      // Clamp vertical pitch to avoid gimbal flip
      controlsRef.current.targetRotation.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, controlsRef.current.targetRotation.x));

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

    // Touch events for mobile
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
        const h = entry.contentRect.height || 550;
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

      // Smooth interpolation for orbit rotation & zoom
      controlsRef.current.rotation.x += (controlsRef.current.targetRotation.x - controlsRef.current.rotation.x) * 0.1;
      controlsRef.current.rotation.y += (controlsRef.current.targetRotation.y - controlsRef.current.rotation.y) * 0.1;
      controlsRef.current.zoom += (controlsRef.current.targetZoom - controlsRef.current.zoom) * 0.1;

      eyeGroup.rotation.x = controlsRef.current.rotation.x;
      eyeGroup.rotation.y = controlsRef.current.rotation.y;
      camera.position.z = controlsRef.current.zoom;

      // Animate 3D pin pulsing
      if (pinsGroupRef.current) {
        pinsGroupRef.current.children.forEach((pinGroup) => {
          const outerRing = pinGroup.children[1];
          if (outerRing) {
            const scale = 1.0 + 0.25 * Math.sin(elapsedTime * 4.0 + pinGroup.position.x);
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

  // Camera focus animation when structure is selected
  useEffect(() => {
    if (!activeStructureId) return;
    const structure = anatomicalStructures.find(s => s.id === activeStructureId);
    if (structure && structure.pinPosition) {
      // Calculate target rotation to face the pin towards the camera
      const [px, py, pz] = structure.pinPosition;
      const targetY = -Math.atan2(px, pz);
      const targetX = Math.atan2(py, Math.sqrt(px * px + pz * pz));
      controlsRef.current.targetRotation.y = targetY;
      controlsRef.current.targetRotation.x = targetX * 0.8;
      controlsRef.current.targetZoom = 5.2; // slight zoom-in
    }
  }, [activeStructureId]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '520px' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '520px', borderRadius: '12px', overflow: 'hidden' }} />
      
      {/* 3D Viewport Controls HUD */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
        display: 'flex',
        gap: '0.5rem',
        background: 'rgba(10, 10, 12, 0.75)',
        backdropFilter: 'blur(10px)',
        padding: '0.4rem 0.8rem',
        borderRadius: '8px',
        border: '1px solid var(--border-glass)',
        fontSize: '0.8rem',
        color: 'var(--text-secondary)'
      }}>
        <span>🖱️ Drag to rotate</span>
        <span>•</span>
        <span>🔍 Scroll to zoom</span>
        <span>•</span>
        <span>🎯 Click pins to dissect</span>
      </div>

      {/* Hovered Pin Tooltip */}
      {hoveredPin && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          background: 'rgba(20, 21, 26, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--accent-gold)',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          color: '#fff',
          fontSize: '0.9rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
          pointerEvents: 'none'
        }}>
          <strong style={{ color: 'var(--accent-gold)' }}>
            {anatomicalStructures.find(s => s.id === hoveredPin)?.name}
          </strong>
          <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            {anatomicalStructures.find(s => s.id === hoveredPin)?.latin}
          </span>
        </div>
      )}

      {/* Quick Camera Reset Button */}
      <button
        onClick={() => {
          controlsRef.current.targetRotation = { x: 0.3, y: -0.6 };
          controlsRef.current.targetZoom = 6.2;
        }}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(20, 21, 26, 0.8)',
          border: '1px solid var(--border-glass)',
          color: 'var(--text-primary)',
          padding: '0.4rem 0.8rem',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '0.8rem',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s'
        }}
        title="Reset 3D Camera View"
      >
        ↺ Reset View
      </button>
    </div>
  );
}

// -------------------------------------------------------------
// Procedural Three.js Eye Anatomy Construction
// -------------------------------------------------------------
function buildEyeAnatomy(group, viewMode, layerFilter) {
  // Clear previous meshes except pins
  while (group.children.length > 1) {
    group.remove(group.children[group.children.length - 1]);
  }

  const isCutaway = viewMode === 'crossSection';
  const phiLength = isCutaway ? Math.PI * 1.35 : Math.PI * 2; // Cutaway wedge opening

  const showFibrosa = layerFilter === 'all' || layerFilter === 'fibrosa';
  const showVasculosa = layerFilter === 'all' || layerFilter === 'vasculosa';
  const showNervosa = layerFilter === 'all' || layerFilter === 'nervosa';
  const showOptical = layerFilter === 'all' || layerFilter === 'optical';
  const showNeural = layerFilter === 'all' || layerFilter === 'neural';

  // 1. SCLERA (Outer Fibrous Shell - R=2.0)
  if (showFibrosa) {
    const scleraGeo = new THREE.SphereGeometry(2.0, 48, 48, 0, phiLength, 0.4, Math.PI - 0.4);
    const scleraMat = new THREE.MeshStandardMaterial({
      color: 0xf3f4f6,
      roughness: 0.35,
      metalness: 0.05,
      side: isCutaway ? THREE.DoubleSide : THREE.FrontSide
    });
    const scleraMesh = new THREE.Mesh(scleraGeo, scleraMat);
    scleraMesh.rotation.y = Math.PI / 2;
    group.add(scleraMesh);

    // 2. CORNEA (Anterior Protruding Dome - R=1.2, offset forward)
    const corneaGeo = new THREE.SphereGeometry(1.2, 36, 36, 0, Math.PI * 2, 0, Math.PI / 2.2);
    const corneaMat = new THREE.MeshPhysicalMaterial({
      color: 0xa5f3fc,
      transparent: true,
      opacity: 0.45,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.376,
      side: THREE.DoubleSide
    });
    const corneaMesh = new THREE.Mesh(corneaGeo, corneaMat);
    corneaMesh.position.set(0, 0, 1.45);
    corneaMesh.scale.set(1.0, 1.0, 0.7);
    group.add(corneaMesh);
  }

  // 3. CHOROID (Middle Vascular Layer - R=1.92)
  if (showVasculosa) {
    const choroidGeo = new THREE.SphereGeometry(1.92, 40, 40, 0, phiLength, 0.45, Math.PI - 0.45);
    const choroidMat = new THREE.MeshStandardMaterial({
      color: 0x881337,
      roughness: 0.6,
      metalness: 0.1,
      side: THREE.DoubleSide
    });
    const choroidMesh = new THREE.Mesh(choroidGeo, choroidMat);
    choroidMesh.rotation.y = Math.PI / 2;
    group.add(choroidMesh);

    // 4. IRIS & PUPIL APERTURE
    const irisGeo = new THREE.RingGeometry(0.45, 1.15, 36);
    const irisMat = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      roughness: 0.4,
      side: THREE.DoubleSide
    });
    const irisMesh = new THREE.Mesh(irisGeo, irisMat);
    irisMesh.position.set(0, 0, 1.48);
    group.add(irisMesh);

    // Ciliary Body Ring
    const ciliaryGeo = new THREE.TorusGeometry(1.22, 0.08, 16, 40);
    const ciliaryMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.5 });
    const ciliaryMesh = new THREE.Mesh(ciliaryGeo, ciliaryMat);
    ciliaryMesh.position.set(0, 0, 1.35);
    group.add(ciliaryMesh);
  }

  // 5. RETINA (Inner Neurosensory Layer - R=1.85)
  if (showNervosa) {
    const retinaGeo = new THREE.SphereGeometry(1.85, 40, 40, 0, phiLength, 0.55, Math.PI - 0.55);
    const retinaMat = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      roughness: 0.5,
      metalness: 0.0,
      side: THREE.DoubleSide
    });
    const retinaMesh = new THREE.Mesh(retinaGeo, retinaMat);
    retinaMesh.rotation.y = Math.PI / 2;
    group.add(retinaMesh);

    // Macula / Fovea Yellow Landmark
    const foveaGeo = new THREE.CircleGeometry(0.2, 24);
    const foveaMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide });
    const foveaMesh = new THREE.Mesh(foveaGeo, foveaMat);
    foveaMesh.position.set(0, 0, -1.84);
    group.add(foveaMesh);

    // Optic Disc Pale Landmark
    const discGeo = new THREE.CircleGeometry(0.22, 24);
    const discMat = new THREE.MeshBasicMaterial({ color: 0xfef08a, side: THREE.DoubleSide });
    const discMesh = new THREE.Mesh(discGeo, discMat);
    discMesh.position.set(0.75, 0.2, -1.78);
    discMesh.rotation.y = 0.35;
    group.add(discMesh);
  }

  // 6. CRYSTALLINE LENS & VITREOUS HUMOR
  if (showOptical) {
    // Biconvex Lens
    const lensGeo = new THREE.SphereGeometry(0.9, 32, 32);
    const lensMat = new THREE.MeshPhysicalMaterial({
      color: 0xe0f2fe,
      transparent: true,
      opacity: 0.8,
      roughness: 0.1,
      transmission: 0.9,
      ior: 1.406
    });
    const lensMesh = new THREE.Mesh(lensGeo, lensMat);
    lensMesh.position.set(0, 0, 1.25);
    lensMesh.scale.set(0.95, 0.95, 0.45);
    group.add(lensMesh);

    // Vitreous Body Gel Core
    if (isCutaway || layerFilter === 'optical') {
      const vitGeo = new THREE.SphereGeometry(1.8, 32, 32, 0, phiLength);
      const vitMat = new THREE.MeshPhysicalMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.22,
        roughness: 0.1,
        transmission: 0.95
      });
      const vitMesh = new THREE.Mesh(vitGeo, vitMat);
      vitMesh.rotation.y = Math.PI / 2;
      group.add(vitMesh);
    }
  }

  // 7. OPTIC NERVE (CN II) - Posterior Neural Cable
  if (showNeural || showFibrosa) {
    const nerveGeo = new THREE.CylinderGeometry(0.38, 0.42, 1.8, 24);
    const nerveMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      roughness: 0.4,
      metalness: 0.1
    });
    const nerveMesh = new THREE.Mesh(nerveGeo, nerveMat);
    nerveMesh.position.set(0.85, 0.2, -2.6);
    nerveMesh.rotation.x = Math.PI / 2 + 0.15;
    nerveMesh.rotation.z = -0.15;
    group.add(nerveMesh);

    // Central Retinal Artery / Vein red/blue line
    const arteryGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.8, 12);
    const arteryMat = new THREE.MeshBasicMaterial({ color: 0xdc2626 });
    const arteryMesh = new THREE.Mesh(arteryGeo, arteryMat);
    arteryMesh.position.set(0.82, 0.24, -2.6);
    arteryMesh.rotation.x = Math.PI / 2 + 0.15;
    group.add(arteryMesh);
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
    // Filter pins according to selected layer
    if (layerFilter !== 'all' && structure.layerCategory !== layerFilter) {
      return;
    }

    const isSelected = structure.id === activeId;
    const pinGroup = new THREE.Group();
    pinGroup.position.set(...structure.pinPosition);

    // Center interactive beacon sphere
    const sphereGeo = new THREE.SphereGeometry(isSelected ? 0.12 : 0.085, 16, 16);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: isSelected ? 0xd4af37 : 0xffffff
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.userData = { structureId: structure.id };
    pinGroup.add(sphereMesh);

    // Outer pulsing ring marker
    const ringGeo = new THREE.RingGeometry(0.12, 0.16, 24);
    const ringMat = new THREE.MeshBasicMaterial({
      color: isSelected ? 0xd4af37 : (structure.color || 0x38bdf8),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: isSelected ? 0.9 : 0.65
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.lookAt(0, 0, 10);
    pinGroup.add(ringMesh);

    pinsGroup.add(pinGroup);
  });
}
