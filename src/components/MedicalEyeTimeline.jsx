import React from 'react';
import { timelineData } from '../data/exhibitionData';

export default function MedicalEyeTimeline() {
  return (
    <div className="section-container glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '1rem' }}>The Medical Eye Timeline</h2>
      <div className="timeline" style={{ position: 'relative', borderLeft: '2px solid var(--accent-gold)', paddingLeft: '2rem', marginLeft: '1rem' }}>
        {timelineData.map((item, index) => (
          <div key={item.id} className="timeline-item interactive-card" style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-2.65rem', top: '1.5rem', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent-crimson)', border: '3px solid var(--bg-primary)' }}></div>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>{item.date}</span>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{item.title}</h3>
            <p style={{ marginBottom: '1rem' }}><strong>Medical History:</strong> {item.description}</p>
            <p style={{ color: '#d0d0d0' }}><em>Literary Connection:</em> {item.literaryConnection}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
