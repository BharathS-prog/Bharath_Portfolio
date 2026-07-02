import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="position-relative">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">My Skills</h2>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="row g-4">
          {skillCategories.map((categoryObj, catIndex) => (
            <div key={catIndex} className="col-md-6 col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="card-custom p-4"
              >
                <h3 className="h5 mb-4 pb-2 border-bottom fw-bold" style={{ color: 'var(--accent-light)', borderColor: 'var(--border-color)' }}>
                  {categoryObj.category}
                </h3>
                <div className="d-flex flex-column gap-3">
                  {categoryObj.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      whileHover={{ scale: 1.03, x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      style={{ cursor: 'default' }}
                    >
                      <div className="d-flex justify-content-between mb-1">
                        <span className="fw-semibold subtitle-shadow" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                        <span className="small text-muted">{skill.level}%</span>
                      </div>
                      <div 
                        className="progress" 
                        style={{ 
                          height: '8px', 
                          backgroundColor: 'var(--bg-tertiary)', 
                          borderRadius: '4px',
                          overflow: 'hidden'
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                          className="progress-bar glow-box"
                          style={{
                            height: '100%',
                            background: 'linear-gradient(90deg, var(--accent-color), var(--accent-light))',
                            borderRadius: '4px'
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
