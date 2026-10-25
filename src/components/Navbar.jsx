import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, Sparkles } from 'lucide-react';
import { openWhatsApp, WA_TEMPLATES } from '../utils/whatsapp';

export default function Navbar({ onOpenTrialModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

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

  const handleVipPassClick = () => {
    setMobileMenuOpen(false);
    if (onOpenTrialModal) {
      onOpenTrialModal('1-Day VIP Trial Pass');
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="mainNavbar">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo" aria-label="Be Fit Gym Home" onClick={handleLinkClick}>
          <img 
            src="/assets/images/befit-logo.png" 
            alt="Be Fit Gym Logo" 
            className="brand-logo-img" 
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu desktop-nav-menu" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs & Mobile Toggle */}
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

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-brand">
            <img src="/assets/images/befit-logo.png" alt="Be Fit Gym" className="mobile-drawer-logo" />
            <div className="mobile-drawer-status">
              <span className="pulse-dot"></span>
              <span>Floor Open Now</span>
            </div>
          </div>
          <button 
            type="button" 
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} color="#FFF" />
          </button>
        </div>

        <div className="mobile-drawer-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              <span>{link.name}</span>
              <span className="mobile-link-arrow">&rarr;</span>
            </a>
          ))}
        </div>

        <div className="mobile-drawer-footer">
          <button 
            type="button" 
            className="btn btn-whatsapp mobile-drawer-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              openWhatsApp(WA_TEMPLATES.general());
            }}
          >
            <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.2rem' }}></i>
            <span>Chat on WhatsApp</span>
          </button>

          <button 
            type="button" 
            className="btn btn-outline mobile-drawer-btn"
            onClick={handleVipPassClick}
          >
            <Sparkles size={16} className="text-orange" />
            <span>Claim Free 1-Day VIP Pass</span>
          </button>

          <div className="mobile-drawer-timing-info">
            <Clock size={13} className="text-orange" />
            <span>Mon–Sat: 5:30 AM – 10 PM | Sun: 6 AM – 10 AM</span>
          </div>
        </div>
      </div>
    </header>
  );
}

