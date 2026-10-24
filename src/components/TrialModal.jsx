import React, { useState, useEffect } from 'react';
import { X, Sparkles, ShieldCheck } from 'lucide-react';
import { openWhatsApp, WA_TEMPLATES } from '../utils/whatsapp';

export default function TrialModal({ isOpen, initialPlan, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('Early Morning (5:30 AM – 8:30 AM)');

  useEffect(() => {
    if (isOpen) {
      setName('');
      setPhone('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = WA_TEMPLATES.vipPass({
      name: name.trim(),
      phone: phone.trim(),
      batch: selectedBatch,
      notes: initialPlan ? `Inquiring for: ${initialPlan}` : ''
    });
    openWhatsApp(message);
    onClose();
  };

  const handleInstantWhatsApp = () => {
    openWhatsApp(
      initialPlan
        ? `Hello Be Fit Gym! I would like to inquire about: "${initialPlan}". Please share slot availability and daily timings.`
        : WA_TEMPLATES.vipPass()
    );
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog-card" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-brand-tag">
            <Sparkles size={14} className="text-orange" />
            <span>Direct WhatsApp Inquiry</span>
          </div>
          <h3 className="modal-title">Claim Your 1-Day Free VIP Pass</h3>
          <p className="modal-subtitle">
            {initialPlan 
              ? `Inquiring for: ${initialPlan}. Connects directly to our desk on WhatsApp.` 
              : 'Message our front desk on WhatsApp to confirm your free 1-Day VIP session and inspect the equipment.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="modalName">Full Name</label>
            <input
              id="modalName"
              type="text"
              required
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="modalPhone">Phone Number</label>
            <input
              id="modalPhone"
              type="tel"
              required
              placeholder="e.g. +91 97121 29393"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="modalBatch">Select Preferred Batch Slot</label>
            <select
              id="modalBatch"
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="form-select"
            >
              <option value="Early Morning (5:30 AM – 8:30 AM)">Early Morning (5:30 AM – 8:30 AM)</option>
              <option value="Mid-Morning (8:30 AM – 12:00 PM)">Mid-Morning (8:30 AM – 12:00 PM)</option>
              <option value="Afternoon Open Floor (12:00 PM – 4:30 PM)">Afternoon Open Floor (12:00 PM – 4:30 PM)</option>
              <option value="Evening Prime (4:30 PM – 8:00 PM)">Evening Prime (4:30 PM – 8:00 PM)</option>
              <option value="Night Owl (8:00 PM – 10:00 PM)">Night Owl (8:00 PM – 10:00 PM)</option>
              <option value="Sunday Special (6:00 AM – 10:00 AM)">Sunday Special (6:00 AM – 10:00 AM)</option>
            </select>
          </div>

          <div className="modal-guarantee">
            <ShieldCheck size={16} className="text-orange" />
            <span>Opens official WhatsApp chat directly with +91 97121 29393.</span>
          </div>

          {/* WhatsApp Direct Submit Button */}
          <button 
            type="submit" 
            className="btn btn-whatsapp" 
            style={{ width: '100%', marginTop: '0.75rem' }}
          >
            <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.25rem' }}></i>
            <span>Confirm &amp; Send on WhatsApp</span>
          </button>

          <button 
            type="button" 
            className="btn btn-outline btn-sm"
            style={{ width: '100%' }}
            onClick={handleInstantWhatsApp}
          >
            <span>Or Chat on WhatsApp Directly &rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
}
