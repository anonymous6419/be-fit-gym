import React from 'react';
import { ChevronUp, Phone, Clock, MapPin, Dumbbell } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container footer-content">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo-link">
              <img src="/assets/images/befit-logo.png" alt="Be Fit Gym" className="footer-logo-img" />
            </a>
            <p className="footer-brand-desc">
              High-performance training club dedicated to heavy iron, Olympic lifting mechanics, and transformational coaching. Built for athletes and dedicated achievers.
            </p>
            <div className="footer-motto">
              <Dumbbell size={16} className="text-orange" />
              <span>Forging Strength Daily</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#timings">Daily Schedule &amp; Batches</a></li>
              <li><a href="#facilities">World-Class Facilities</a></li>
              <li><a href="#calculator">BMI &amp; Macro Calculator</a></li>
              <li><a href="#contact">Contact &amp; Free Pass</a></li>
            </ul>
          </div>

          {/* Timings */}
          <div className="footer-col">
            <h4 className="footer-col-title">Operating Schedule</h4>
            <div className="footer-hours-list">
              <div className="hour-entry">
                <strong>Monday – Saturday:</strong>
                <p>5:30 AM – 10:00 PM (Continuous)</p>
              </div>
              <div className="hour-entry">
                <strong>Sunday Special:</strong>
                <p>6:00 AM – 10:00 AM (Morning Only)</p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="footer-col">
            <h4 className="footer-col-title">Front Desk</h4>
            <div className="footer-contact-info">
              <p>
                <Phone size={14} className="text-orange inline-icon" />
                <span>+91 97121 29393</span>
              </p>
              <p>
                <Clock size={14} className="text-orange inline-icon" />
                <span>Front Desk Assistance during all batch hours</span>
              </p>
              <p>
                <MapPin size={14} className="text-orange inline-icon" />
                <span>Ground &amp; 1st Floor, Fitness Boulevard</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} BE FIT GYM. All rights reserved.
          </div>

          <button 
            type="button" 
            className="back-to-top-btn" 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
