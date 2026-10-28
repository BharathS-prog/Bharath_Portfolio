import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2 } from 'lucide-react';
import { roadmapItems } from '../data';
import { TiltCard3D } from './TiltCard3D';

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

        {/* Roadmap Cards Grid with 3D Tilt */}
        <div className="row g-3">
          {roadmapItems.map((item, index) => (
            <div key={item.phase} className="col-lg-4">
              <TiltCard3D maxTilt={7}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="roadmap-card h-100 d-flex flex-column justify-content-between p-3.5"
                >
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-1.5">
                      <span className={`phase-pill ${getPhaseClass(item.phase)}`}>
                        {item.phase}
                      </span>
                      <span className="font-monospace text-muted small" style={{ fontSize: '0.72rem' }}>
                        Step 0{index + 1}
                      </span>
                    </div>

                    <h3 className="h6 fw-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>
                      {item.title}
                    </h3>

                    <p className="small mb-3" style={{ lineHeight: '1.55', color: 'var(--text-secondary)', fontSize: '0.86rem' }}>
                      {item.description}
                    </p>
                  </div>

                  <div
                    className="p-2.5 rounded-3 mt-auto"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div className="d-flex align-items-center gap-1.5 mb-1.5">
                      <Compass size={13} style={{ color: 'var(--accent-cyan)' }} />
                      <span
                        className="font-monospace text-uppercase"
                        style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--accent-cyan)' }}
                      >
                        Active Milestones
                      </span>
                    </div>
                    <ul className="list-unstyled d-flex flex-column gap-1.5 m-0 p-0">
                      {item.focusPoints.map((point, pIdx) => (
                        <li key={pIdx} className="d-flex align-items-start gap-1.5 small">
                          <CheckCircle2 size={12} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-emerald)' }} />
                          <span style={{ color: 'var(--text-secondary)', lineHeight: '1.45', fontSize: '0.82rem' }}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </TiltCard3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
