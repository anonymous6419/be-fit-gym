import React, { useState } from 'react';
import { Phone, Clock, MapPin, Send, MessageCircle } from 'lucide-react';
import { openWhatsApp, WA_TEMPLATES } from '../utils/whatsapp';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    batch: 'Early Morning (5:30 AM – 8:30 AM)',
    goal: 'Build Muscle & Strength',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const waText = WA_TEMPLATES.vipPass({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      batch: formData.batch,
      goal: formData.goal,
      notes: formData.message.trim()
    });
    openWhatsApp(waText);
  };

  const handleDirectWhatsApp = () => {
    openWhatsApp(WA_TEMPLATES.general());
  };

  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Send size={14} className="text-orange" />
            <span>Instant WhatsApp Communication</span>
          </div>
          <h2 className="section-title">
            CONNECT DIRECTLY &amp; <span className="highlight">START TODAY</span>
          </h2>
          <p className="section-subtitle">
            Skip long waitlists and complicated paperwork. Message our official desk directly on WhatsApp or submit your inquiry below to chat with our team right away.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Contact Details Cards */}
          <div className="contact-info-column">
            {/* Direct WhatsApp Card */}
            <div className="contact-info-card whatsapp-highlight-card" onClick={handleDirectWhatsApp} style={{ cursor: 'pointer' }}>
              <div className="contact-icon-box whatsapp-box-bg">
                <i className="fa-brands fa-whatsapp text-whatsapp" style={{ fontSize: '1.6rem' }}></i>
              </div>
              <div className="contact-details-box">
                <h4>WhatsApp Official Support</h4>
                <p>Instant answers regarding timings, slot bookings, and admission.</p>
                <span className="contact-link text-whatsapp">
                  +91 97121 29393 &rarr;
                </span>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Phone size={22} className="text-orange" />
              </div>
              <div className="contact-details-box">
                <h4>Call Front Desk</h4>
                <p>Direct phone line for quick membership verification.</p>
                <a href="tel:+919712129393" className="contact-link">
                  +91 97121 29393
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Clock size={20} className="text-orange" />
              </div>
              <div className="contact-details-box">
                <h4>Daily Operating Hours</h4>
                <div className="contact-hours-list">
                  <div className="contact-hours-item">
                    <div className="hours-head">
                      <span className="hours-day-name">Mon – Sat</span>
                      <span className="hours-chip chip-continuous">Continuous</span>
                    </div>
                    <div className="hours-time-range">5:30 AM – 10:00 PM</div>
                  </div>
                  <div className="contact-hours-item">
                    <div className="hours-head">
                      <span className="hours-day-name">Sunday</span>
                      <span className="hours-chip chip-special">Special Batch</span>
                    </div>
                    <div className="hours-time-range">6:00 AM – 10:00 AM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <MapPin size={22} className="text-orange" />
              </div>
              <div className="contact-details-box">
                <h4>Gym Location</h4>
                <p>Ground &amp; 1st Floor, Fitness Boulevard, Commercial Hub</p>
                <span className="location-landmark">Ample member parking available</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card">
            <div className="form-card-badge">
              <i className="fa-brands fa-whatsapp text-whatsapp"></i>
              <span>Direct WhatsApp Dispatch</span>
            </div>
            <h3 className="form-card-title">Book Your 1-Day VIP Pass</h3>
            <p className="form-card-subtitle">
              Fill in your details below and hit submit to open a pre-filled WhatsApp message with our desk team.
            </p>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="formName">Full Name</label>
                <input
                  id="formName"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formPhone">Phone Number</label>
                <input
                  id="formPhone"
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="formBatch">Preferred Batch</label>
                  <select
                    id="formBatch"
                    value={formData.batch}
                    onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                    className="form-select"
                  >
                    <option value="Early Morning (5:30 AM – 8:30 AM)">Early Morning (5:30 AM – 8:30 AM)</option>
                    <option value="Mid-Morning (8:30 AM – 12:00 PM)">Mid-Morning (8:30 AM – 12:00 PM)</option>
                    <option value="Afternoon Floor (12:00 PM – 4:30 PM)">Afternoon Floor (12:00 PM – 4:30 PM)</option>
                    <option value="Evening Prime (4:30 PM – 8:00 PM)">Evening Prime (4:30 PM – 8:00 PM)</option>
                    <option value="Night Owl (8:00 PM – 10:00 PM)">Night Owl (8:00 PM – 10:00 PM)</option>
                    <option value="Sunday Special (6:00 AM – 10:00 AM)">Sunday Special (6:00 AM – 10:00 AM)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="formGoal">Transformation Goal</label>
                  <select
                    id="formGoal"
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="form-select"
                  >
                    <option value="Build Muscle & Strength">Build Muscle &amp; Strength</option>
                    <option value="Fat Loss & Conditioning">Fat Loss &amp; Conditioning</option>
                    <option value="Functional Longevity & Mobility">Functional Longevity &amp; Mobility</option>
                    <option value="General Health & Stamina">General Health &amp; Stamina</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="formMessage">Questions or Special Requests (Optional)</label>
                <textarea
                  id="formMessage"
                  rows="3"
                  placeholder="Tell us about your fitness history or specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-whatsapp form-submit-btn"
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.25rem' }}></i>
                <span>Confirm &amp; Chat on WhatsApp</span>
              </button>
              <div className="form-submit-note">
                <i className="fa-solid fa-bolt text-whatsapp"></i>
                <span>Direct desk dispatch to +91 97121 29393</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
