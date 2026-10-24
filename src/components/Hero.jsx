import React from 'react';
import { Flame, Clock, Award, ShieldCheck, Users } from 'lucide-react';
import { openWhatsApp, WA_TEMPLATES } from '../utils/whatsapp';

export default function Hero({ onOpenTrialModal }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-overlay"></div>
      <div className="hero-glow-blob"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Flame size={16} className="text-orange" />
            <span>Unleash Your True Potential</span>
          </div>

          <h1 className="hero-title">
            FORGE YOUR <span className="highlight">STRONGEST BODY</span> AT BE FIT GYM
          </h1>

          <p className="hero-desc">
            World-class biomechanical equipment, certified elite coaches, and a relentless high-energy atmosphere tailored to deliver guaranteed fitness &amp; muscle transformations.
          </p>

          <div className="hero-cta-group">
            <button 
              type="button" 
              className="btn btn-whatsapp"
              onClick={() => openWhatsApp(WA_TEMPLATES.vipPass())}
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.25rem' }}></i>
              <span>Claim VIP Pass on WhatsApp</span>
            </button>

            <a href="#timings" className="btn btn-outline">
              <Clock size={18} />
              <span>View Gym Timings</span>
            </a>
          </div>

          {/* Quick Highlight Stats */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="stat-icon-wrap">
                <Clock size={20} className="text-orange" />
              </div>
              <div className="stat-info">
                <h4>5:30 AM – 10 PM</h4>
                <p>Continuous Daily Access</p>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon-wrap">
                <Award size={20} className="text-orange" />
              </div>
              <div className="stat-info">
                <h4>World-Class</h4>
                <p>Biomechanical Iron</p>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon-wrap">
                <ShieldCheck size={20} className="text-orange" />
              </div>
              <div className="stat-info">
                <h4>15+ Years</h4>
                <p>Master Coach Guidance</p>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon-wrap">
                <Users size={20} className="text-orange" />
              </div>
              <div className="stat-info">
                <h4>2,500+</h4>
                <p>Member Transformations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
