import React, { useState } from 'react';
import './index.css';
import MedicalEyeTimeline from './components/MedicalEyeTimeline';
import DissectedEye from './components/DissectedEye';
import AbjectBody from './components/AbjectBody';

function App() {
  const [activeSection, setActiveSection] = useState('timeline');

  const sections = {
    timeline: <MedicalEyeTimeline />,
    diagram: <DissectedEye />,
    gallery: <AbjectBody />
  };

  return (
    <div className="app-container">
      <header className="glass-panel app-header" style={{ margin: '2rem', padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>The Anatomical Gaze</h1>
        <p className="subtitle" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Medical Optics, Ocular Anatomy, and the Literary Eye from Dante to Heaney</p>
        <nav className="main-nav" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            className={`nav-btn interactive-card ${activeSection === 'timeline' ? 'active' : ''}`}
            onClick={() => setActiveSection('timeline')}
            style={navBtnStyle(activeSection === 'timeline')}
          >
            The Medical Eye
          </button>
          <button 
            className={`nav-btn interactive-card ${activeSection === 'diagram' ? 'active' : ''}`}
            onClick={() => setActiveSection('diagram')}
            style={navBtnStyle(activeSection === 'diagram')}
          >
            The Dissected Eye
          </button>
          <button 
            className={`nav-btn interactive-card ${activeSection === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveSection('gallery')}
            style={navBtnStyle(activeSection === 'gallery')}
          >
            The Abject Body
          </button>
        </nav>
      </header>

      <main className="content-area" style={{ margin: '0 2rem 2rem 2rem', minHeight: '60vh' }}>
        {sections[activeSection]}
      </main>
    </div>
  );
}

function navBtnStyle(isActive) {
  return {
    padding: '0.75rem 1.5rem',
    background: isActive ? 'var(--accent-crimson)' : 'var(--bg-glass)',
    border: `1px solid ${isActive ? 'var(--accent-crimson)' : 'var(--border-glass)'}`,
    color: '#fff',
    borderRadius: '8px',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'var(--transition-fast)'
  };
}

export default App;
