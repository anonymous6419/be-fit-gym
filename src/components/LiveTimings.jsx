import React, { useState } from 'react';
import { Clock, Zap, Sun, Moon, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { GYM_SCHEDULE } from '../utils/timingsEngine';
import { openWhatsApp, WA_TEMPLATES } from '../utils/whatsapp';

export default function LiveTimings({ liveStatus, onOpenTrialModal }) {
  const [activeTab, setActiveTab] = useState(liveStatus.isSunday ? 'sunday' : 'weekday');
  const { isOpen, nextSessionInfo, activeBatchId, timeFormatted } = liveStatus;

  const currentBatches = activeTab === 'weekday' 
    ? GYM_SCHEDULE.weekdayBatches 
    : GYM_SCHEDULE.sundayBatches;

  return (
    <section className="section-padding timings-section" id="timings">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Clock size={14} className="text-orange" />
            <span>Real-Time Operation Hours</span>
          </div>
          <h2 className="section-title">
            DAILY GYM <span className="highlight">SCHEDULE & BATCHES</span>
          </h2>
          <p className="section-subtitle">
            Engineered around your busy lifestyle. Whether you crush heavy iron at sunrise or unwind late at night, Be Fit Gym never stops powering your transformation.
          </p>
        </div>

        {/* Live Status Hero Banner */}
        <div className="live-status-hero-card">
          <div className="live-status-info">
            <div className="live-status-pill-wrap">
              <span className={`pulse-dot ${!isOpen ? 'closed' : ''}`}></span>
              <span className="live-status-pill-text">
                {isOpen ? 'FACILITY IS CURRENTLY OPEN' : 'FACILITY IS CURRENTLY CLOSED'}
              </span>
            </div>
            <h3 className="live-status-title">
              {isOpen ? 'Floor is Live & Coaches on Duty' : 'Recovery & Sanitation Mode'}
            </h3>
            <p className="live-status-countdown">
              {nextSessionInfo}
            </p>
          </div>

          <div className="live-clock-box">
            <div className="live-clock-label">
              <span className="clock-ticker-dot"></span> LIVE SYSTEM CLOCK
            </div>
            <div className="live-clock-time">{timeFormatted}</div>
            <div className="live-clock-sub">Auto-synced with facility schedule</div>
          </div>
        </div>

        {/* Schedule Tabs */}
        <div className="timings-tabs-wrap">
          <button
            type="button"
            className={`timings-tab-btn ${activeTab === 'weekday' ? 'active' : ''}`}
            onClick={() => setActiveTab('weekday')}
          >
            <Sun size={18} />
            <span>Monday – Saturday (5:30 AM – 10:00 PM)</span>
            <span className="tab-pill">Continuous Access</span>
          </button>

          <button
            type="button"
            className={`timings-tab-btn ${activeTab === 'sunday' ? 'active' : ''}`}
            onClick={() => setActiveTab('sunday')}
          >
            <Calendar size={18} />
            <span>Sunday Special (6:00 AM – 10:00 AM)</span>
            <span className="tab-pill">Morning Special</span>
          </button>
        </div>

        {/* Batches Grid */}
        <div className="batches-grid">
          {currentBatches.map((batch) => {
            const isCurrentlyActive = isOpen && (batch.id === activeBatchId);

            return (
              <div 
                key={batch.id} 
                className={`batch-card ${isCurrentlyActive ? 'active-batch' : ''}`}
              >
                {isCurrentlyActive && (
                  <div className="active-batch-badge">
                    <span className="active-dot"></span> LIVE NOW
                  </div>
                )}

                <div className="batch-header">
                  <span className="batch-time-pill">
                    <Clock size={14} className="text-orange" />
                    <span>{batch.timeStr}</span>
                  </span>
                  <span className="batch-tag">{batch.tag}</span>
                </div>

                <h4 className="batch-title">{batch.name}</h4>
                <p className="batch-desc">{batch.focus}</p>

                <div className="batch-footer">
                  <div className="batch-intensity">
                    <Zap size={14} className="text-orange" />
                    <span>Intensity: <strong>{batch.intensity}</strong></span>
                  </div>

                  <button 
                    type="button" 
                    className="batch-book-btn"
                    onClick={() => openWhatsApp(WA_TEMPLATES.batch(batch.name, batch.timeStr))}
                  >
                    <i className="fa-brands fa-whatsapp" style={{ marginRight: '0.35rem' }}></i>
                    <span>Inquire on WA</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pro Tip Card */}
        <div className="timings-recommendation-card">
          <div className="recom-icon">
            <CheckCircle2 size={24} className="text-orange" />
          </div>
          <div className="recom-content">
            <h4>Flexible Access All Day Long</h4>
            <p>
              Your membership allows you to enter any batch at your convenience. If you prefer a quieter gym floor with zero wait times for squat racks, we highly recommend our <strong>12:00 PM to 4:30 PM</strong> afternoon slot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
