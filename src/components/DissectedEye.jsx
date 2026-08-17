import React, { useState } from 'react';
import Eye3DCanvas from './Eye3DCanvas';
import AtlasInspector from './AtlasInspector';
import { anatomicalStructures, ocularLayers } from '../data/medicalAtlasData';

export default function DissectedEye() {
  const [activeStructureId, setActiveStructureId] = useState('cornea');
  const [view3DMode, setView3DMode] = useState('crossSection'); // 'crossSection' | 'composite'
  const [activeLayerFilter, setActiveLayerFilter] = useState('all');

  const activeStructure = anatomicalStructures.find(s => s.id === activeStructureId) || anatomicalStructures[0];

  const filteredStructures = anatomicalStructures.filter(s => 
    activeLayerFilter === 'all' || s.layerCategory === activeLayerFilter
  );

  return (
    <div className="section-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Section Header & 3D Controls */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Interactive 3D Ocular Deep-Map
            </span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--text-primary)', marginTop: '0.25rem' }}>
              The Dissected Eye: 3D Anatomical Atlas
            </h2>
            <p style={{ maxWidth: '850px', fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.6' }}>
              Interactive 3D WebGL model modeled after clinical ophthalmic anatomy (LASIK, AAO, NIH Webvision). Rotate in 360°, inspect internal structures in sagittal cutaway dissection, and explore the convergence of medical ocular anatomy and Dante/Heaney poetics.
            </p>
          </div>

          {/* 3D Anatomy Mode Switcher */}
          <div style={{
            display: 'flex',
            background: 'rgba(0,0,0,0.5)',
            padding: '0.4rem',
            borderRadius: '10px',
            border: '1px solid var(--border-glass)',
            gap: '0.4rem'
          }}>
            <button
              onClick={() => setView3DMode('crossSection')}
              style={modeBtnStyle(view3DMode === 'crossSection')}
              title="Sagittal cross-section revealing internal anatomy"
            >
              🔪 Sagittal Dissection (Cutaway)
            </button>
            <button
              onClick={() => setView3DMode('composite')}
              style={modeBtnStyle(view3DMode === 'composite')}
              title="Full intact spherical globe"
            >
              👁️ Intact 3D Globe
            </button>
          </div>
        </div>

        {/* Anatomical Layer Filter Tabs */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginTop: '1.5rem',
          flexWrap: 'wrap',
          borderTop: '1px solid var(--border-glass)',
          paddingTop: '1.25rem'
        }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', alignSelf: 'center', marginRight: '0.5rem' }}>
            Filter Tunics:
          </span>
          {ocularLayers.map(layer => (
            <button
              key={layer.id}
              onClick={() => setActiveLayerFilter(layer.id)}
              style={layerChipStyle(activeLayerFilter === layer.id)}
            >
              {layer.label}
            </button>
          ))}
        </div>

        {/* Structure Quick-Select Ribbon */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginTop: '1rem',
          overflowX: 'auto',
          paddingBottom: '0.4rem'
        }}>
          {filteredStructures.map(s => {
            const isSelected = s.id === activeStructureId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStructureId(s.id)}
                style={{
                  padding: '0.4rem 0.85rem',
                  background: isSelected ? 'rgba(216, 184, 99, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${isSelected ? 'var(--accent-gold)' : 'var(--border-glass)'}`,
                  borderRadius: '20px',
                  color: isSelected ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                {isSelected ? '● ' : ''}{s.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Dual-Pane Viewport */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
        gap: '1.5rem',
        alignItems: 'stretch'
      }}>
        {/* Left Pane: 3D Three.js Canvas */}
        <div className="glass-panel" style={{
          position: 'relative',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '600px',
          border: '1px solid var(--border-glass)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderBottom: '1px solid var(--border-glass)',
            marginBottom: '0.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px #22c55e'
              }} />
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', letterSpacing: '0.5px' }}>
                Interactive 3D WebGL Model
              </span>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Mode: {view3DMode === 'crossSection' ? 'Sagittal Cutaway Dissection' : 'Intact Ocular Globe'}
            </span>
          </div>

          <div style={{ flex: 1, position: 'relative', minHeight: '520px' }}>
            <Eye3DCanvas
              activeStructureId={activeStructureId}
              onSelectStructure={(id) => setActiveStructureId(id)}
              viewMode={view3DMode}
              activeLayerFilter={activeLayerFilter}
            />
          </div>
        </div>

        {/* Right Pane: Comprehensive Medical & Literary Inspector */}
        <div style={{ minHeight: '600px' }}>
          <AtlasInspector structure={activeStructure} />
        </div>
      </div>

    </div>
  );
}

function modeBtnStyle(isActive) {
  return {
    padding: '0.55rem 1.1rem',
    background: isActive ? 'var(--accent-crimson)' : 'transparent',
    border: 'none',
    borderRadius: '7px',
    color: isActive ? '#fff' : 'var(--text-secondary)',
    fontSize: '0.85rem',
    fontWeight: isActive ? '600' : '400',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  };
}

function layerChipStyle(isActive) {
  return {
    padding: '0.35rem 0.8rem',
    background: isActive ? 'rgba(216, 184, 99, 0.25)' : 'rgba(255, 255, 255, 0.04)',
    border: `1px solid ${isActive ? 'var(--accent-gold)' : 'var(--border-glass)'}`,
    borderRadius: '6px',
    color: isActive ? '#fff' : 'var(--text-secondary)',
    fontSize: '0.8rem',
    fontWeight: isActive ? '600' : '400',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  };
}
