import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { anatomicalStructures } from '../data/medicalAtlasData';

export default function Eye3DCanvas({ activeStructureId, onSelectStructure, viewMode, activeLayerFilter }) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const eyeGroupRef = useRef(null);
  const pinsGroupRef = useRef(null);
  const partsRef = useRef({});
  const scalableShellsRef = useRef([]);
  const cutRingsRef = useRef([]);
  const cutPlaneRef = useRef(null);
  const requestRef = useRef(null);

  const [hoveredPin, setHoveredPin] = useState(null);
  const [cutValue, setCutValue] = useState(0.0);
  const [explodeValue, setExplodeValue] = useState(0.0);
  const [autoRotate, setAutoRotate] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. WebGL Renderer
    const width = container.clientWidth;
    const height = container.clientHeight || 620;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.localClippingEnabled = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x080b0d, 0.0);
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Scene & Fog
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 3. Camera
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 180);
    camera.position.set(31, 16, 27);
    cameraRef.current = camera;

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.target.set(0, 0, 0);
    controls.minDistance = 12;
    controls.maxDistance = 80;
    controls.autoRotateSpeed = 0.65;
    controls.autoRotate = autoRotate;
    controlsRef.current = controls;

    // 5. Environment & Lights
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(new RoomEnvironment(renderer), 0.03).texture;
    scene.environment = envTexture;

    const keyLight = new THREE.DirectionalLight(0xfff4e8, 3.0);
    keyLight.position.set(18, 22, 24);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xc8ddff, 1.5);
    fillLight.position.set(-18, 6, 9);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.3);
    rimLight.position.set(2, 16, -28);
    scene.add(rimLight);

    scene.add(new THREE.HemisphereLight(0xdce8ef, 0x160e0c, 0.7));

    // Shadow Floor
    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(52, 96),
      new THREE.ShadowMaterial({ color: 0x000000, transparent: true, opacity: 0.28 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -15.2;
    floor.receiveShadow = true;
    scene.add(floor);

    // 6. Eye Group
    const eye = new THREE.Group();
    eye.rotation.set(-0.03, 0.12, -0.08);
    eyeGroupRef.current = eye;
    scene.add(eye);

    // Pins Group
    const pinsGroup = new THREE.Group();
    pinsGroupRef.current = pinsGroup;
    eye.add(pinsGroup);

    // 7. Clipping Planes
    const isCutaway = viewMode === 'crossSection';
    const initialCutConstant = isCutaway ? cutValue : 25.0;
    const cutPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), initialCutConstant);
    cutPlaneRef.current = cutPlane;

    const scleraFrontPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 10.25);
    const choroidFrontPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 8.15);
    const retinaFrontPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 7.45);
    const corneaClip = new THREE.Plane(new THREE.Vector3(0, 0, 1), -9.8);

    function physical(opts = {}) {
      return new THREE.MeshPhysicalMaterial({
        side: THREE.DoubleSide,
        roughness: 0.34,
        metalness: 0,
        clearcoat: 0.34,
        clearcoatRoughness: 0.24,
        envMapIntensity: 1.05,
        clippingPlanes: [cutPlane],
        ...opts
      });
    }

    function standard(opts = {}) {
      return new THREE.MeshStandardMaterial({
        side: THREE.DoubleSide,
        roughness: 0.5,
        clippingPlanes: [cutPlane],
        ...opts
      });
    }

    const parts = {};
    const scalableShells = [];

    function addPart(name, mesh, scalable = false, category = 'all') {
      mesh.name = name;
      mesh.userData = { category, partName: name };
      eye.add(mesh);
      parts[name] = parts[name] || [];
      parts[name].push(mesh);
      if (scalable) scalableShells.push({ mesh, base: mesh.scale.clone(), name });
      return mesh;
    }

    // A. SCLERA
    addPart('Sclera',
      new THREE.Mesh(new THREE.SphereGeometry(12.0, 160, 120),
        physical({
          color: 0xe8e3d9,
          roughness: 0.48,
          clearcoat: 0.22,
          sheen: 0.18,
          sheenColor: new THREE.Color(0xfff5eb),
          clippingPlanes: [cutPlane, scleraFrontPlane]
        })
      ), true, 'fibrosa');

    // B. CHOROID
    addPart('Choroid',
      new THREE.Mesh(new THREE.SphereGeometry(11.64, 150, 110),
        physical({
          color: 0x32120e,
          roughness: 0.52,
          clearcoat: 0.16,
          sheen: 0.08,
          sheenColor: new THREE.Color(0x6e2318),
          clippingPlanes: [cutPlane, choroidFrontPlane]
        })
      ), true, 'vasculosa');

    // C. RETINA
    addPart('Retina',
      new THREE.Mesh(new THREE.SphereGeometry(11.36, 150, 110),
        physical({
          color: 0x8b3129,
          roughness: 0.42,
          clearcoat: 0.24,
          transmission: 0.02,
          sheen: 0.22,
          sheenColor: new THREE.Color(0xd97464),
          clippingPlanes: [cutPlane, retinaFrontPlane]
        })
      ), true, 'nervosa');

    // D. VITREOUS BODY
    addPart('Vitreous',
      new THREE.Mesh(new THREE.SphereGeometry(10.95, 120, 90),
        new THREE.MeshPhysicalMaterial({
          color: 0xdceff1,
          transparent: true,
          opacity: 0.085,
          transmission: 0.92,
          thickness: 6.0,
          ior: 1.336,
          roughness: 0.08,
          clearcoat: 0.3,
          depthWrite: false,
          side: THREE.DoubleSide,
          clippingPlanes: [cutPlane],
          envMapIntensity: 0.8
        })
      ), false, 'optical');

    // E. CORNEA
    const corneaMat = new THREE.MeshPhysicalMaterial({
      color: 0xdaf5fa,
      transparent: true,
      opacity: 0.32,
      transmission: 0.98,
      ior: 1.376,
      thickness: 1.0,
      roughness: 0.04,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      side: THREE.DoubleSide,
      depthWrite: false,
      clippingPlanes: [cutPlane, corneaClip],
      envMapIntensity: 1.35
    });
    const cornea = new THREE.Mesh(new THREE.SphereGeometry(7.3, 160, 100), corneaMat);
    cornea.scale.set(1, 1, 1.05);
    cornea.position.z = 5.3;
    addPart('Cornea', cornea, false, 'fibrosa');

    // F. ANTERIOR CHAMBER / AQUEOUS HUMOR
    const aqueous = new THREE.Mesh(new THREE.SphereGeometry(6.0, 100, 70),
      new THREE.MeshPhysicalMaterial({
        color: 0xcfe8eb,
        transparent: true,
        opacity: 0.09,
        transmission: 0.96,
        ior: 1.336,
        thickness: 2,
        roughness: 0.04,
        depthWrite: false,
        side: THREE.DoubleSide,
        clippingPlanes: [cutPlane]
      }));
    aqueous.scale.set(0.9, 0.9, 0.45);
    aqueous.position.z = 7.85;
    addPart('Aqueous', aqueous, false, 'optical');

    // G. IRIS
    const irisGeo = new THREE.RingGeometry(2.15, 5.35, 180, 5);
    const irisMat = physical({ color: 0x493327, roughness: 0.62, clearcoat: 0.18, sheen: 0.08 });
    const iris = new THREE.Mesh(irisGeo, irisMat);
    iris.position.z = 8.35;
    addPart('Iris', iris, false, 'vasculosa');

    // Radial iris fibers
    const fiberMat = new THREE.LineBasicMaterial({ color: 0x8d725a, transparent: true, opacity: 0.28, clippingPlanes: [cutPlane] });
    for (let i = 0; i < 110; i++) {
      const a = (i / 110) * Math.PI * 2 + Math.sin(i * 12.73) * 0.015;
      const r0 = 2.2 + Math.sin(i * 3.1) * 0.08;
      const r1 = 5.15 + Math.sin(i * 1.73) * 0.12;
      const pts = [
        new THREE.Vector3(Math.cos(a) * r0, Math.sin(a) * r0, 8.31),
        new THREE.Vector3(Math.cos(a + Math.sin(i) * 0.018) * r1, Math.sin(a + Math.sin(i) * 0.018) * r1, 8.31)
      ];
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), fiberMat);
      addPart('Iris', line, false, 'vasculosa');
    }

    // H. CILIARY BODY
    const ciliary = new THREE.Mesh(new THREE.TorusGeometry(5.35, 0.8, 28, 160),
      physical({ color: 0x5d261e, roughness: 0.5, clearcoat: 0.23, sheen: 0.16, sheenColor: new THREE.Color(0x9c4a3b) }));
    ciliary.position.z = 6.85;
    addPart('Ciliary Body', ciliary, false, 'vasculosa');

    // Ciliary processes
    for (let i = 0; i < 40; i++) {
      const a = (i / 40) * Math.PI * 2;
      const m = new THREE.Mesh(new THREE.CapsuleGeometry(0.14, 0.72, 5, 10),
        standard({ color: 0x713226, roughness: 0.56 }));
      m.position.set(Math.cos(a) * 4.75, Math.sin(a) * 4.75, 6.55);
      m.rotation.z = a + Math.PI / 2;
      m.rotation.x = Math.PI / 2;
      addPart('Ciliary Body', m, false, 'vasculosa');
    }

    // I. LENS (Layered translucent cortex & nucleus)
    const lensOuter = new THREE.Mesh(new THREE.SphereGeometry(5.0, 140, 100),
      new THREE.MeshPhysicalMaterial({
        color: 0xd9dfcb,
        transparent: true,
        opacity: 0.64,
        transmission: 0.72,
        ior: 1.406,
        thickness: 3.5,
        roughness: 0.12,
        clearcoat: 0.56,
        clearcoatRoughness: 0.1,
        side: THREE.DoubleSide,
        clippingPlanes: [cutPlane],
        envMapIntensity: 1.1
      }));
    lensOuter.scale.set(0.91, 0.91, 0.41);
    lensOuter.position.z = 5.0;
    addPart('Lens', lensOuter, false, 'optical');

    const lensNucleus = new THREE.Mesh(new THREE.SphereGeometry(4.0, 110, 80),
      new THREE.MeshPhysicalMaterial({
        color: 0xd6d2ad,
        transparent: true,
        opacity: 0.22,
        transmission: 0.82,
        ior: 1.41,
        thickness: 2.5,
        roughness: 0.17,
        side: THREE.DoubleSide,
        clippingPlanes: [cutPlane],
        depthWrite: false
      }));
    lensNucleus.scale.set(0.83, 0.83, 0.36);
    lensNucleus.position.z = 5.0;
    addPart('Lens', lensNucleus, false, 'optical');

    // Zonular fibers
    const zonuleMat = new THREE.LineBasicMaterial({ color: 0xe4d9bd, transparent: true, opacity: 0.32, clippingPlanes: [cutPlane] });
    for (let i = 0; i < 48; i++) {
      const a = (i / 48) * Math.PI * 2;
      const p1 = new THREE.Vector3(Math.cos(a) * 4.55, Math.sin(a) * 4.55, 5.1);
      const p2 = new THREE.Vector3(Math.cos(a) * 5.08, Math.sin(a) * 5.08, 6.45);
      const p3 = new THREE.Vector3(Math.cos(a) * 4.55, Math.sin(a) * 4.55, 4.9);
      const p4 = new THREE.Vector3(Math.cos(a) * 5.08, Math.sin(a) * 5.08, 6.15);
      for (const pair of [[p1, p2], [p3, p4]]) {
        addPart('Lens', new THREE.Line(new THREE.BufferGeometry().setFromPoints(pair), zonuleMat), false, 'optical');
      }
    }

    // J. OPTIC NERVE
    const nerveMat = physical({ color: 0xd3b488, roughness: 0.58, clearcoat: 0.12, sheen: 0.08 });
    const nerve = new THREE.Mesh(new THREE.CylinderGeometry(1.65, 2.05, 13.2, 64, 4), nerveMat);
    nerve.rotation.x = Math.PI / 2;
    nerve.position.set(0, 0, -17.3);
    addPart('Optic Nerve', nerve, false, 'neural');

    // Central depression / optic disc
    const disc = new THREE.Mesh(new THREE.CircleGeometry(1.05, 72),
      physical({ color: 0xe3b08c, roughness: 0.52, clearcoat: 0.18 }));
    disc.position.set(0, 0, -11.38);
    disc.rotation.y = Math.PI;
    addPart('Optic Disc', disc, false, 'neural');

    // K. RETINAL BLOOD VESSELS
    const vesselRed = physical({ color: 0x731014, roughness: 0.4, clearcoat: 0.38, sheen: 0.12, clippingPlanes: [cutPlane] });
    const vesselDark = physical({ color: 0x3f1117, roughness: 0.42, clearcoat: 0.3, clippingPlanes: [cutPlane] });

    function retinaPoint(theta, phi, r = 11.30) {
      return new THREE.Vector3(
        r * Math.sin(theta) * Math.cos(phi),
        r * Math.sin(theta) * Math.sin(phi),
        -r * Math.cos(theta)
      );
    }

    function addVessel(points, radius, material) {
      const curve = new THREE.CatmullRomCurve3(points);
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, Math.max(24, points.length * 10), radius, 7, false), material);
      addPart('Blood Vessels', tube, false, 'nervosa');
    }

    const trunkAngles = [-1.05, -0.66, -0.25, 0.18, 0.62, 1.02];
    for (let t = 0; t < trunkAngles.length; t++) {
      const phi0 = trunkAngles[t];
      const pts = [];
      for (let j = 0; j < 10; j++) {
        const theta = 0.06 + j * 0.105;
        const phi = phi0 + Math.sin(j * 0.78 + t * 1.9) * 0.055 + (j * j) * 0.0018 * (t % 2 ? 1 : -1);
        pts.push(retinaPoint(theta, phi));
      }
      addVessel(pts, t % 2 ? 0.115 : 0.13, t % 2 ? vesselDark : vesselRed);

      for (let b = 0; b < 2; b++) {
        const start = 4 + b * 2;
        const branch = [pts[start]];
        const side = (b === 0 ? -1 : 1) * (t % 2 ? 1 : -1);
        for (let j = 1; j < 7; j++) {
          const theta = 0.06 + (start + j) * 0.105;
          const phi = phi0 + side * (0.065 * j + 0.008 * j * j) + Math.sin((j + t) * 1.2) * 0.035;
          branch.push(retinaPoint(theta, phi));
        }
        addVessel(branch, 0.065, t % 2 ? vesselDark : vesselRed);

        const s2 = 3;
        const tertiary = [branch[s2]];
        for (let j = 1; j < 5; j++) {
          const theta = 0.06 + (start + s2 + j) * 0.105;
          const phi = phi0 + side * (0.065 * (s2 + j) + 0.008 * (s2 + j) * (s2 + j)) - side * 0.05 * j;
          tertiary.push(retinaPoint(theta, phi));
        }
        addVessel(tertiary, 0.035, t % 2 ? vesselDark : vesselRed);
      }
    }

    // Central retinal vessels
    const art = new THREE.Mesh(new THREE.CylinderGeometry(0.115, 0.14, 11.8, 16),
      new THREE.MeshPhysicalMaterial({ color: 0x7e1014, roughness: 0.34, clearcoat: 0.38 }));
    art.rotation.x = Math.PI / 2;
    art.position.set(0.28, 0, -17.2);
    addPart('Blood Vessels', art, false, 'neural');

    const vein = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 11.8, 16),
      new THREE.MeshPhysicalMaterial({ color: 0x42101b, roughness: 0.35, clearcoat: 0.34 }));
    vein.rotation.x = Math.PI / 2;
    vein.position.set(-0.28, 0, -17.2);
    addPart('Blood Vessels', vein, false, 'neural');

    // L. CUT-PLANE TISSUE RINGS
    function cutRing(radius, tube, color, opacity = 1) {
      const tor = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 14, 180),
        new THREE.MeshPhysicalMaterial({
          color,
          transparent: opacity < 1,
          opacity,
          roughness: 0.58,
          clearcoat: 0.13,
          side: THREE.DoubleSide,
          clippingPlanes: [],
          depthWrite: opacity > 0.4
        }));
      tor.rotation.y = Math.PI / 2;
      tor.position.x = -initialCutConstant + 0.015;
      eye.add(tor);
      return tor;
    }

    const cutSclera = cutRing(11.83, 0.20, 0xeee9de);
    const cutChoroid = cutRing(11.52, 0.10, 0x4a1711);
    const cutRetina = cutRing(11.28, 0.075, 0xac5146, 0.95);
    cutSclera.material.clippingPlanes = [scleraFrontPlane];
    cutChoroid.material.clippingPlanes = [choroidFrontPlane];
    cutRetina.material.clippingPlanes = [retinaFrontPlane];

    const moistRing = cutRing(11.12, 0.025, 0xffc1b9, 0.34);
    moistRing.material.clippingPlanes = [retinaFrontPlane];

    cutRingsRef.current = [cutSclera, cutChoroid, cutRetina, moistRing];
    parts['Sclera'].push(cutSclera);
    parts['Choroid'].push(cutChoroid);
    parts['Retina'].push(cutRetina);
    parts['Retina'].push(moistRing);

    partsRef.current = parts;
    scalableShellsRef.current = scalableShells;

    // Build 3D Pins
    build3DPins(pinsGroup, anatomicalStructures, activeStructureId, activeLayerFilter);

    // 8. Raycasting & Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      if (pinsGroupRef.current) {
        const pinSpheres = pinsGroupRef.current.children.map(g => g.children[0]).filter(Boolean);
        const intersects = raycaster.intersectObjects(pinSpheres);
        if (intersects.length > 0) {
          const structId = intersects[0].object.userData.structureId;
          setHoveredPin(structId);
          renderer.domElement.style.cursor = 'pointer';
        } else {
          setHoveredPin(null);
          renderer.domElement.style.cursor = 'grab';
        }
      }
    };

    const onClick = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      if (pinsGroupRef.current) {
        const pinSpheres = pinsGroupRef.current.children.map(g => g.children[0]).filter(Boolean);
        const intersects = raycaster.intersectObjects(pinSpheres);
        if (intersects.length > 0) {
          const structId = intersects[0].object.userData.structureId;
          if (structId && onSelectStructure) {
            onSelectStructure(structId);
          }
        }
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointermove', onPointerMove);
    dom.addEventListener('click', onClick);

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height || 620;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // 9. Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      rimLight.intensity = 2.15 + Math.sin(elapsedTime * 0.45) * 0.10;

      // Animate pulsing 3D beacon pins
      if (pinsGroupRef.current) {
        pinsGroupRef.current.children.forEach((pinGroup) => {
          const outerRing = pinGroup.children[1];
          if (outerRing) {
            const scale = 1.0 + 0.25 * Math.sin(elapsedTime * 4.0 + pinGroup.position.z);
            outerRing.scale.set(scale, scale, scale);
          }
        });
      }

      controls.update();
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      dom.removeEventListener('pointermove', onPointerMove);
      dom.removeEventListener('click', onClick);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, [viewMode]);

  // Update Cut Plane constant on slider or viewMode change
  useEffect(() => {
    if (cutPlaneRef.current) {
      const isCutaway = viewMode === 'crossSection';
      const c = isCutaway ? cutValue : 25.0;
      cutPlaneRef.current.constant = c;

      const posX = -c + 0.015;
      cutRingsRef.current.forEach(ring => {
        if (ring) {
          ring.position.x = posX;
          ring.visible = isCutaway;
        }
      });
    }
  }, [cutValue, viewMode]);

  // Update Explode separation slider
  useEffect(() => {
    const k = explodeValue;
    const shellScale = { 'Sclera': 1 + 0.032 * k, 'Choroid': 1 + 0.016 * k, 'Retina': 1 };
    scalableShellsRef.current.forEach(s => {
      const f = shellScale[s.name] || 1;
      s.mesh.scale.copy(s.base).multiplyScalar(f);
    });
    if (cutRingsRef.current[0]) cutRingsRef.current[0].scale.setScalar(1 + 0.032 * k);
    if (cutRingsRef.current[1]) cutRingsRef.current[1].scale.setScalar(1 + 0.016 * k);
  }, [explodeValue]);

  // Update Auto-rotate
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
    }
  }, [autoRotate]);

  // Filter layers
  useEffect(() => {
    if (eyeGroupRef.current) {
      eyeGroupRef.current.children.forEach(child => {
        if (child === pinsGroupRef.current || child.type === 'Line') return;
        const cat = child.userData?.category;
        if (!cat || activeLayerFilter === 'all') {
          child.visible = true;
        } else {
          child.visible = cat === activeLayerFilter;
        }
      });
    }
    if (pinsGroupRef.current) {
      build3DPins(pinsGroupRef.current, anatomicalStructures, activeStructureId, activeLayerFilter);
    }
  }, [activeLayerFilter, activeStructureId]);

  // Camera smooth focus when activeStructureId changes
  useEffect(() => {
    if (!activeStructureId || !controlsRef.current || !cameraRef.current) return;
    const structure = anatomicalStructures.find(s => s.id === activeStructureId);
    if (structure && structure.cameraTarget && structure.pinPosition) {
      const [tx, ty, tz] = structure.cameraTarget;
      const [px, py, pz] = structure.pinPosition;

      const controls = controlsRef.current;
      const camera = cameraRef.current;

      controls.target.set(tx, ty, tz);
      const dist = 24.0;
      const norm = Math.hypot(px - tx, py - ty, pz - tz) || 1;
      const dirX = (px - tx) / norm;
      const dirY = (py - ty) / norm;
      const dirZ = (pz - tz) / norm;

      camera.position.set(
        tx + dirX * dist + 10,
        ty + dirY * dist + 6,
        tz + dirZ * dist + 12
      );
      controls.update();
    }
  }, [activeStructureId]);

  const handleResetCamera = () => {
    if (controlsRef.current && cameraRef.current) {
      cameraRef.current.position.set(31, 16, 27);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  };

  const handleInspectRetina = () => {
    if (controlsRef.current && cameraRef.current) {
      cameraRef.current.position.set(18, 3, -2);
      controlsRef.current.target.set(0, 0, -3.5);
      controlsRef.current.update();
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '620px' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '620px', borderRadius: '12px', overflow: 'hidden' }} />

      {/* Floating Anatomical Controls Panel */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        width: 'min(290px, calc(100% - 2rem))',
        background: 'rgba(15, 18, 22, 0.82)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '12px',
        padding: '1rem',
        color: '#eef3f5',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
        zIndex: 20
      }}>
        <div style={{ fontSize: '0.88rem', fontWeight: '700', marginBottom: '0.2rem', color: '#fff' }}>
          Anatomical Controls
        </div>
        <div style={{ fontSize: '0.74rem', color: 'rgba(235, 244, 247, 0.65)', marginBottom: '0.75rem' }}>
          Drag to orbit • Scroll to zoom • Click pins
        </div>

        {/* Cutaway Opening Slider */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', marginBottom: '0.5rem' }}>
          <span>Cutaway opening:</span>
          <input
            type="range"
            min="-2.5"
            max="2.5"
            step="0.05"
            value={cutValue}
            onChange={(e) => setCutValue(parseFloat(e.target.value))}
            style={{ width: '110px', accentColor: 'var(--accent-gold)' }}
          />
        </div>

        {/* Layer Separation Slider */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', marginBottom: '0.85rem' }}>
          <span>Layer separation:</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={explodeValue}
            onChange={(e) => setExplodeValue(parseFloat(e.target.value))}
            style={{ width: '110px', accentColor: 'var(--accent-gold)' }}
          />
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleResetCamera}
            style={actionBtnStyle}
            title="Reset to default 3D camera angle"
          >
            ↺ Reset
          </button>
          <button
            onClick={handleInspectRetina}
            style={actionBtnStyle}
            title="Inspect inside the fundus & retina"
          >
            👁️ Inspect Retina
          </button>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            style={{ ...actionBtnStyle, background: autoRotate ? 'rgba(216, 184, 99, 0.3)' : 'rgba(255, 255, 255, 0.08)' }}
            title="Toggle 360° auto rotation"
          >
            {autoRotate ? '⏸ Stop' : '▶ Orbit'}
          </button>
        </div>
      </div>

      {/* Hovered Pin Tooltip */}
      {hoveredPin && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(20, 21, 26, 0.95)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--accent-gold)',
          padding: '0.6rem 1.1rem',
          borderRadius: '8px',
          color: '#fff',
          fontSize: '0.88rem',
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

      {/* Bottom Hint */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
        fontSize: '0.75rem',
        color: 'rgba(235, 244, 247, 0.55)',
        background: 'rgba(10, 12, 14, 0.55)',
        padding: '0.4rem 0.8rem',
        borderRadius: '6px',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        Clinical Ophthalmic WebGL Anatomical Model
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3D Beacon Hotspot Pins Construction
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

    const sphereGeo = new THREE.SphereGeometry(isSelected ? 0.65 : 0.45, 20, 20);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: isSelected ? 0xd4af37 : 0xffffff
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.userData = { structureId: structure.id };
    pinGroup.add(sphereMesh);

    const ringGeo = new THREE.RingGeometry(0.65, 0.95, 32);
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

const actionBtnStyle = {
  appearance: 'none',
  border: '1px solid rgba(255, 255, 255, 0.16)',
  color: '#eff5f7',
  background: 'rgba(255, 255, 255, 0.08)',
  borderRadius: '6px',
  padding: '0.35rem 0.65rem',
  fontSize: '0.74rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};
