import React from 'react';
import { galleryData } from '../data/exhibitionData';

export default function AbjectBody() {
  return (
    <div className="section-container glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '1rem' }}>The Medical Gaze and the Abject Body</h2>
      <p style={{ marginBottom: '2rem', maxWidth: '800px', fontSize: '1.1rem' }}>
        Explore how the "repulsive object" of the corpse, viewed through a medical lens, becomes the site of both poetic reflection and existential disintegration.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {galleryData.map(item => (
          <div key={item.id} className="interactive-card glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ 
              height: '200px', 
              background: 'var(--bg-primary)', 
              borderRadius: '8px', 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
              overflow: 'hidden'
            }}>
              {item.image ? (
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                `[Image Placeholder: ${item.title}]`
              )}
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-crimson)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
              {item.type}
            </span>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>{item.title}</h3>
            <p style={{ fontSize: '0.95rem', flexGrow: 1 }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
