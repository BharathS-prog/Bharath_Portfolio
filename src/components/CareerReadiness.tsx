import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ShieldCheck, Trophy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileInfo, certifications, achievementsList, internships } from '../data';
import { TiltCard3D } from './TiltCard3D';

export const CareerReadiness: React.FC = () => {
  const opportunities = [
    {
      title: "AI & ML Engineering Internships",
      desc: "Eager to contribute to model pipelines, LLM prompt engineering, computer vision workflows, and intelligent software systems."
    },
    {
      title: "Software & Web Development Roles",
      desc: "Ready to build robust RESTful APIs in Python (FastAPI/Flask) and interactive frontend interfaces with React and TypeScript."
    },
    {
      title: "Early-Stage Startup Collaboration",
      desc: "Excited to join forces with founders and product builders to iterate fast on technical prototypes and MVPs."
    }
  ];

  return (
    <section id="career" className="position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-heading-wrapper text-center text-md-start">
          <span className="section-label">// 06 &bull; Industry &amp; Recruiter Readiness</span>
          <h2 className="section-heading">Career Opportunities &amp; Verified Proof</h2>
          <p className="section-subheading">
            Grounded preparation for AI engineering internships, technical software roles, and ambitious startup collaborations.
          </p>
        </div>

        {/* Opportunity Readiness Banner with 3D Tilt */}
        <div className="row g-3 mb-4">
          <div className="col-lg-8">
            <TiltCard3D maxTilt={5}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="card-futuristic p-3.5 p-md-4 h-100 justify-content-between"
              >
                <div>
                  <span className="section-label mb-2">// Target Roles &amp; Availability</span>
                  <h3 className="h5 fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Looking for AI &amp; Software Engineering Internships
                  </h3>
                  <p style={{ fontSize: '0.94rem', lineHeight: '1.65' }}>
                    As a third-year AI and Data Science student with practical experience building computer vision 
                    tools, automated proctoring backends, and sign-language translators, I am actively seeking 
                    internship roles where I can deliver genuine value, write production-grade code, and learn from 
                    senior engineers.
                  </p>

                  <div className="row g-2 my-2">
                    {opportunities.map((opp, idx) => (
                      <div key={idx} className="col-md-4">
                        <div
                          className="p-2.5 rounded-3 h-100"
                          style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid var(--border-subtle)',
                          }}
                        >
                          <h4 className="h6 fw-bold mb-1" style={{ color: 'var(--accent-cyan-bright)', fontSize: '0.86rem' }}>
                            {opp.title}
                          </h4>
                          <p className="small mb-0" style={{ fontSize: '0.78rem', lineHeight: '1.45' }}>
                            {opp.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Links & Resume Download Bar */}
                <div className="pt-3 border-top d-flex flex-wrap align-items-center justify-content-between gap-2 mt-2" style={{ borderColor: 'var(--border-subtle) !important' }}>
                  <div className="d-flex flex-wrap gap-2">
                    <a
                      href={profileInfo.resumeUrl}
                      download="Bharath_S_Resume.pdf"
                      className="btn-futuristic btn-futuristic-primary"
                    >
                      <Download size={15} />
                      <span>Download Verified Resume</span>
                    </a>

                    <a
                      href={profileInfo.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-futuristic btn-futuristic-secondary"
                    >
                      <LinkedinIcon size={15} />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href={profileInfo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-futuristic btn-futuristic-secondary"
                    >
                      <GithubIcon size={15} />
                      <span>GitHub</span>
                    </a>
                  </div>

                  <span className="small text-muted font-monospace" style={{ fontSize: '0.74rem' }}>
                    Available for Remote &amp; On-Site Internships
                  </span>
                </div>
              </motion.div>
            </TiltCard3D>
          </div>

          {/* Real Work Experience & Milestones */}
          <div className="col-lg-4">
            <TiltCard3D maxTilt={6}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card-futuristic p-3.5 h-100 d-flex flex-column justify-content-between"
              >
                <div>
                  <span className="section-label mb-2">// Prior Internship</span>
                  <h4 className="h6 fw-bold mb-1" style={{ fontSize: '1rem' }}>{internships[0].role}</h4>
                  <div className="small fw-semibold mb-1" style={{ color: 'var(--accent-cyan-bright)', fontSize: '0.86rem' }}>
                    {internships[0].company}
                  </div>
                  <div className="font-monospace small text-muted mb-2" style={{ fontSize: '0.78rem' }}>
                    {internships[0].period}
                  </div>
                  <p className="small mb-0" style={{ lineHeight: '1.5', fontSize: '0.84rem' }}>
                    {internships[0].description}
                  </p>
                </div>

                <div className="mt-2.5 pt-2.5 border-top" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span className="section-label mb-1.5" style={{ fontSize: '0.68rem' }}>// Key Academic Milestones</span>
                  <div className="d-flex flex-column gap-1.5 mt-1">
                    {achievementsList.map((ach, idx) => (
                      <div key={idx} className="d-flex align-items-start gap-1.5">
                        <Trophy size={13} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-amber)' }} />
                        <div className="small" style={{ fontSize: '0.8rem' }}>
                          <span className="fw-semibold" style={{ color: 'var(--text-primary)' }}>{ach.title}: </span>
                          <span className="text-muted">{ach.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TiltCard3D>
          </div>
        </div>

        {/* Verified Technical Certifications Grid */}
        <div className="mt-2">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2.5">
            <div className="d-flex align-items-center gap-2">
              <ShieldCheck size={18} style={{ color: 'var(--accent-cyan)' }} />
              <h3 className="h6 fw-bold m-0" style={{ color: 'var(--text-primary)', fontSize: '0.98rem' }}>
                Verified Credentials &amp; Certifications
              </h3>
            </div>
            <span className="small text-muted font-monospace" style={{ fontSize: '0.74rem' }}>Official PDF / Drive Certificates Available</span>
          </div>

          <div className="row g-2.5">
            {certifications.map((cert, index) => (
              <div key={index} className="col-md-4">
                <TiltCard3D maxTilt={6}>
                  <div
                    className="card-futuristic p-3 h-100 d-flex flex-column justify-content-between"
                    style={{ background: 'rgba(12, 18, 34, 0.6)' }}
                  >
                    <div>
                      <div className="font-monospace text-uppercase small text-muted mb-1" style={{ fontSize: '0.7rem' }}>
                        {cert.provider}
                      </div>
                      <h4 className="h6 fw-bold mb-1.5" style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                        {cert.title}
                      </h4>
                      {cert.details && (
                        <p className="small text-secondary mb-2" style={{ lineHeight: '1.45', fontSize: '0.8rem' }}>
                          {cert.details}
                        </p>
                      )}
                    </div>

                    {cert.certificateUrls && cert.certificateUrls.length > 0 && (
                      <div className="d-flex flex-wrap gap-1.5 pt-2 border-top" style={{ borderColor: 'var(--border-subtle)' }}>
                        {cert.certificateUrls.map((file, fileIdx) => (
                          <a
                            key={fileIdx}
                            href={file.url}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-futuristic btn-futuristic-ghost"
                            style={{ padding: '3px 8px', fontSize: '0.74rem' }}
                          >
                            <FileText size={12} />
                            <span>{file.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </TiltCard3D>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerReadiness;
