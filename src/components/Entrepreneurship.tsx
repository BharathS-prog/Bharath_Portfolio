import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, Users, Sparkles, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { entrepreneurshipCards, mentorshipTopics } from '../data';
import { TiltCard3D } from './TiltCard3D';

interface EntrepreneurshipProps {
  onSelectAction?: (actionCategory: string) => void;
}

export const Entrepreneurship: React.FC<EntrepreneurshipProps> = ({ onSelectAction }) => {
  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb size={20} style={{ color: 'var(--accent-amber)' }} />;
      case 'Compass':
        return <Compass size={20} style={{ color: 'var(--accent-cyan)' }} />;
      case 'Users':
        return <Users size={20} style={{ color: 'var(--accent-blue)' }} />;
      default:
        return <Sparkles size={20} style={{ color: 'var(--accent-violet)' }} />;
    }
  };

  const handleActionClick = (category: string) => {
    if (onSelectAction) {
      onSelectAction(category);
    }
    const element = document.getElementById('contact');
    if (element) {
      const offset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="entrepreneurship" className="position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-heading-wrapper text-center text-md-start">
          <span className="section-label">// 04 &bull; Entrepreneurial Journey</span>
          <h2 className="section-heading">From Building Projects to Building Businesses</h2>
          <p className="section-subheading">
            I'm at the beginning of my entrepreneurial journey, exploring how AI and software can become useful products and sustainable business opportunities.
          </p>
        </div>

        {/* Framing Philosophy Narrative */}
        <TiltCard3D maxTilt={4}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="card-futuristic p-3.5 p-md-4 mb-3"
            style={{
              background: 'linear-gradient(135deg, rgba(12, 18, 34, 0.85) 0%, rgba(18, 28, 54, 0.6) 100%)',
            }}
          >
            <div className="row g-3 align-items-center">
              <div className="col-lg-8">
                <p className="fw-normal mb-2" style={{ color: 'var(--text-primary)', fontSize: '1.02rem', lineHeight: '1.65' }}>
                  "I'm learning how to identify real customer problems, validate ideas, build prototypes, and turn promising concepts into practical solutions.
                </p>
                <p className="m-0" style={{ fontSize: '0.94rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  I'm not claiming to have all the answers. I'm actively looking for opportunities to learn from people who have built businesses, solved difficult problems, and turned ideas into products."
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <button
                  type="button"
                  onClick={() => handleActionClick('Startup Mentorship')}
                  className="btn-futuristic btn-futuristic-primary w-100 w-lg-auto"
                >
                  <span>Help Me Build Meaningful Products</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </TiltCard3D>

        {/* 4 Pillars Cards with 3D Tilt */}
        <div className="row g-3 mb-4">
          {entrepreneurshipCards.map((card, index) => (
            <div key={card.id} className="col-md-6 col-lg-3">
              <TiltCard3D maxTilt={7}>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="card-futuristic p-3.5 d-flex flex-column justify-content-between h-100"
                >
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 mb-2"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {getCardIcon(card.icon)}
                    </div>
                    <h3 className="h6 fw-bold mb-1.5" style={{ color: 'var(--text-primary)', fontSize: '0.96rem' }}>
                      {card.title}
                    </h3>
                    <p className="small mb-3" style={{ lineHeight: '1.5', fontSize: '0.84rem' }}>
                      {card.summary}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleActionClick(card.actionCategory)}
                    className="btn-futuristic btn-futuristic-ghost w-100 justify-content-between mt-auto"
                    style={{ fontSize: '0.78rem', padding: '5px 10px' }}
                  >
                    <span>Connect on this</span>
                    <ArrowRight size={13} />
                  </button>
                </motion.div>
              </TiltCard3D>
            </div>
          ))}
        </div>

        {/* Dedicated Support & Guidance Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="guidance-cta-banner"
        >
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <span className="section-label mb-2">// Collaborative Growth</span>
              <h3 className="h4 fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Have Advice, an Idea, or an Opportunity?
              </h3>
              <p className="mb-3" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                I am actively seeking practical guidance, problem discovery discussions, and opportunities to build alongside experienced minds:
              </p>

              <div className="row g-1.5 mb-3">
                {mentorshipTopics.map((topic, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="d-flex align-items-start gap-1.5">
                      <CheckCircle size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-cyan)' }} />
                      <span className="small text-secondary" style={{ fontSize: '0.82rem' }}>{topic}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Category Triggers */}
            <div className="col-lg-5">
              <div
                className="p-3 rounded-3"
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-medium)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-2">
                  <MessageCircle size={16} style={{ color: 'var(--accent-cyan)' }} />
                  <span className="font-monospace small fw-bold text-uppercase" style={{ color: 'var(--text-primary)', fontSize: '0.76rem' }}>
                    Start a Direct Conversation
                  </span>
                </div>
                <p className="small text-muted mb-2.5" style={{ fontSize: '0.8rem' }}>
                  Select a category to jump directly to the contact form with that topic pre-selected:
                </p>

                <div className="d-flex flex-column gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleActionClick('Startup Mentorship')}
                    className="btn-futuristic btn-futuristic-secondary text-start justify-content-between py-1.5"
                    style={{ fontSize: '0.82rem' }}
                  >
                    <span>Offer Mentorship</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActionClick('Startup Idea or Feedback')}
                    className="btn-futuristic btn-futuristic-secondary text-start justify-content-between py-1.5"
                    style={{ fontSize: '0.82rem' }}
                  >
                    <span>Share Startup Advice</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActionClick('Startup Idea or Feedback')}
                    className="btn-futuristic btn-futuristic-secondary text-start justify-content-between py-1.5"
                    style={{ fontSize: '0.82rem' }}
                  >
                    <span>Discuss an Idea</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActionClick('Collaboration')}
                    className="btn-futuristic btn-futuristic-secondary text-start justify-content-between py-1.5"
                    style={{ fontSize: '0.82rem' }}
                  >
                    <span>Explore Collaboration</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Entrepreneurship;
