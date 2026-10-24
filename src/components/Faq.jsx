import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What are your exact daily operating hours?',
      a: 'We operate Monday through Saturday from 5:30 AM to 10:00 PM with continuous open access. On Sundays, we host our specialized morning mobility and lifting session from 6:00 AM to 10:00 AM.'
    },
    {
      q: 'Do you offer a complimentary trial pass for first-time visitors?',
      a: 'Yes, absolutely! We provide a 1-Day VIP Trial Pass so you can inspect our equipment, test the atmosphere, and consult with our coaches first-hand. Simply click any "Claim Free Pass" button to reserve your slot.'
    },
    {
      q: 'Can complete beginners join without prior workout experience?',
      a: 'Yes! Every new member receives a complimentary biomechanical assessment and machine orientation. Our floor trainers ensure you learn proper lifting posture and prevent injuries right from day one.'
    },
    {
      q: 'Is diet and nutrition planning included with membership?',
      a: 'Yes, our Pro Athlete and VIP tiers come with personalized caloric breakdowns, macronutrient calculations, and meal structuring tailored to your specific goal (fat loss, hypertrophy, or maintenance).'
    },
    {
      q: 'Are locker and shower facilities available?',
      a: 'Yes, we provide clean, spacious, air-conditioned locker rooms with digital keylocks, private hot showers, and grooming amenities.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section-padding faq-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={14} className="text-orange" />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            FREQUENTLY ASKED <span className="highlight">QUESTIONS</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our batches, memberships, coaching protocols, and facility access.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? <ChevronUp size={20} className="text-orange" /> : <ChevronDown size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
