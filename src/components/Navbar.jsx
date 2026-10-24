import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { openWhatsApp, WA_TEMPLATES } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Timings', href: '#timings' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'BMI Calc', href: '#calculator' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="mainNavbar">
      <div className="container navbar-container">
        {/* Brand Logo with generous right margin */}
        <a href="#home" className="brand-logo" aria-label="Be Fit Gym Home">
          <img 
            src="/assets/images/befit-logo.png" 
            alt="Be Fit Gym Logo" 
            className="brand-logo-img" 
          />
        </a>

        {/* Desktop & Mobile Navigation Links */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`} aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Single Theme-Matched WhatsApp CTA & Mobile Toggle */}
        <div className="nav-actions">
          <button 
            type="button" 
            className="btn btn-nav-cta btn-sm desktop-only"
            onClick={() => openWhatsApp(WA_TEMPLATES.general())}
          >
            <i className="fa-brands fa-whatsapp text-whatsapp" style={{ fontSize: '1.05rem' }}></i>
            <span>Chat on WhatsApp</span>
          </button>

          <button 
            type="button" 
            className="menu-toggle" 
            aria-label="Toggle navigation menu" 
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} color="#FFF" /> : <Menu size={24} color="#FFF" />}
          </button>
        </div>
      </div>
    </header>
  );
}
