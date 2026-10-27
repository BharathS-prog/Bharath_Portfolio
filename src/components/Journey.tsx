import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2 } from 'lucide-react';
import { roadmapItems } from '../data';

export const Journey: React.FC = () => {
  const getPhaseClass = (phase: string) => {
    switch (phase) {
      case 'NOW':
        return 'phase-now';
      case 'NEXT':
        return 'phase-next';
      default:
        return 'phase-future';
    }
  };

  return (
    <section id="journey" className="position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-heading-wrapper text-center text-md-start">
          <span className="section-label">// 05 &bull; Trajectory &amp; Evolution</span>
          <h2 className="section-heading">Learning Roadmap &amp; Journey</h2>
          <p className="section-subheading">
            A transparent view of where I am currently focused, where I am heading next, and my long-term aspirations as an AI engineer and founder.
          </p>
        </div>

        {/* Roadmap Cards Grid */}
        <div className="row g-4">
          {roadmapItems.map((item, index) => (
            <div key={item.phase} className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="roadmap-card h-100 d-flex flex-column justify-content-between"
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className={`phase-pill ${getPhaseClass(item.phase)}`}>
                      {item.phase}
                    </span>
                    <span className="font-monospace text-muted small" style={{ fontSize: '0.75rem' }}>
                      Step 0{index + 1}
                    </span>
                  </div>

                  <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>

                  <p className="small mb-4" style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>
                </div>

                <div
                  className="p-3 rounded-3 mt-auto"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <Compass size={14} style={{ color: 'var(--accent-cyan)' }} />
                    <span
                      className="font-monospace text-uppercase"
                      style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent-cyan)' }}
                    >
                      Active Milestones
                    </span>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
                    {item.focusPoints.map((point, pIdx) => (
                      <li key={pIdx} className="d-flex align-items-start gap-2 small">
                        <CheckCircle2 size={13} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-emerald)' }} />
                        <span style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
