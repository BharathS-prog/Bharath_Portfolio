import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, CheckCircle } from 'lucide-react';
import { achievementsList } from '../data';

export const Achievements: React.FC = () => {
  // Map icons dynamically
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CheckCircle size={24} style={{ color: 'var(--accent-light)' }} />;
      case 1:
        return <Trophy size={24} style={{ color: 'var(--accent-light)' }} />;
      default:
        return <Star size={24} style={{ color: 'var(--accent-light)' }} />;
    }
  };

  return (
    <section id="achievements" className="position-relative">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Achievements & Milestones</h2>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="row g-4">
          {achievementsList.map((achievement, index) => (
            <div key={index} className="col-md-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-custom p-4 d-flex flex-column h-100 justify-content-between"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="d-flex align-items-center justify-content-center bg-dark bg-opacity-25 rounded border border-light border-opacity-10 mb-3" style={{ width: '48px', height: '48px' }}>
                    {getIcon(index)}
                  </div>
                  <h3 className="h5 fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {achievement.title}
                  </h3>
                  <p className="text-secondary" style={{ fontSize: '0.95rem', textAlign: 'justify', lineHeight: '1.5' }}>
                    {achievement.description}
                  </p>
                </div>
                {achievement.badge && (
                  <div className="mt-3">
                    <span className="badge-custom m-0" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                      {achievement.badge}
                    </span>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Achievements;
