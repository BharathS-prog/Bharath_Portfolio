import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { profileInfo } from '../data';
import heroImg from '../assets/hero.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Credentials' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-custom ${isScrolled ? 'scrolled shadow-sm' : ''}`}>
      <div className="container">
        <a 
          className="navbar-brand fw-bold fs-5 d-flex align-items-center" 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
        >
          {/* Small circular logo from hero.png */}
          <img src={heroImg} alt="Logo" className="navbar-logo" />
          <span style={{ color: 'var(--accent-light)', fontWeight: 'bold' }}>{profileInfo.name}</span>
        </a>

        {/* Mobile Toggle & Theme Button Container */}
        <div className="d-flex align-items-center d-lg-none gap-2">
          <ThemeToggle />
          <button
            className="navbar-toggler border-0 p-2"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            style={{ color: 'var(--text-primary)' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Collapsible Nav Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show mt-3 mt-lg-0' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  className={`nav-link text-uppercase ${activeSection === link.id ? 'active' : ''}`}
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
            {/* Desktop Theme Toggle */}
            <li className="nav-item d-none d-lg-block ms-3">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
