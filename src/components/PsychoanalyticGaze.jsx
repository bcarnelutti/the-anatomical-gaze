import React from 'react';
import { psychoanalyticData } from '../data/exhibitionData';

export default function PsychoanalyticGaze() {
  return (
    <div className="section-container" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="glass-panel interactive-card" style={{ maxWidth: '800px', padding: '3rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--bg-glass), var(--accent-gold), var(--bg-glass))' }} />
        
        <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--accent-gold)' }}>
          {psychoanalyticData.title}
        </h2>
        
        <div style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8', 
          color: 'var(--text-primary)',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            The intellectual history traces a path from the physics of light to the distortion of desire. 
          </p>
          <p style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', borderLeft: '4px solid var(--accent-crimson)' }}>
            The discovery of the retinal <strong>blind spot</strong> in the 1660s prefigures Lacan's concept: a point in the visual field that cannot be seen, but which fundamentally structures perception.
          </p>
          <p>
            The medical gaze, which once sought objective truth in the dissected corpse, evolves into the psychoanalytic gaze—where the viewing subject realizes they are, in turn, being <em>looked at</em> by the object of their abjection.
          </p>
        </div>
        
      </div>
    </div>
  );
}
