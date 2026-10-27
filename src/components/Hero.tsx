import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Sparkles, MessageSquare, ChevronRight, FileText } from 'lucide-react';
import { profileInfo } from '../data';
import heroImg from '../assets/hero.png';

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

          {/* Profile Visual Column */}
          <div className="col-lg-5 order-1 order-lg-2 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="position-relative d-inline-block"
            >
              {/* Outer Glow Halo */}
              <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)',
                  filter: 'blur(35px)',
                  zIndex: 0,
                }}
              />

              {/* Image Frame */}
              <div
                className="position-relative"
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '28px',
                  padding: '5px',
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.6) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(139, 92, 246, 0.6) 100%)',
                  boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(6, 182, 212, 0.25)',
                  zIndex: 1,
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
                    src={heroImg}
                    alt={`${profileInfo.name} - AI Engineer & Emerging Entrepreneur`}
                    className="w-100 h-100"
                    style={{
                      objectFit: 'cover',
                      filter: 'contrast(1.04) brightness(0.98)',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
              </div>

              {/* Status Badge Tag */}
              <div
                className="position-absolute bottom-0 start-50 translate-middle-x d-flex align-items-center gap-2"
                style={{
                  background: 'var(--bg-glass)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--border-accent)',
                  padding: '8px 16px',
                  borderRadius: '100px',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 2,
                  whiteSpace: 'nowrap',
                  transform: 'translate(-50%, 40%)',
                }}
              >
                <span className="pulsing-dot" style={{ color: 'var(--accent-cyan)' }}></span>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Active Builder &amp; Student
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="d-flex justify-content-center mt-5 pt-4">
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="btn btn-link text-decoration-none p-2 d-flex flex-column align-items-center gap-2"
            style={{ color: 'var(--text-muted)' }}
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
