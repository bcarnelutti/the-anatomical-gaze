import React, { useState } from 'react';
import Eye3DCanvas from './Eye3DCanvas';
import MedicalDiagramView from './MedicalDiagramView';
import AtlasInspector from './AtlasInspector';
import { anatomicalStructures, ocularLayers } from '../data/medicalAtlasData';

export default function DissectedEye() {
  const [activeStructureId, setActiveStructureId] = useState('cornea');
  const [displayMode, setDisplayMode] = useState('diagram'); // 'diagram' | '3d'
  const [view3DMode, setView3DMode] = useState('crossSection'); // 'crossSection' | 'composite'
  const [activeLayerFilter, setActiveLayerFilter] = useState('all');

  const activeStructure = anatomicalStructures.find(s => s.id === activeStructureId) || anatomicalStructures[0];

  const filteredStructures = anatomicalStructures.filter(s => 
    activeLayerFilter === 'all' || s.layerCategory === activeLayerFilter
  );

  return (
    <div className="section-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Section Header & View Switchers */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
              Interactive Ocular Atlas & Deep-Map
            </span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--text-primary)', marginTop: '0.25rem' }}>
              The Dissected Eye: Anatomical Atlas
            </h2>
            <p style={{ maxWidth: '850px', fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.6' }}>
              Clinical anatomical cross-section based on ophthalmic standards (Exeter Eye, AAO, NIH Webvision) and paired with an interactive 3D WebGL engine. Each biological structure corresponds to an optical and poetic threshold in Dante’s cosmos and Heaney’s katabasis.
            </p>
          </div>

          {/* Primary Display Mode Switcher (Clinical Illustrated Diagram vs 3D WebGL Model) */}
          <div style={{
            display: 'flex',
            background: 'rgba(0,0,0,0.5)',
            padding: '0.4rem',
            borderRadius: '10px',
            border: '1px solid var(--accent-gold)',
            gap: '0.4rem'
          }}>
            <button
              onClick={() => setDisplayMode('diagram')}
              style={primaryToggleBtnStyle(displayMode === 'diagram')}
              title="Clinical sagittal cross-section illustration"
            >
              📋 Clinical Anatomy Diagram
            </button>
            <button
              onClick={() => setDisplayMode('3d')}
              style={primaryToggleBtnStyle(displayMode === '3d')}
              title="Interactive 3D WebGL anatomical model"
            >
              🌐 3D WebGL Globe
            </button>
          </div>
        </div>

        {/* 3D Secondary Controls (Only visible when 3D mode is active) */}
        {displayMode === '3d' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            marginTop: '1.25rem',
            paddingTop: '1rem',
            borderTop: '1px dashed var(--border-glass)'
          }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--accent-gold)' }}>
              3D Dissection View:
            </span>
            <button
              onClick={() => setView3DMode('crossSection')}
              style={subModeBtnStyle(view3DMode === 'crossSection')}
            >
              🔪 Sagittal Dissection (Cutaway)
            </button>
            <button
              onClick={() => setView3DMode('composite')}
              style={subModeBtnStyle(view3DMode === 'composite')}
            >
              👁️ Intact 3D Globe
            </button>
          </div>
        )}

        {/* Anatomical Layer Filter Tabs */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginTop: '1.25rem',
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
        {/* Left Pane: Visual Engine (Clinical Diagram or 3D WebGL) */}
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
                {displayMode === 'diagram' ? 'Clinical Ophthalmic Illustration' : 'WebGL 3D Interactive Model'}
              </span>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              {displayMode === 'diagram' ? 'Exeter Eye Clinical Standard' : (view3DMode === 'crossSection' ? 'Sagittal Cutaway' : 'Intact Globe')}
            </span>
          </div>

          <div style={{ flex: 1, position: 'relative', minHeight: '500px' }}>
            {displayMode === 'diagram' ? (
              <MedicalDiagramView
                activeStructureId={activeStructureId}
                onSelectStructure={(id) => setActiveStructureId(id)}
              />
            ) : (
              <Eye3DCanvas
                activeStructureId={activeStructureId}
                onSelectStructure={(id) => setActiveStructureId(id)}
                viewMode={view3DMode}
                activeLayerFilter={activeLayerFilter}
              />
            )}
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

function primaryToggleBtnStyle(isActive) {
  return {
    padding: '0.55rem 1.1rem',
    background: isActive ? 'var(--accent-crimson)' : 'transparent',
    border: 'none',
    borderRadius: '7px',
    color: isActive ? '#fff' : 'var(--text-secondary)',
    fontSize: '0.88rem',
    fontWeight: isActive ? '600' : '400',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  };
}

function subModeBtnStyle(isActive) {
  return {
    padding: '0.35rem 0.75rem',
    background: isActive ? 'rgba(216, 184, 99, 0.25)' : 'rgba(255, 255, 255, 0.05)',
    border: `1px solid ${isActive ? 'var(--accent-gold)' : 'var(--border-glass)'}`,
    borderRadius: '5px',
    color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)',
    fontSize: '0.78rem',
    fontWeight: isActive ? '600' : '400',
    cursor: 'pointer'
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
