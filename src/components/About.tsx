import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Clock } from 'lucide-react';
import { profileInfo } from '../data';

export const About: React.FC = () => {
  const facts = [
    {
      icon: <GraduationCap size={24} className="text-teal" style={{ color: 'var(--accent-light)' }} />,
      title: "B.Tech Specialization",
      value: "Artificial Intelligence & Data Science"
    },
    {
      icon: <Award size={24} className="text-teal" style={{ color: 'var(--accent-light)' }} />,
      title: "Academic Grade",
      value: "CGPA: 8.00"
    },
    {
      icon: <BookOpen size={24} className="text-teal" style={{ color: 'var(--accent-light)' }} />,
      title: "Institution",
      value: "AVS Engineering College"
    },
    {
      icon: <Clock size={24} className="text-teal" style={{ color: 'var(--accent-light)' }} />,
      title: "Duration",
      value: "2024 – 2028"
    }
  ];

  return (
    <section id="about" className="position-relative">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">About Me</h2>
          </div>
        </div>

        {/* Content */}
        <div className="row g-5 align-items-center">
          {/* Left Column - Objective */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="h4 mb-3" style={{ color: 'var(--accent-light)' }}>
                Career Objective & Focus
              </h3>
              <p className="text-secondary mb-4" style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
                {profileInfo.bio}
              </p>
              <p className="text-secondary" style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
                Through continuous self-learning, internships, and core coursework, I strive to stay 
                at the forefront of Large Language Models (LLMs), RAG (Retrieval-Augmented Generation) architectures, 
                and computer vision pipelines. I am highly interested in building automation flows and 
                deploying models that have measurable business impacts.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Quick Facts Grid */}
          <div className="col-lg-6">
            <div className="row g-4">
              {facts.map((fact, index) => (
                <div key={index} className="col-sm-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-custom p-4 d-flex flex-column gap-2"
                  >
                    <div className="d-flex align-items-center justify-content-center bg-dark bg-opacity-25 rounded" style={{ width: '48px', height: '48px', border: '1px solid var(--border-color)' }}>
                      {fact.icon}
                    </div>
                    <div className="mt-2">
                      <h4 className="h6 subtitle-shadow mb-1 text-uppercase" style={{ fontSize: '0.78rem' }}>{fact.title}</h4>
                      <p className="fw-bold m-0" style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>{fact.value}</p>
                    </div>
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
export default About;
