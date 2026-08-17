import React, { useState } from 'react';
import { diagramData } from '../data/exhibitionData';

export default function DissectedEye() {
  const [activePart, setActivePart] = useState(null);

  return (
    <div className="section-container" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      
      {/* Left side: The Diagram */}
      <div className="glass-panel" style={{ flex: '1 1 400px', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Anatomical Map</h2>
        
        {/* Abstract representation of an eye */}
        <div style={{ position: 'relative', width: '300px', height: '200px', background: 'var(--bg-secondary)', borderRadius: '150px 150px 50% 50%', border: '2px solid var(--accent-gold)', overflow: 'hidden' }}>
          
          {/* Cornea */}
          <div 
            className="interactive-element"
            onClick={() => setActivePart('cornea')}
            style={{ position: 'absolute', left: '-10px', top: '50px', width: '40px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRight: '2px solid var(--text-primary)', borderRadius: '50%' }}
            title="Cornea"
          />
          
          {/* Lens */}
          <div 
            className="interactive-element"
            onClick={() => setActivePart('lens')}
            style={{ position: 'absolute', left: '40px', top: '65px', width: '30px', height: '70px', background: 'rgba(216, 184, 99, 0.4)', borderRadius: '50%' }}
            title="Crystalline Lens"
          />

          {/* Retina */}
          <div 
            className="interactive-element"
            onClick={() => setActivePart('retina')}
            style={{ position: 'absolute', right: '0', top: '0', width: '150px', height: '200px', borderRight: '8px solid var(--accent-crimson)', borderRadius: '50%', transform: 'translateX(20px)' }}
            title="Retina"
          />

          {/* Blind Spot */}
          <div 
            className="interactive-element"
            onClick={() => setActivePart('blindSpot')}
            style={{ position: 'absolute', right: '10px', top: '90px', width: '20px', height: '20px', background: '#000', borderRadius: '50%', border: '2px solid var(--accent-gold)' }}
            title="Blind Spot"
          />
        </div>
        
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', textAlign: 'center' }}>
          Click on the abstracted structures (Cornea, Lens, Retina, Blind Spot) to explore.
        </p>
      </div>

      {/* Right side: The Annotation */}
      <div className="glass-panel" style={{ flex: '1 1 400px', padding: '2rem' }}>
        {activePart ? (() => {
          const part = diagramData.find(d => d.id === activePart);
          return (
            <div style={{ animation: 'fadeIn 0.5s ease' }}>
              <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '2rem' }}>{part.name}</h2>
              <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: '4px solid var(--text-primary)' }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Medical Description</h4>
                <p>{part.medical}</p>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(158, 42, 43, 0.1)', borderRadius: '8px', borderLeft: '4px solid var(--accent-crimson)' }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Literary Resonance</h4>
                <p>{part.literary}</p>
              </div>
            </div>
          );
        })() : (
          <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <p>Select an anatomical structure to reveal its medical history and literary resonance.</p>
          </div>
        )}
      </div>
    </div>
  );
}
