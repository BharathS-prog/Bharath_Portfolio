import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Award } from 'lucide-react';
import { educationList } from '../data';

export const Education: React.FC = () => {
  return (
    <section id="education" className="position-relative">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Education</h2>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline">
              {educationList.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="card-custom p-4 ms-3"
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-3">
                      <div>
                        <h3 className="h5 fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                          {edu.degree}
                        </h3>
                        <div className="d-flex align-items-center gap-2 subtitle-shadow" style={{ fontSize: '0.95rem' }}>
                          <BookOpen size={15} style={{ color: 'var(--accent-light)' }} />
                          <span>{edu.institution}</span>
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-end gap-1">
                        <span className="badge-custom m-0 d-flex align-items-center gap-1">
                          <Calendar size={13} />
                          <span>{edu.period}</span>
                        </span>
                        <span className="small fw-semibold mt-1" style={{ color: 'var(--accent-light)' }}>
                          <Award size={14} className="me-1" />
                          {edu.score}
                        </span>
                      </div>
                    </div>
                    {edu.details && (
                      <p className="text-secondary mb-0" style={{ fontSize: '1rem', textAlign: 'justify' }}>
                        {edu.details}
                      </p>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
