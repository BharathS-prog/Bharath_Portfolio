import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { profileInfo } from '../data';
import heroImg from '../assets/hero.png';

interface NavbarProps {
  onSelectContactReason?: (reason: string) => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'entrepreneurship', label: 'Entrepreneurship' },
  { id: 'journey', label: 'Journey' },
  { id: 'career', label: 'Career' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 140;
      for (const link of NAV_LINKS) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`navbar navbar-expand-xl fixed-top navbar-custom ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Brand */}
        <a 
          className="navbar-brand d-flex align-items-center gap-2" 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          aria-label={`${profileInfo.name} - Home`}
        >
          <img 
            src={heroImg} 
            alt="Bharath portrait icon" 
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--accent-cyan)'
            }} 
          />
          <span className="navbar-brand-text">{profileInfo.name}</span>
          <span 
            className="d-none d-md-inline-block font-monospace ms-1"
            style={{ 
              fontSize: '0.72rem', 
              color: 'var(--accent-cyan)', 
              background: 'rgba(6, 182, 212, 0.1)', 
              padding: '2px 8px', 
              borderRadius: '100px',
              border: '1px solid rgba(6, 182, 212, 0.25)' 
            }}
          >
            AI &amp; Founder-in-Progress
          </span>
        </a>

        {/* Mobile Controls */}
        <div className="d-flex align-items-center d-xl-none gap-2">
          <ThemeToggle />
          <button
            className="btn btn-futuristic-secondary p-2"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            style={{ width: '42px', height: '42px', padding: '0 !important' }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation Items */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show mt-3 mt-xl-0 p-3 p-xl-0 rounded-4' : ''}`} style={isOpen ? { background: 'var(--bg-card)', border: '1px solid var(--border-medium)' } : {}} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-xl-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  className={`nav-link nav-link-custom ${activeSection === link.id ? 'active' : ''}`}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Quick Action Button for Collaborations */}
            <li className="nav-item ms-xl-2 mt-2 mt-xl-0">
              <a
                href="#entrepreneurship"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('entrepreneurship');
                }}
                className="btn-futuristic btn-futuristic-primary"
                style={{ padding: '8px 16px', fontSize: '0.84rem' }}
              >
                <span>Collaborate</span>
                <ArrowUpRight size={14} />
              </a>
            </li>

            {/* Desktop Theme Toggle */}
            <li className="nav-item d-none d-xl-block ms-2">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
