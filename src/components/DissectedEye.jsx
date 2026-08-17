import React, { useState } from 'react';
import Eye3DCanvas from './Eye3DCanvas';
import AtlasInspector from './AtlasInspector';
import { anatomicalStructures, ocularLayers } from '../data/medicalAtlasData';

export default function DissectedEye() {
  const [activeStructureId, setActiveStructureId] = useState('cornea');
  const [viewMode, setViewMode] = useState('crossSection'); // 'composite' | 'crossSection'
  const [activeLayerFilter, setActiveLayerFilter] = useState('all');

  const activeStructure = anatomicalStructures.find(s => s.id === activeStructureId) || anatomicalStructures[0];

  const filteredStructures = anatomicalStructures.filter(s => 
    activeLayerFilter === 'all' || s.layerCategory === activeLayerFilter
  );

  return (
    <div className="section-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Section Header & Concept */}
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
              An interactive WebGL ocular model pooling anatomical datasets from the <em>American Academy of Ophthalmology</em>, <em>NIH Webvision</em>, and <em>Gray's Anatomy</em>. Each biological structure corresponds to an optical and poetic threshold in Dante’s cosmos and Heaney’s katabasis.
            </p>
          </div>

          {/* View Mode Switcher (Full Eye vs Sagittal Dissection) */}
          <div style={{
            display: 'flex',
            background: 'rgba(0,0,0,0.4)',
            padding: '0.35rem',
            borderRadius: '10px',
            border: '1px solid var(--border-glass)',
            gap: '0.3rem'
          }}>
            <button
              onClick={() => setViewMode('crossSection')}
              style={modeBtnStyle(viewMode === 'crossSection')}
              title="Sagittal cross-section revealing internal layers"
            >
              🔪 Sagittal Dissection
            </button>
            <button
              onClick={() => setViewMode('composite')}
              style={modeBtnStyle(viewMode === 'composite')}
              title="Full spherical ocular globe"
            >
              🌐 Full 3D Eye
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

        {/* Structure Quick-Select Carousel */}
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

      {/* Main Interactive Dual-Pane Viewport */}
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
          minHeight: '560px',
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
                WebGL 3D Anatomical Engine
              </span>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Mode: {viewMode === 'crossSection' ? 'Sagittal Cutaway (Dissection)' : 'Intact Ocular Globe'}
            </span>
          </div>

          <div style={{ flex: 1, position: 'relative' }}>
            <Eye3DCanvas
              activeStructureId={activeStructureId}
              onSelectStructure={(id) => setActiveStructureId(id)}
              viewMode={viewMode}
              activeLayerFilter={activeLayerFilter}
            />
          </div>
        </div>

        {/* Right Pane: Comprehensive Medical & Literary Inspector */}
        <div style={{ minHeight: '560px' }}>
          <AtlasInspector structure={activeStructure} />
        </div>
      </div>

    </div>
  );
}

function modeBtnStyle(isActive) {
  return {
    padding: '0.5rem 1rem',
    background: isActive ? 'var(--accent-crimson)' : 'transparent',
    border: 'none',
    borderRadius: '6px',
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
