import React from 'react';
import { Award, Dumbbell, ShieldCheck, ArrowRight } from 'lucide-react';
import { openWhatsApp, WA_TEMPLATES } from '../utils/whatsapp';

export default function Coaches({ onOpenTrialModal }) {
  const coaches = [
    {
      id: 1,
      name: 'Alex Rivera',
      title: 'Head Coach & Biomechanics Specialist',
      experience: '11+ Years Experience',
      image: '/assets/images/trainer-alex.jpg',
      specialties: ['Compound Lift Biomechanics', 'Injury Rehab & Spine Mechanics', 'Powerlifting Peaking'],
      certification: 'CSCS® • ISSA Master Trainer'
    },
    {
      id: 2,
      name: 'Elena Rostova',
      title: 'Strength & Conditioning Specialist',
      experience: '8+ Years Experience',
      image: '/assets/images/trainer-elena.jpg',
      specialties: ['Metabolic Conditioning', 'Female Strength & Glute Hypertrophy', 'Athletic Agility'],
      certification: 'NASM-CPT • Precision Nutrition Level 2'
    },
    {
      id: 3,
      name: 'Marcus Vance',
      title: 'Olympic Weightlifting & Hypertrophy Coach',
      experience: '10+ Years Experience',
      image: '/assets/images/trainer-marcus.jpg',
      specialties: ['Olympic Clean & Snatch', 'Maximal Muscle Hypertrophy', 'Macro & Contest Prep'],
      certification: 'USAW Level 2 • ACE Certified'
    }
  ];

  return (
    <section className="section-padding coaches-section" id="trainers">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} className="text-orange" />
            <span>World-Class Mentorship</span>
          </div>
          <h2 className="section-title">
            MEET OUR <span className="highlight">MASTER COACHES</span>
          </h2>
          <p className="section-subtitle">
            No guesswork. Our internationally certified coaches analyze your anatomy, teach strict execution mechanics, and guide every phase of your journey.
          </p>
        </div>

        <div className="coaches-grid">
          {coaches.map((coach) => (
            <div key={coach.id} className="coach-card">
              <div className="coach-img-wrapper">
                <img src={coach.image} alt={coach.name} className="coach-img" />
                <div className="coach-exp-badge">
                  <ShieldCheck size={13} className="text-orange" />
                  <span>{coach.experience}</span>
                </div>
              </div>

              <div className="coach-details">
                <h3 className="coach-name">{coach.name}</h3>
                <p className="coach-role">{coach.title}</p>
                <div className="coach-cert">{coach.certification}</div>

                <div className="coach-specialties">
                  {coach.specialties.map((spec, idx) => (
                    <span key={idx} className="spec-pill">
                      {spec}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn btn-outline btn-sm coach-book-btn"
                  onClick={() => openWhatsApp(WA_TEMPLATES.coach(coach.name, coach.specialties[0]))}
                >
                  <i className="fa-brands fa-whatsapp text-whatsapp" style={{ marginRight: '0.35rem', fontSize: '1.05rem' }}></i>
                  <span>Chat with {coach.name.split(' ')[0]} on WA</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
