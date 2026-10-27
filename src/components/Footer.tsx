import React from 'react';
import { ArrowUp, Mail, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileInfo } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'entrepreneurship', label: 'Entrepreneurship' },
    { id: 'journey', label: 'Journey' },
    { id: 'career', label: 'Career' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer
      className="position-relative pt-5 pb-4"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Main Footer Headline & Subhead */}
        <div className="row g-4 justify-content-between align-items-start pb-5 border-bottom" style={{ borderColor: 'var(--border-subtle) !important' }}>
          <div className="col-lg-6">
            <span className="section-label mb-2">// Connect &amp; Collaborate</span>
            <h3 className="h3 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Building What's Next, One Idea at a Time.
            </h3>
            <p className="small mb-0" style={{ maxWidth: '520px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              I'm learning, building, and exploring opportunities at the intersection of AI and entrepreneurship. If you have an idea, advice, or an opportunity worth discussing, I'd love to connect.
            </p>
          </div>

          <div className="col-lg-5 d-flex flex-column align-items-lg-end">
            <div className="d-flex align-items-center gap-2 mb-3">
              <a
                href={profileInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-futuristic btn-futuristic-secondary p-2 rounded-circle"
                style={{ width: '42px', height: '42px' }}
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={profileInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-futuristic btn-futuristic-secondary p-2 rounded-circle"
                style={{ width: '42px', height: '42px' }}
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={`mailto:${profileInfo.email}`}
                className="btn-futuristic btn-futuristic-secondary p-2 rounded-circle"
                style={{ width: '42px', height: '42px' }}
                title="Email"
                aria-label="Email Bharath"
              >
                <Mail size={18} />
              </a>

              <a
                href={profileInfo.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-futuristic btn-futuristic-secondary p-2 rounded-circle"
                style={{ width: '42px', height: '42px' }}
                title="WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare size={18} />
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                className="btn-futuristic btn-futuristic-primary p-2 rounded-circle ms-2"
                style={{ width: '42px', height: '42px' }}
                title="Back to Top"
                aria-label="Back to top"
              >
                <ArrowUp size={18} />
              </button>
            </div>

            <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className="btn btn-link p-0 text-decoration-none small"
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.82rem',
                    margin: '0 6px',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Transparency */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 pt-4">
          <div className="small font-monospace" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} {profileInfo.name} &bull; AI Engineer in Progress &amp; Emerging Entrepreneur
          </div>

          <div className="small font-monospace d-flex align-items-center gap-1" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            <span>Crafted with React 19, TypeScript &amp; Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
