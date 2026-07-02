import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, ShieldCheck, Download } from 'lucide-react';
import { internships, certifications } from '../data';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="position-relative">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Internship & Certifications</h2>
          </div>
        </div>

        <div className="row g-5">
          {/* Left Column - Internship */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className=""
            >
              <h3 className="h4 mb-4 d-flex align-items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <Briefcase size={22} style={{ color: 'var(--accent-light)' }} />
                <span>Professional Internship</span>
              </h3>

              {internships.map((intern, index) => (
                <div key={index} className="card-custom p-4">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
                    <div>
                      <h4 className="h5 fw-bold mb-1" style={{ color: 'var(--accent-light)' }}>
                        {intern.role}
                      </h4>
                      <div className="subtitle-shadow small fw-semibold">{intern.company}</div>
                    </div>
                    <span className="badge-custom m-0">{intern.period}</span>
                  </div>
                  <p className="text-secondary mb-0" style={{ fontSize: '1rem', textAlign: 'justify', lineHeight: '1.6' }}>
                    {intern.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Certifications */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="d-flex flex-column"
            >
              <h3 className="h4 mb-4 d-flex align-items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <Award size={22} style={{ color: 'var(--accent-light)' }} />
                <span>Certifications & Coursework</span>
              </h3>

              <div className="d-flex flex-column gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="card-custom p-4 d-flex gap-3 align-items-start">
                    <div className="p-2 bg-dark bg-opacity-25 rounded border border-light border-opacity-10">
                      <ShieldCheck size={20} style={{ color: 'var(--accent-light)' }} />
                    </div>
                    <div>
                      <h4 className="h6 fw-bold mb-1 text-teal" style={{ color: 'var(--accent-light)', fontSize: '1.05rem' }}>
                        {cert.title}
                      </h4>
                      <div className="subtitle-shadow small fw-semibold mb-2">{cert.provider}</div>
                      {cert.details && (
                        <p className="text-secondary small mb-2" style={{ textAlign: 'justify' }}>
                          {cert.details}
                        </p>
                      )}
                      {cert.certificateUrls && cert.certificateUrls.length > 0 && (
                        <div className="d-flex flex-wrap gap-2 mt-2">
                          {cert.certificateUrls.map((file, fileIdx) => (
                            <a
                              key={fileIdx}
                              href={file.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline-accent d-inline-flex align-items-center gap-1"
                              style={{ fontSize: '0.8rem', padding: '4px 12px' }}
                            >
                              <Download size={14} />
                              <span>{file.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Certifications;

