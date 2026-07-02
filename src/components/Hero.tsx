import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Download, MapPin, Mail, Phone } from 'lucide-react';
import { profileInfo } from '../data';
import heroImg from '../assets/hero.png';

export const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="home" className="d-flex align-items-center min-vh-100 position-relative overflow-hidden pt-5">
      {/* Decorative Gradient Background Mesh */}
      <div className="bg-gradient-mesh"></div>

      <div className="container py-5">
        <div className="row align-items-center justify-content-between g-5">
          {/* Main Info Column */}
          <div className="col-lg-7 order-2 order-lg-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="d-flex flex-column gap-3"
            >
              <motion.span 
                variants={itemVariants} 
                className="text-uppercase fw-bold" 
                style={{ color: 'var(--accent-light)', fontSize: '0.9rem', letterSpacing: '0.15em' }}
              >
                Welcome to my portfolio
              </motion.span>

              <motion.h1 
                variants={itemVariants} 
                className="display-4 fw-bold glow-text"
              >
                Hi, I'm <span style={{ color: 'var(--accent-light)' }}>{profileInfo.name}</span>
              </motion.h1>

              <motion.h2 
                variants={itemVariants} 
                className="h4 subtitle-shadow"
                style={{ fontWeight: 600, fontSize: '1.35rem' }}
              >
                {profileInfo.title}
              </motion.h2>

              <motion.p 
                variants={itemVariants} 
                className="lead"
                style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}
              >
                Building intelligent solutions at the intersection of Machine Learning, 
                Computer Vision, and Large Language Models.
              </motion.p>

              {/* Quick Contacts */}
              <motion.div 
                variants={itemVariants}
                className="d-flex flex-wrap gap-3 my-2"
                style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}
              >
                <div className="d-flex align-items-center gap-2 me-2">
                  <MapPin size={15} style={{ color: 'var(--accent-light)' }} />
                  <span>{profileInfo.location}</span>
                </div>
                <div className="d-flex align-items-center gap-2 me-2">
                  <Mail size={15} style={{ color: 'var(--accent-light)' }} />
                  <span>{profileInfo.email}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Phone size={15} style={{ color: 'var(--accent-light)' }} />
                  <span>{profileInfo.phone}</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants} 
                className="d-flex flex-wrap gap-3 mt-3"
              >
                <a 
                  href={profileInfo.resumeUrl} 
                  className="btn btn-accent d-inline-flex align-items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
                <a 
                  href={profileInfo.whatsAppUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline-accent d-inline-flex align-items-center gap-2"
                >
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image Column */}
          <div className="col-lg-4 text-center order-1 order-lg-2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="position-relative d-inline-block"
            >
              {/* Outer Glow Ring */}
              <div 
                className="position-absolute translate-middle top-50 start-50 glow-box"
                style={{
                  width: 'calc(100% + 16px)',
                  height: 'calc(100% + 16px)',
                  borderRadius: '26px',
                  border: '2px solid var(--accent-light)',
                  opacity: 0.4,
                  zIndex: -1,
                  filter: 'blur(4px)'
                }}
              ></div>

              {/* Profile Image with hero.png */}
              <div className="profile-container d-flex align-items-center justify-content-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <img
                  src={heroImg}
                  alt={profileInfo.name}
                  className="w-100 h-100 object-fit-cover"
                  style={{ transition: 'transform 0.5s ease' }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
