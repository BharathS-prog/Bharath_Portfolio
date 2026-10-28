import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Rocket, Target, Award, Briefcase } from 'lucide-react';
import { educationList } from '../data';
import { TiltCard3D } from './TiltCard3D';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <BookOpen size={20} style={{ color: 'var(--accent-cyan)' }} />,
      title: "What I Am Learning",
      description: "Deepening my mastery of Python, Large Language Model architectures, prompt engineering, RAG pipelines, and computer vision models through hands-on coding and coursework."
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
      description: "Securing an impactful AI engineering internship, finding experienced mentors who challenge my thinking, and collaborating with fellow developers on ambitious products."
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

        {/* Narrative & Snapshot */}
        <div className="row g-3 align-items-stretch mb-3">
          {/* Main Story */}
          <div className="col-lg-7">
            <TiltCard3D maxTilt={5}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="card-futuristic p-3.5 p-md-4 h-100 justify-content-between"
              >
                <div>
                  <h3 className="h5 fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Building from Curiosity to Practical Products
                  </h3>
                  <p style={{ fontSize: '0.96rem', lineHeight: '1.65' }}>
                    I'm Bharath, a third-year Artificial Intelligence and Data Science student interested in 
                    building intelligent applications and exploring technology-driven business opportunities.
                  </p>
                  <p style={{ fontSize: '0.96rem', lineHeight: '1.65' }}>
                    My interests span AI engineering, computer vision, automation, and entrepreneurship. Through my 
                    projects, I am learning to transform ideas into working applications and understand how 
                    technology can address practical, everyday problems.
                  </p>
                  <p className="mb-3" style={{ fontSize: '0.96rem', lineHeight: '1.65' }}>
                    I'm currently developing my technical skills, experimenting with product ideas, and learning 
                    what it takes to build useful technology products with mentors, developers, and potential collaborators.
                  </p>
                </div>

                {/* Verified Education & Internship Badges */}
                <div className="d-flex flex-wrap gap-3 pt-2 mt-auto border-top" style={{ borderColor: 'var(--border-subtle) !important' }}>
                  <div className="d-flex align-items-center gap-2">
                    <Award size={16} style={{ color: 'var(--accent-cyan)' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      CGPA: 8.00 / 10.00
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Briefcase size={16} style={{ color: 'var(--accent-violet)' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      Data Science Intern @ Imagecon Technologies
                    </span>
                  </div>
                </div>
              </motion.div>
            </TiltCard3D>
          </div>

          {/* Education Snapshot */}
          <div className="col-lg-5">
            <TiltCard3D maxTilt={5}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card-futuristic p-3.5 p-md-4 h-100 d-flex flex-column justify-content-between"
              >
                <div>
                  <span className="section-label mb-2">// Academic Foundation</span>
                  <h4 className="h6 fw-bold mb-1" style={{ fontSize: '1.05rem' }}>{educationList[0].degree}</h4>
                  <div className="mb-1" style={{ color: 'var(--accent-cyan-bright)', fontWeight: 600, fontSize: '0.92rem' }}>
                    {educationList[0].institution}
                  </div>
                  <div className="font-monospace small mb-2" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    {educationList[0].period} &bull; {educationList[0].score}
                  </div>
                  <p className="small mb-3" style={{ lineHeight: '1.55', fontSize: '0.88rem' }}>
                    {educationList[0].details}
                  </p>
                </div>

                <div className="p-2.5 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)' }}>
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="small text-muted font-monospace" style={{ fontSize: '0.72rem' }}>PRIOR FOUNDATION</span>
                    <span className="badge bg-secondary font-monospace" style={{ fontSize: '0.65rem' }}>HSC</span>
                  </div>
                  <div className="small fw-bold" style={{ color: 'var(--text-primary)', fontSize: '0.86rem' }}>
                    {educationList[1].institution}
                  </div>
                  <div className="small" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    {educationList[1].score} ({educationList[1].period})
                  </div>
                </div>
              </motion.div>
            </TiltCard3D>
          </div>
        </div>

        {/* 4 Pillars Grid with 3D Tilt */}
        <div className="row g-3">
          {pillars.map((pillar, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <TiltCard3D maxTilt={7}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="card-futuristic p-3 h-100 justify-content-between"
                >
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 mb-2"
                      style={{
                        width: '38px',
                        height: '38px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {pillar.icon}
                    </div>
                    <h4 className="h6 fw-bold mb-1" style={{ color: 'var(--text-primary)', fontSize: '0.94rem' }}>
                      {pillar.title}
                    </h4>
                    <p className="small mb-0" style={{ lineHeight: '1.5', fontSize: '0.84rem' }}>
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              </TiltCard3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
