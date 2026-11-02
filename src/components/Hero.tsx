import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Sparkles, MessageSquare, ChevronRight, FileText, Cpu, Compass } from 'lucide-react';
import { profileInfo } from '../data';
import profileImg from '../assets/profile.png';
import { Canvas3D } from './Canvas3D';
import { Tilt3D } from './Tilt3D';

interface HeroProps {
  onExploreWork?: () => void;
  onConnect?: () => void;
  onStartupIdeaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="d-flex align-items-center min-vh-100 position-relative pt-5 pb-5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="cinematic-bg">
        <div className="cinematic-grid"></div>
        <div className="cinematic-glow-top"></div>
        <div className="cinematic-glow-bottom"></div>
      </div>

      <div className="container py-5 my-auto">
        <div className="row align-items-center justify-content-between g-5">
          {/* Main Info Column */}
          <div className="col-lg-7 order-2 order-lg-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="d-flex flex-column gap-3"
            >
              {/* Identity Indicators */}
              <motion.div variants={itemVariants} className="d-flex flex-wrap gap-2 mb-1">
                {profileInfo.badges.map((badge, idx) => (
                  <div key={idx} className="identity-badge">
                    <span className="identity-badge-dot"></span>
                    <span>{badge}</span>
                  </div>
                ))}
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={itemVariants}>
                <h1 className="hero-headline">
                  Building Intelligent Solutions.{' '}
                  <span className="hero-headline-gradient">Exploring What's Possible.</span>
                </h1>
              </motion.div>

              {/* Supporting Text */}
              <motion.p variants={itemVariants} className="hero-subhead">
                {profileInfo.tagline}
              </motion.p>

              {/* Prominent Calls to Action */}
              <motion.div variants={itemVariants} className="d-flex flex-wrap align-items-center gap-3 mt-3">
                <button
                  type="button"
                  onClick={() => scrollTo('projects')}
                  className="btn-futuristic btn-futuristic-primary"
                >
                  <Sparkles size={18} />
                  <span>Explore My Work</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="btn-futuristic btn-futuristic-secondary"
                >
                  <MessageSquare size={18} />
                  <span>Let's Connect</span>
                </button>

                <a
                  href={profileInfo.resumeUrl}
                  download="Bharath_S_Resume.pdf"
                  className="btn-futuristic btn-futuristic-ghost"
                  title="Download verified resume PDF"
                >
                  <FileText size={16} />
                  <span>Verified Resume</span>
                </a>
              </motion.div>

              {/* Entrepreneur Dedicated Link */}
              <motion.div variants={itemVariants} className="pt-2">
                <a
                  href="#entrepreneurship"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('entrepreneurship');
                  }}
                  className="d-inline-flex align-items-center gap-2 text-decoration-none"
                  style={{
                    color: 'var(--accent-cyan-bright)',
                    fontSize: '0.96rem',
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: 'rgba(6, 182, 212, 0.06)',
                    border: '1px solid rgba(6, 182, 212, 0.25)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span>Have a Startup Idea or Want to Collaborate?</span>
                  <ChevronRight size={16} />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile & 3D Neural Animation Column */}
          <div className="col-lg-5 order-1 order-lg-2 text-center position-relative">
            {/* Interactive 3D WebGL Canvas Layer */}
            <div
              className="position-absolute top-50 start-50 translate-middle"
              style={{
                width: '460px',
                height: '460px',
                maxWidth: '92vw',
                maxHeight: '92vw',
                zIndex: 0,
                opacity: 0.85,
              }}
            >
              <Canvas3D />
            </div>

            {/* Profile Frame with 3D Tilt Interaction */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="position-relative d-inline-block"
              style={{ zIndex: 1, maxWidth: '100%' }}
            >
              <Tilt3D maxTilt={10} scale={1.03}>
                {/* Glow Halo behind frame */}
                <div
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{
                    width: '320px',
                    height: '360px',
                    maxWidth: '85vw',
                    maxHeight: '95vw',
                    borderRadius: '32px',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.28) 0%, rgba(139, 92, 246, 0.18) 50%, transparent 70%)',
                    filter: 'blur(35px)',
                    zIndex: -1,
                  }}
                />

                {/* Profile Card Frame */}
                <div
                  className="position-relative"
                  style={{
                    width: '280px',
                    maxWidth: '85vw',
                    height: '330px',
                    borderRadius: '28px',
                    padding: '4px',
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.7) 0%, rgba(59, 130, 246, 0.35) 50%, rgba(139, 92, 246, 0.7) 100%)',
                    boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 35px rgba(6, 182, 212, 0.25)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <div
                    className="w-100 h-100 overflow-hidden"
                    style={{
                      borderRadius: '24px',
                      backgroundColor: 'var(--bg-secondary)',
                    }}
                  >
                    <img
                      src={profileImg}
                      alt={`${profileInfo.name} - AI Engineer & Emerging Entrepreneur`}
                      className="w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center 10%',
                        filter: 'contrast(1.03) brightness(0.99)',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                  </div>
                </div>
              </Tilt3D>

              {/* Floating 3D Micro-Badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
                className="position-absolute d-flex align-items-center gap-2"
                style={{
                  top: '-12px',
                  right: '-6px',
                  background: 'var(--bg-glass)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--border-accent)',
                  padding: '5px 12px',
                  borderRadius: '100px',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 3,
                }}
              >
                <Cpu size={14} style={{ color: 'var(--accent-cyan)' }} />
                <span className="font-monospace" style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  3D AI Core
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut', delay: 0.5 }}
                className="position-absolute d-flex align-items-center gap-2"
                style={{
                  bottom: '-10px',
                  left: '-6px',
                  background: 'var(--bg-glass)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--border-violet)',
                  padding: '5px 12px',
                  borderRadius: '100px',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 3,
                }}
              >
                <Compass size={14} style={{ color: 'var(--accent-violet)' }} />
                <span className="font-monospace" style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Builder &bull; 3rd Year
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Cue */}
        <div className="d-flex justify-content-center mt-5 pt-4">
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="btn btn-link text-decoration-none p-2 d-flex flex-column align-items-center gap-2"
            style={{ color: '#cbd5e1' }}
            aria-label="Scroll down to About section"
          >
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown size={18} style={{ color: 'var(--accent-cyan)' }} />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
