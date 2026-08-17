import React, { useState } from 'react';

export default function AtlasInspector({ structure }) {
  const [activeTab, setActiveTab] = useState('medical'); // 'medical' | 'sources' | 'history' | 'literary'

  if (!structure) {
    return (
      <div className="glass-panel" style={{
        height: '100%',
        minHeight: '450px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem',
        textAlign: 'center',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.8 }}>👁️</div>
        <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>
          3D Interactive Ocular Dissection
        </h3>
        <p style={{ maxWidth: '380px', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Click on any glowing anatomical pin in the 3D viewport or select a structure from the directory to inspect its medical anatomy, clinical citations, and literary resonance.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-panel" style={{
      height: '100%',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      maxHeight: '750px',
      animation: 'fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      {/* Structure Header */}
      <div style={{ borderBottom: '1px solid var(--border-glass)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <span style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            color: 'var(--accent-crimson)',
            fontWeight: '600',
            background: 'rgba(158, 42, 43, 0.15)',
            padding: '0.2rem 0.6rem',
            borderRadius: '4px',
            border: '1px solid rgba(158, 42, 43, 0.3)'
          }}>
            {structure.layer}
          </span>
          <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {structure.latin}
          </span>
        </div>

        <h2 style={{ fontSize: '2.2rem', color: 'var(--accent-gold)', margin: '0.2rem 0 0.5rem 0' }}>
          {structure.name}
        </h2>

        {/* Optical & Physical Metrics Pills */}
        {structure.opticalMetrics && (
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
            {Object.entries(structure.opticalMetrics).map(([key, val]) => (
              <span key={key} style={{
                fontSize: '0.8rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-glass)',
                padding: '0.25rem 0.6rem',
                borderRadius: '6px',
                color: 'var(--text-primary)'
              }}>
                <strong style={{ color: 'var(--accent-gold)', textTransform: 'capitalize' }}>
                  {key.replace(/([A-Z])/g, ' $1')}:
                </strong> {val}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Tabs Navigation */}
      <div style={{
        display: 'flex',
        gap: '0.4rem',
        background: 'rgba(0, 0, 0, 0.3)',
        padding: '0.3rem',
        borderRadius: '8px',
        marginBottom: '1.5rem',
        border: '1px solid var(--border-glass)',
        overflowX: 'auto'
      }}>
        <button
          onClick={() => setActiveTab('medical')}
          style={tabButtonStyle(activeTab === 'medical')}
        >
          🩺 Anatomy & Pathology
        </button>
        <button
          onClick={() => setActiveTab('sources')}
          style={tabButtonStyle(activeTab === 'sources')}
        >
          📚 Medical Sources ({structure.medicalSources?.length || 0})
        </button>
        <button
          onClick={() => setActiveTab('history')}
          style={tabButtonStyle(activeTab === 'history')}
        >
          📜 Historical Treatise
        </button>
        <button
          onClick={() => setActiveTab('literary')}
          style={tabButtonStyle(activeTab === 'literary')}
        >
          🖋️ Literary Analysis
        </button>
      </div>

      {/* Tab Content Panels */}
      <div style={{ flex: 1 }}>
        {/* 1. MEDICAL ANATOMY & PATHOLOGY */}
        {activeTab === 'medical' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{
              padding: '1.25rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '8px',
              borderLeft: '4px solid var(--accent-gold)'
            }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
                Histological Organization & Physiology
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {structure.medicalDescription}
              </p>
            </div>

            {structure.clinicalPathology && (
              <div style={{
                padding: '1.25rem',
                background: 'rgba(158, 42, 43, 0.08)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--accent-crimson)',
                border: '1px solid rgba(158, 42, 43, 0.2)'
              }}>
                <h4 style={{ color: '#f87171', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
                  Clinical Pathologies & Diagnostics
                </h4>
                <p style={{ fontSize: '0.92rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                  {structure.clinicalPathology}
                </p>
              </div>
            )}
          </div>
        )}

        {/* 2. REPUTABLE MEDICAL SOURCES */}
        {activeTab === 'sources' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
              Data and anatomical parameters pooled from peer-reviewed ophthalmic authorities and institutional curricula:
            </p>
            {structure.medicalSources?.map((src, i) => (
              <div key={i} className="interactive-card" style={{
                padding: '1rem 1.25rem',
                background: 'rgba(20, 21, 26, 0.8)',
                border: '1px solid var(--border-glass)',
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: '600' }}>
                    {src.authority}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#6ee7b7' }}>✓ Verified Peer-Reviewed</span>
                </div>
                <h5 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: '500' }}>
                  {src.title || src.citation}
                </h5>
                {src.url && (
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    View Authority Catalog ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 3. HISTORICAL OPTICAL TREATISE */}
        {activeTab === 'history' && structure.historicalTreatise && (
          <div style={{
            padding: '1.5rem',
            background: 'rgba(216, 184, 99, 0.05)',
            border: '1px solid rgba(216, 184, 99, 0.2)',
            borderRadius: '10px'
          }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-gold)' }}>
              Historical Anatomical Root
            </span>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: '0.4rem 0' }}>
              {structure.historicalTreatise.author}
            </h3>
            <p style={{ fontStyle: 'italic', color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '0.95rem' }}>
              {structure.historicalTreatise.work}
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
              {structure.historicalTreatise.note}
            </p>
          </div>
        )}

        {/* 4. LITERARY ANALYSIS (DANTE & HEANEY) */}
        {activeTab === 'literary' && structure.literaryAnalysis && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{
              padding: '1.25rem',
              background: 'rgba(158, 42, 43, 0.1)',
              borderLeft: '4px solid var(--accent-crimson)',
              border: '1px solid rgba(158, 42, 43, 0.25)',
              borderRadius: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--accent-crimson)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                  {structure.literaryAnalysis.figure}
                </span>
                <span style={{ fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {structure.literaryAnalysis.text}
                </span>
              </div>
              <blockquote style={{
                fontFamily: 'Playfair Display',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                lineHeight: '1.6',
                margin: '0.75rem 0'
              }}>
                "{structure.literaryAnalysis.quote}"
              </blockquote>
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-glass)',
              borderRadius: '8px'
            }}>
              <h5 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Critical Commentary
              </h5>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {structure.literaryAnalysis.commentary}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function tabButtonStyle(isActive) {
  return {
    flex: '1 1 auto',
    padding: '0.55rem 0.8rem',
    background: isActive ? 'var(--accent-crimson)' : 'transparent',
    border: 'none',
    borderRadius: '6px',
    color: isActive ? '#fff' : 'var(--text-secondary)',
    fontSize: '0.82rem',
    fontWeight: isActive ? '600' : '400',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease'
  };
}
