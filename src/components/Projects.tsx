import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Lightbulb, CheckCircle2 } from 'lucide-react';
import { projectList, type ProjectStatus } from '../data';
import { GithubIcon } from './Icons';
import { TiltCard3D } from './TiltCard3D';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filterOptions = ['All', 'In Development', 'Prototype', 'Research / Exploration'];

  const filteredProjects = filter === 'All' 
    ? projectList 
    : projectList.filter((p) => p.status === filter);

  const getStatusBadgeClass = (status: ProjectStatus) => {
    switch (status) {
      case 'In Development':
        return 'status-in-dev';
      case 'Prototype':
        return 'status-prototype';
      case 'Research / Exploration':
        return 'status-research';
      default:
        return 'status-completed';
    }
  };

  return (
    <section id="projects" className="position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="row align-items-end justify-content-between g-3 mb-3">
          <div className="col-lg-7 text-center text-lg-start">
            <span className="section-label">// 02 &bull; Engineering &amp; AI Builds</span>
            <h2 className="section-heading">Featured Projects</h2>
            <p className="section-subheading">
              Practical applications, machine learning prototypes, and software tools built to solve real challenges.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="col-lg-5 d-flex flex-wrap justify-content-center justify-content-lg-end gap-1">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setFilter(opt)}
                className={`btn btn-sm ${
                  filter === opt ? 'btn-futuristic-primary' : 'btn-futuristic-secondary'
                }`}
                style={{
                  padding: '5px 12px',
                  fontSize: '0.78rem',
                  borderRadius: '100px',
                  fontWeight: 600,
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with 3D Tilt */}
        <motion.div layout className="row g-3">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="col-lg-6"
              >
                <TiltCard3D maxTilt={6}>
                  <div className="card-futuristic d-flex flex-column justify-content-between p-3.5 p-md-4 h-100">
                    <div>
                      {/* Header: Title and Status Badge */}
                      <div className="d-flex align-items-start justify-content-between flex-wrap gap-2 mb-2">
                        <h3 className="h6 fw-bold m-0" style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                          {project.title}
                        </h3>
                        <span className={`status-pill ${getStatusBadgeClass(project.status)}`}>
                          <span className="pulsing-dot"></span>
                          <span>{project.status}</span>
                        </span>
                      </div>

                      {/* The Problem Box */}
                      <div
                        className="p-2.5 rounded-3 mb-2"
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        <div className="d-flex align-items-center gap-1.5 mb-1">
                          <Lightbulb size={13} style={{ color: 'var(--accent-cyan)' }} />
                          <span
                            className="font-monospace text-uppercase"
                            style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent-cyan)' }}
                          >
                            The Problem It Solves
                          </span>
                        </div>
                        <p className="small mb-0" style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: '1.5' }}>
                          {project.problem}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="mb-2" style={{ fontSize: '0.9rem', lineHeight: '1.55' }}>
                        {project.description}
                      </p>

                      {/* Key Technical Learning */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center gap-1.5 mb-1">
                          <CheckCircle2 size={13} style={{ color: 'var(--accent-emerald)' }} />
                          <span
                            className="font-monospace text-uppercase"
                            style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)' }}
                          >
                            What I Learned &amp; Built
                          </span>
                        </div>
                        <p className="small mb-0" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                          {project.keyLearnings}
                        </p>
                      </div>
                    </div>

                    <div>
                      {/* Tech Stack Badges */}
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links & Repository */}
                      <div
                        className="d-flex align-items-center justify-content-between pt-2 border-top"
                        style={{ borderColor: 'var(--border-subtle) !important' }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="d-inline-flex align-items-center gap-1.5 small fw-semibold"
                              style={{ color: 'var(--accent-cyan-bright)', fontSize: '0.84rem' }}
                            >
                              <GithubIcon size={15} />
                              <span>Source Code</span>
                            </a>
                          )}

                          {project.demoUrl ? (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="d-inline-flex align-items-center gap-1.5 small fw-semibold"
                              style={{ color: 'var(--text-primary)', fontSize: '0.84rem' }}
                            >
                              <ExternalLink size={15} />
                              <span>Live Demo</span>
                            </a>
                          ) : (
                            <span className="small text-muted font-monospace" style={{ fontSize: '0.74rem' }}>
                              Local Prototype / Repo Active
                            </span>
                          )}
                        </div>

                        <span className="small text-muted font-monospace d-none d-sm-inline" style={{ fontSize: '0.72rem' }}>
                          Verified Project
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
