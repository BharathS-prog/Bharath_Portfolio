import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Globe, BarChart2, Radio, Check, BookOpen, Compass } from 'lucide-react';
import { skillCategoriesData, type SkillProficiencyStatus } from '../data';

export const Skills: React.FC = () => {
  const [activeStatusFilter, setActiveStatusFilter] = useState<string>('All');

  const statusFilters = ['All', 'Comfortable Using', 'Currently Learning', 'Interested in Exploring'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Cpu size={22} style={{ color: 'var(--accent-cyan)' }} />;
      case 'Programming & Languages':
        return <Terminal size={22} style={{ color: 'var(--accent-blue)' }} />;
      case 'Web & API Development':
        return <Globe size={22} style={{ color: 'var(--accent-violet)' }} />;
      case 'Data Science & Analytics':
        return <BarChart2 size={22} style={{ color: 'var(--accent-emerald)' }} />;
      default:
        return <Radio size={22} style={{ color: 'var(--accent-amber)' }} />;
    }
  };

  const getStatusBadge = (status: SkillProficiencyStatus) => {
    switch (status) {
      case 'Comfortable Using':
        return {
          icon: <Check size={12} />,
          className: 'status-completed',
          label: 'Comfortable'
        };
      case 'Currently Learning':
        return {
          icon: <BookOpen size={12} />,
          className: 'status-prototype',
          label: 'Learning'
        };
      case 'Interested in Exploring':
        return {
          icon: <Compass size={12} />,
          className: 'status-research',
          label: 'Exploring'
        };
    }
  };

  return (
    <section id="skills" className="position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="row align-items-end justify-content-between g-4 mb-5">
          <div className="col-lg-7 text-center text-lg-start">
            <span className="section-label">// 03 &bull; Technical Competencies</span>
            <h2 className="section-heading">Skills &amp; Technologies</h2>
            <p className="section-subheading">
              Grounded, verified technical tools organized by hands-on proficiency and active learning trajectory. No arbitrary percentage bars.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="col-lg-5 d-flex flex-wrap justify-content-center justify-content-lg-end gap-2">
            {statusFilters.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setActiveStatusFilter(status)}
                className={`btn btn-sm ${
                  activeStatusFilter === status ? 'btn-futuristic-primary' : 'btn-futuristic-secondary'
                }`}
                style={{
                  padding: '6px 14px',
                  fontSize: '0.8rem',
                  borderRadius: '100px',
                  fontWeight: 600,
                }}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="row g-4">
          {skillCategoriesData.map((group, index) => {
            const visibleSkills = activeStatusFilter === 'All'
              ? group.skills
              : group.skills.filter((s) => s.status === activeStatusFilter);

            if (visibleSkills.length === 0) return null;

            return (
              <div key={group.category} className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="card-futuristic p-4 p-md-5"
                >
                  {/* Category Header */}
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3"
                      style={{
                        width: '44px',
                        height: '44px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {getCategoryIcon(group.category)}
                    </div>
                    <div>
                      <h3 className="h5 fw-bold m-0" style={{ color: 'var(--text-primary)' }}>
                        {group.category}
                      </h3>
                      <p className="small text-muted m-0">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="d-flex flex-column gap-2 mt-4">
                    {visibleSkills.map((skill) => {
                      const badgeInfo = getStatusBadge(skill.status);
                      return (
                        <div
                          key={skill.name}
                          className="p-3 rounded-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2"
                          style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid var(--border-subtle)',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <div>
                            <span className="fw-semibold" style={{ color: 'var(--text-primary)', fontSize: '0.94rem' }}>
                              {skill.name}
                            </span>
                            {skill.note && (
                              <div className="small text-muted" style={{ fontSize: '0.8rem' }}>
                                {skill.note}
                              </div>
                            )}
                          </div>

                          <div className="d-flex align-items-center">
                            <span className={`status-pill ${badgeInfo.className}`} style={{ fontSize: '0.72rem' }}>
                              {badgeInfo.icon}
                              <span>{badgeInfo.label}</span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
