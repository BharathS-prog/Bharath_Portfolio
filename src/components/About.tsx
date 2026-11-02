import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Rocket, Target, Award, Briefcase, GraduationCap } from 'lucide-react';
import { educationList } from '../data';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <BookOpen size={20} style={{ color: 'var(--accent-cyan)' }} />,
      title: "What I Am Learning",
      description: "Deepening my mastery of Python, Large Language Model architectures, prompt engineering, RAG pipelines, and computer vision models through hands-on coding and college coursework."
    },
    {
      icon: <Code2 size={20} style={{ color: 'var(--accent-blue)' }} />,
      title: "What I Am Building",
      description: "Practical intelligent applications — such as the automated AI Exam / Office Guardian, the NeuroSign ASL gesture translator, and interactive AI learning tools."
    },
    {
      icon: <Rocket size={20} style={{ color: 'var(--accent-violet)' }} />,
      title: "What I Am Exploring",
      description: "Startup opportunities where AI and software solve actual human and business inefficiencies. Learning how to validate problems, build MVPs, and talk to prospective users."
    },
    {
      icon: <Target size={20} style={{ color: 'var(--accent-emerald)' }} />,
      title: "What I Want to Achieve Next",
      description: "Securing an impactful AI engineering internship, finding experienced mentors who challenge my thinking, and collaborating with fellow developers on ambitious software products."
    }
  ];

  return (
    <section id="about" className="position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-heading-wrapper text-center text-md-start">
          <span className="section-label">// 01 &bull; Personal Narrative &amp; Focus</span>
          <h2 className="section-heading">About Me &amp; My Direction</h2>
          <p className="section-subheading">
            Third-year Artificial Intelligence and Data Science student, builder, and emerging entrepreneur.
          </p>
        </div>

        {/* Narrative & Streamlined Education Snapshot */}
        <div className="row g-4 align-items-start mb-5">
          {/* Main Story (Wider focus) */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="card-futuristic p-4"
            >
              <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Building from Curiosity to Practical Products
              </h3>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.75', color: '#e2e8f0' }}>
                I'm Bharath, a third-year Artificial Intelligence and Data Science student interested in 
                building intelligent applications and exploring technology-driven business opportunities.
              </p>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.75', color: '#e2e8f0' }}>
                My interests span AI engineering, computer vision, automation, and entrepreneurship. Through my 
                projects, I am learning to transform ideas into working applications and understand how 
                technology can address practical, everyday problems.
              </p>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.75', color: '#e2e8f0' }}>
                I'm currently developing my technical skills, experimenting with product ideas, and learning 
                what it takes to build useful technology products. I am particularly interested in connecting 
                with mentors, developers, entrepreneurs, and potential collaborators who can challenge my thinking 
                and help me grow.
              </p>

              {/* Quick Highlights */}
              <div className="d-flex flex-wrap gap-3 pt-3 mt-4 border-top" style={{ borderColor: 'var(--border-subtle) !important' }}>
                <div className="d-flex align-items-center gap-2">
                  <Award size={18} style={{ color: 'var(--accent-cyan)' }} />
                  <span style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>
                    CGPA: 8.00 / 10.00
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Briefcase size={18} style={{ color: 'var(--accent-violet)' }} />
                  <span style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>
                    Data Science Intern @ Imagecon Technologies
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Snapshot (Fitted to content, no excess gap) */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="card-futuristic card-fit p-4 d-flex flex-column gap-3"
              style={{ height: 'auto', minHeight: 'unset' }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <span className="section-label mb-0" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                  // Education
                </span>
                <GraduationCap size={16} style={{ color: 'var(--accent-cyan)' }} />
              </div>

              {/* College Info */}
              <div>
                <h4 className="fw-bold mb-1" style={{ fontSize: '1.02rem', color: '#ffffff', lineHeight: '1.3' }}>
                  {educationList[0].degree}
                </h4>
                <div className="fw-semibold mb-2" style={{ color: '#38bdf8', fontSize: '0.88rem' }}>
                  {educationList[0].institution}
                </div>

                <div className="d-flex flex-wrap gap-2 mb-2">
                  <span className="status-pill status-prototype" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                    {educationList[0].period}
                  </span>
                  <span className="status-pill status-completed" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                    {educationList[0].score}
                  </span>
                </div>

                <p className="small mb-0" style={{ fontSize: '0.84rem', lineHeight: '1.5', color: '#e2e8f0' }}>
                  Core focus in AI, Machine Learning, Data Structures &amp; Database Management.
                </p>
              </div>

              {/* School Foundation Compact Tile (Tightly attached without blank space) */}
              <div
                className="p-3 rounded-3 border-top pt-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderColor: 'var(--border-subtle) !important',
                }}
              >
                <div className="d-flex align-items-center justify-content-between font-monospace mb-1" style={{ fontSize: '0.72rem', color: '#cbd5e1' }}>
                  <span className="fw-semibold">// HSC FOUNDATION</span>
                  <span>{educationList[1].period}</span>
                </div>
                <div className="fw-semibold text-truncate small" style={{ color: '#ffffff', fontSize: '0.86rem' }}>
                  {educationList[1].institution}
                </div>
                <div className="small mt-1" style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                  Score: <span className="fw-bold" style={{ color: '#34d399' }}>{educationList[1].score}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4 Pillars Grid (Learning, Building, Exploring, Achieving) */}
        <div className="row g-4">
          {pillars.map((pillar, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-futuristic p-4 h-100"
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {pillar.icon}
                </div>
                <h4 className="h6 fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {pillar.title}
                </h4>
                <p className="small mb-0" style={{ lineHeight: '1.6' }}>
                  {pillar.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
