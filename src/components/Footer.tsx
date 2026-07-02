import React from 'react';
import { Mail, MessageSquare, ArrowUp } from 'lucide-react';
import { profileInfo } from '../data';

// Inline SVG matching Lucide Linkedin icon styling
const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-5" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          {/* Brand Info */}
          <div className="col-md-4 text-center text-md-start">
            <h4 className="h5 fw-bold mb-1" style={{ color: 'var(--accent-light)' }}>
              {profileInfo.name}
            </h4>
            <p className="subtitle-shadow small mb-0">
              {profileInfo.title}
            </p>
          </div>

          {/* Social Icons */}
          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center gap-3">
              <a
                href={profileInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-accent rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', borderWidth: '1px' }}
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${profileInfo.email}`}
                className="btn btn-outline-accent rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', borderWidth: '1px' }}
                title="Email"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={profileInfo.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-accent rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', borderWidth: '1px' }}
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Back to Top & Copyright */}
          <div className="col-md-4 text-center text-md-end">
            <button
              onClick={handleScrollToTop}
              className="btn btn-outline-accent p-2 rounded-circle mb-3 mb-md-0 d-inline-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', borderWidth: '1px' }}
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
            <div className="subtitle-shadow small mt-2">
              &copy; {new Date().getFullYear()} {profileInfo.name}. All rights reserved.
            </div>
            <div className="subtitle-shadow" style={{ fontSize: '0.75rem', marginTop: '4px' }}>
              Built using React, TypeScript &amp; Bootstrap 5
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
