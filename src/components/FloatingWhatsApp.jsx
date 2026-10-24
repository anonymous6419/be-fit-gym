import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Clock, ShieldCheck, Dumbbell } from 'lucide-react';
import { openWhatsApp, WA_TEMPLATES, WHATSAPP_NUMBER } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');

  const handleSendCustom = (e) => {
    e.preventDefault();
    if (inputQuery.trim()) {
      openWhatsApp(`Hello Be Fit Gym! Regarding my inquiry: "${inputQuery.trim()}". Could you please share the details and timings?`);
      setInputQuery('');
      setIsOpen(false);
    } else {
      openWhatsApp(WA_TEMPLATES.general());
      setIsOpen(false);
    }
  };

  const handleQuickPrompt = (promptType) => {
    setIsOpen(false);
    switch (promptType) {
      case 'timings':
        openWhatsApp('Hi Be Fit Gym! I would like to inquire about your daily gym timings (Mon-Sat: 5:30 AM - 10:00 PM, Sun: 6:00 AM - 10:00 AM) and batch availability.');
        break;
      case 'membership':
        openWhatsApp('Hello Be Fit Gym! Please share your monthly, quarterly, and annual membership fee plans and ongoing discount offers.');
        break;
      case 'trial':
        openWhatsApp('Hi Be Fit Gym! I would like to claim a 1-Day Free VIP Trial Pass to inspect the floor, equipment, and coach guidance.');
        break;
      case 'trainer':
        openWhatsApp('Hello Be Fit Gym! I would like to inquire about certified personal training packages, 1-on-1 coaching, and custom diet plans.');
        break;
      default:
        openWhatsApp(WA_TEMPLATES.general());
    }
  };

  return (
    <aside className="floating-whatsapp-wrap" aria-label="WhatsApp Direct Support">
      {/* Floating CTA pill tooltip */}
      {!isOpen && (
        <div 
          className="floating-tooltip-pill"
          onClick={() => setIsOpen(true)}
        >
          <span className="live-indicator"></span>
          <span>Chat on WhatsApp</span>
        </div>
      )}

      {/* Floating Main Button */}
      <button
        type="button"
        className="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Chat"
      >
        <div className="whatsapp-pulse-ring"></div>
        <div className="whatsapp-pulse-ring"></div>
        <i className="fa-brands fa-whatsapp whatsapp-icon-btn"></i>
      </button>

      {/* Quick WhatsApp Inquiry Dialog Popup */}
      {isOpen && (
        <div className="whatsapp-chat-popup active" role="dialog" aria-label="Quick WhatsApp Inquiry">
          <div className="popup-header">
            <div className="popup-brand">
              <div className="popup-avatar">
                <img src="/assets/images/befit-logo.png" alt="Be Fit Gym Logo" />
              </div>
              <div className="popup-info">
                <h5>BE FIT GYM</h5>
                <span>
                  <i className="fa-solid fa-circle text-status-open" style={{ fontSize: '0.55rem' }}></i> Online Support • +91 97121 29393
                </span>
              </div>
            </div>
            <button 
              type="button" 
              className="popup-close-btn" 
              onClick={() => setIsOpen(false)}
              aria-label="Close chat dialog"
            >
              <X size={18} />
            </button>
          </div>

          <div className="popup-body">
            <div className="popup-msg-bubble">
              <strong>Welcome to Be Fit Gym! 👋</strong>
              <p>We are ready to assist you on WhatsApp with daily timings, membership fee packages, free trials, and personal coaching. How can we help you today?</p>
            </div>

            {/* Quick Chips */}
            <div className="quick-prompts-label">Tap to chat instantly:</div>
            <div className="quick-prompt-buttons">
              <button 
                type="button" 
                className="quick-prompt-btn"
                onClick={() => handleQuickPrompt('trial')}
              >
                <span><Sparkles size={13} className="text-orange" style={{ marginRight: '0.4rem' }} /> Claim 1-Day Free Trial</span>
                <i className="fa-brands fa-whatsapp text-whatsapp"></i>
              </button>

              <button 
                type="button" 
                className="quick-prompt-btn"
                onClick={() => handleQuickPrompt('timings')}
              >
                <span><Clock size={13} className="text-orange" style={{ marginRight: '0.4rem' }} /> Gym Timings &amp; Batches</span>
                <i className="fa-brands fa-whatsapp text-whatsapp"></i>
              </button>

              <button 
                type="button" 
                className="quick-prompt-btn"
                onClick={() => handleQuickPrompt('membership')}
              >
                <span><ShieldCheck size={13} className="text-orange" style={{ marginRight: '0.4rem' }} /> Membership Fees &amp; Plans</span>
                <i className="fa-brands fa-whatsapp text-whatsapp"></i>
              </button>

              <button 
                type="button" 
                className="quick-prompt-btn"
                onClick={() => handleQuickPrompt('trainer')}
              >
                <span><Dumbbell size={13} className="text-orange" style={{ marginRight: '0.4rem' }} /> 1-on-1 Personal Coaching</span>
                <i className="fa-brands fa-whatsapp text-whatsapp"></i>
              </button>
            </div>
          </div>

          <form onSubmit={handleSendCustom} className="popup-footer">
            <div className="popup-input-group">
              <input
                type="text"
                placeholder="Type your question here..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                className="popup-input"
              />
              <button type="submit" className="popup-send-btn" aria-label="Send via WhatsApp">
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
    </aside>
  );
}
