import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

export default function TopBar({ liveStatus, onOpenTrialModal }) {
  const { isOpen, nextSessionInfo } = liveStatus;

  return (
    <aside className="top-bar" aria-label="Gym status announcement">
      <div className="container top-bar-content">
        {/* Live Status Badge */}
        <div className="live-badge-wrapper">
          <span className={`pulse-dot ${!isOpen ? 'closed' : ''}`}></span>
          <div className="live-status-badge">
            <strong className={`live-status-text ${isOpen ? 'text-status-open' : 'text-status-closed'}`}>
              {isOpen ? 'OPEN NOW' : 'CLOSED'}
            </strong>
            <span className="status-separator">•</span>
            <span className="status-info-text">{nextSessionInfo || 'Checking live timings...'}</span>
          </div>
        </div>

        {/* Operating Hours (Scoped to desktop to prevent mobile header blowout) */}
        <div className="top-bar-hours desktop-only-hours">
          <Clock className="top-bar-icon text-orange" size={14} />
          <span>
            Mon - Sat: <strong>5:30 AM - 10:00 PM</strong> | Sun: <strong>6:00 AM - 10:00 AM</strong>
          </span>
        </div>

        {/* Fast Action VIP Pass (Replaced WhatsApp/Phone with clean direct action) */}
        <div className="top-bar-action">
          <button 
            type="button" 
            className="top-bar-trial-pill" 
            onClick={() => onOpenTrialModal('1-Day VIP Trial Pass')}
          >
            <Sparkles size={13} className="text-orange" />
            <span>1-Day Free VIP Pass</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
