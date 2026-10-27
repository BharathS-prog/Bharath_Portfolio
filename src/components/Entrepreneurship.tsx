import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, Users, Sparkles, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { entrepreneurshipCards, mentorshipTopics } from '../data';

interface EntrepreneurshipProps {
  onSelectAction?: (actionCategory: string) => void;
}

export const Entrepreneurship: React.FC<EntrepreneurshipProps> = ({ onSelectAction }) => {
  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb size={24} style={{ color: 'var(--accent-amber)' }} />;
      case 'Compass':
        return <Compass size={24} style={{ color: 'var(--accent-cyan)' }} />;
      case 'Users':
        return <Users size={24} style={{ color: 'var(--accent-blue)' }} />;
      default:
        return <Sparkles size={24} style={{ color: 'var(--accent-violet)' }} />;
    }
  };

  const handleActionClick = (category: string) => {
    if (onSelectAction) {
      onSelectAction(category);
    }
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="card-futuristic p-4 p-md-5 mb-5"
          style={{
            background: 'linear-gradient(135deg, rgba(12, 18, 34, 0.85) 0%, rgba(18, 28, 54, 0.6) 100%)',
          }}
        >
          <div className="row g-4 align-items-center">
            <div className="col-lg-8">
              <p className="lead fw-normal mb-3" style={{ color: 'var(--text-primary)', fontSize: '1.18rem', lineHeight: '1.75' }}>
                "I'm learning how to identify real customer problems, validate ideas, build prototypes, and turn promising concepts into practical solutions.
              </p>
              <p className="m-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                I'm not claiming to have all the answers. I'm actively looking for opportunities to learn from people who have built businesses, solved difficult problems, and turned ideas into products."
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button
                type="button"
                onClick={() => handleActionClick('Startup Mentorship')}
                className="btn-futuristic btn-futuristic-primary w-100 w-lg-auto"
              >
                <span>Help Me Build Something Meaningful</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 4 Pillars Cards */}
        <div className="row g-4 mb-5">
          {entrepreneurshipCards.map((card, index) => (
            <div key={card.id} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-futuristic p-4 d-flex flex-column justify-content-between h-100"
              >
                <div>
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {getCardIcon(card.icon)}
                  </div>
                  <h3 className="h6 fw-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                    {card.title}
                  </h3>
                  <p className="small mb-4" style={{ lineHeight: '1.6' }}>
                    {card.summary}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleActionClick(card.actionCategory)}
                  className="btn-futuristic btn-futuristic-ghost w-100 justify-content-between mt-auto"
                >
                  <span>Connect on this</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Dedicated Support & Guidance Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="guidance-cta-banner"
        >
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="section-label mb-3">// Collaborative Growth</span>
              <h3 className="h3 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Have Advice, an Idea, or an Opportunity?
              </h3>
              <p className="mb-4" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                I am actively seeking practical guidance, problem discovery discussions, and opportunities to build alongside experienced minds. I welcome your input across:
              </p>

              <div className="row g-2 mb-4">
                {mentorshipTopics.map((topic, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="d-flex align-items-start gap-2">
                      <CheckCircle size={16} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-cyan)' }} />
                      <span className="small text-secondary">{topic}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Category Triggers */}
            <div className="col-lg-5">
              <div
                className="p-4 rounded-4"
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-medium)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-3">
                  <MessageCircle size={18} style={{ color: 'var(--accent-cyan)' }} />
                  <span className="font-monospace small fw-bold text-uppercase" style={{ color: 'var(--text-primary)' }}>
                    Start a Direct Conversation
                  </span>
                </div>
                <p className="small text-muted mb-3">
                  Select a category to jump directly to the contact form with that topic pre-selected:
                </p>

                <div className="d-flex flex-column gap-2">
                  <button
                    type="button"
                    onClick={() => handleActionClick('Startup Mentorship')}
                    className="btn-futuristic btn-futuristic-secondary text-start justify-content-between py-2"
                  >
                    <span>Offer Mentorship</span>
                    <ArrowRight size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActionClick('Startup Idea or Feedback')}
                    className="btn-futuristic btn-futuristic-secondary text-start justify-content-between py-2"
                  >
                    <span>Share Startup Advice</span>
                    <ArrowRight size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActionClick('Startup Idea or Feedback')}
                    className="btn-futuristic btn-futuristic-secondary text-start justify-content-between py-2"
                  >
                    <span>Discuss an Idea</span>
                    <ArrowRight size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActionClick('Collaboration')}
                    className="btn-futuristic btn-futuristic-secondary text-start justify-content-between py-2"
                  >
                    <span>Explore Collaboration</span>
                    <ArrowRight size={15} />
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
