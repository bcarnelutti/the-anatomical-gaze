import React, { useState } from 'react';
import { anatomicalStructures } from '../data/medicalAtlasData';

const diagramHotspots = [
  { id: 'cornea', label: 'Cornea', x: 25.8, y: 35.5 },
  { id: 'iris', label: 'Iris & Pupil', x: 31.2, y: 53.5 },
  { id: 'lens', label: 'Crystalline Lens', x: 35.5, y: 49.0 },
  { id: 'ciliaryBody', label: 'Ciliary Body & Zonules', x: 34.5, y: 65.0 },
  { id: 'vitreous', label: 'Vitreous Body', x: 52.0, y: 50.0 },
  { id: 'sclera', label: 'Sclera', x: 61.5, y: 17.5 },
  { id: 'choroid', label: 'Choroid', x: 63.5, y: 22.5 },
  { id: 'retina', label: 'Retina', x: 65.8, y: 27.5 },
  { id: 'fovea', label: 'Macula & Fovea Centralis', x: 67.2, y: 49.5 },
  { id: 'opticDisc', label: 'Optic Disc (Blind Spot)', x: 64.5, y: 61.5 },
  { id: 'opticNerve', label: 'Optic Nerve (CN II)', x: 75.0, y: 69.0 }
];

export default function MedicalDiagramView({ activeStructureId, onSelectStructure }) {
  const [hoveredHotspot, setHoveredHotspot] = useState(null);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: '520px',
      background: '#0a0d14',
      borderRadius: '12px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--border-glass)'
    }}>
      {/* Base Medical Illustration Image */}
      <img
        src={`${import.meta.env.BASE_URL}eye_anatomy_diagram.jpg`}
        alt="Clinical Sagittal Eye Anatomy Diagram"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block'
        }}
      />

      {/* Interactive Hotspot Overlay Pins */}
      {diagramHotspots.map((spot) => {
        const isSelected = spot.id === activeStructureId;
        const isHovered = spot.id === hoveredHotspot;

        return (
          <div
            key={spot.id}
            onClick={() => onSelectStructure(spot.id)}
            onMouseEnter={() => setHoveredHotspot(spot.id)}
            onMouseLeave={() => setHoveredHotspot(null)}
            style={{
              position: 'absolute',
              left: `${spot.x}%`,
              top: `${spot.y}%`,
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            {/* Beacon Pulse Ring */}
            <div style={{
              position: 'relative',
              width: isSelected ? '26px' : '20px',
              height: isSelected ? '26px' : '20px',
              borderRadius: '50%',
              background: isSelected 
                ? 'radial-gradient(circle, var(--accent-gold) 0%, rgba(216, 184, 99, 0.4) 70%)' 
                : 'radial-gradient(circle, #38bdf8 0%, rgba(56, 189, 248, 0.3) 70%)',
              boxShadow: isSelected 
                ? '0 0 16px var(--accent-gold), 0 0 30px rgba(216, 184, 99, 0.6)' 
                : '0 0 10px rgba(56, 189, 248, 0.6)',
              border: `2px solid ${isSelected ? '#fff' : 'rgba(255, 255, 255, 0.9)'}`,
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: isSelected ? '8px' : '6px',
                height: isSelected ? '8px' : '6px',
                borderRadius: '50%',
                background: '#fff'
              }} />
            </div>

            {/* Tooltip on Hover / Selection */}
            {(isHovered || isSelected) && (
              <div style={{
                position: 'absolute',
                bottom: '120%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(15, 17, 23, 0.95)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isSelected ? 'var(--accent-gold)' : 'var(--border-glass)'}`,
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                color: isSelected ? 'var(--accent-gold)' : '#fff',
                fontSize: '0.78rem',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(0,0,0,0.8)',
                pointerEvents: 'none',
                zIndex: 20
              }}>
                {spot.label}
              </div>
            )}
          </div>
        );
      })}

      {/* Diagram Subtitle HUD */}
      <div style={{
        position: 'absolute',
        bottom: '0.75rem',
        left: '0.75rem',
        background: 'rgba(10, 10, 12, 0.8)',
        backdropFilter: 'blur(8px)',
        padding: '0.35rem 0.75rem',
        borderRadius: '6px',
        border: '1px solid var(--border-glass)',
        fontSize: '0.78rem',
        color: 'var(--text-secondary)'
      }}>
        ✨ Clinical Sagittal Anatomy (Exeter Eye Standard) • Click any glowing pin
      </div>
    </div>
  );
}
