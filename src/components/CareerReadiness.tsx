import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ShieldCheck, Trophy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileInfo, certifications, achievementsList, internships } from '../data';

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

        {/* Opportunity Readiness Banner */}
        <div className="row g-4 mb-5">
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="card-futuristic p-4 p-md-5 h-100 justify-content-between"
            >
              <div>
                <span className="section-label mb-3">// Target Roles &amp; Availability</span>
                <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Looking for AI &amp; Software Engineering Internships
                </h3>
                <p style={{ fontSize: '1.02rem', lineHeight: '1.75' }}>
                  As a third-year AI and Data Science student with practical experience building computer vision 
                  tools, automated proctoring backends, and sign-language translators, I am actively seeking 
                  internship roles where I can deliver genuine value, write production-grade code, and learn from 
                  senior engineers.
                </p>

                <div className="row g-3 my-3">
                  {opportunities.map((opp, idx) => (
                    <div key={idx} className="col-md-4">
                      <div
                        className="p-3 rounded-3 h-100"
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        <h4 className="h6 fw-bold mb-1" style={{ color: 'var(--accent-cyan-bright)', fontSize: '0.9rem' }}>
                          {opp.title}
                        </h4>
                        <p className="small mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.5' }}>
                          {opp.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Links & Resume Download Bar */}
              <div className="pt-4 border-top d-flex flex-wrap align-items-center justify-content-between gap-3" style={{ borderColor: 'var(--border-subtle) !important' }}>
                <div className="d-flex flex-wrap gap-2">
                  <a
                    href={profileInfo.resumeUrl}
                    download="Bharath_S_Resume.pdf"
                    className="btn-futuristic btn-futuristic-primary"
                  >
                    <Download size={16} />
                    <span>Download Verified Resume</span>
                  </a>

                  <a
                    href={profileInfo.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-futuristic btn-futuristic-secondary"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={profileInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-futuristic btn-futuristic-secondary"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                </div>

                <span className="small text-muted font-monospace" style={{ fontSize: '0.78rem' }}>
                  Available for Remote &amp; On-Site Internships
                </span>
              </div>
            </motion.div>
          </div>

          {/* Real Work Experience & Milestones */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="card-futuristic p-4 h-100 d-flex flex-column justify-content-between"
            >
              <div>
                <span className="section-label mb-3">// Prior Internship</span>
                <h4 className="h5 fw-bold mb-1">{internships[0].role}</h4>
                <div className="small fw-semibold mb-1" style={{ color: 'var(--accent-cyan-bright)' }}>
                  {internships[0].company}
                </div>
                <div className="font-monospace small text-muted mb-3">
                  {internships[0].period}
                </div>
                <p className="small" style={{ lineHeight: '1.6' }}>
                  {internships[0].description}
                </p>
              </div>

              <div className="mt-3 pt-3 border-top" style={{ borderColor: 'var(--border-subtle)' }}>
                <span className="section-label mb-2">// Key Academic Milestones</span>
                <div className="d-flex flex-column gap-2 mt-2">
                  {achievementsList.map((ach, idx) => (
                    <div key={idx} className="d-flex align-items-start gap-2">
                      <Trophy size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-amber)' }} />
                      <div className="small">
                        <span className="fw-semibold text-primary" style={{ color: 'var(--text-primary)' }}>{ach.title}: </span>
                        <span className="text-muted">{ach.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Verified Technical Certifications Grid */}
        <div className="mt-4">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
            <div className="d-flex align-items-center gap-2">
              <ShieldCheck size={20} style={{ color: 'var(--accent-cyan)' }} />
              <h3 className="h5 fw-bold m-0" style={{ color: 'var(--text-primary)' }}>
                Verified Credentials &amp; Certifications
              </h3>
            </div>
            <span className="small text-muted font-monospace">Official PDF / Drive Certificates Available</span>
          </div>

          <div className="row g-3">
            {certifications.map((cert, index) => (
              <div key={index} className="col-md-4">
                <div
                  className="card-futuristic p-4 h-100 d-flex flex-column justify-content-between"
                  style={{ background: 'rgba(12, 18, 34, 0.6)' }}
                >
                  <div>
                    <div className="font-monospace text-uppercase small text-muted mb-1" style={{ fontSize: '0.75rem' }}>
                      {cert.provider}
                    </div>
                    <h4 className="h6 fw-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '0.98rem' }}>
                      {cert.title}
                    </h4>
                    {cert.details && (
                      <p className="small text-secondary mb-3" style={{ lineHeight: '1.5', fontSize: '0.85rem' }}>
                        {cert.details}
                      </p>
                    )}
                  </div>

                  {cert.certificateUrls && cert.certificateUrls.length > 0 && (
                    <div className="d-flex flex-wrap gap-2 pt-2 border-top" style={{ borderColor: 'var(--border-subtle)' }}>
                      {cert.certificateUrls.map((file, fileIdx) => (
                        <a
                          key={fileIdx}
                          href={file.url}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-futuristic btn-futuristic-ghost"
                          style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                        >
                          <FileText size={13} />
                          <span>{file.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerReadiness;
