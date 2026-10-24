import React, { useState } from 'react';
import { Dumbbell, Target, Zap, Activity, Flame, ArrowUpRight } from 'lucide-react';
import { openWhatsApp, WA_TEMPLATES } from '../utils/whatsapp';

export default function Programs({ onOpenTrialModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const programs = [
    {
      id: 'strength',
      category: 'strength',
      title: 'Powerlifting & Heavy Iron',
      badge: 'Core Program',
      desc: 'Master the barbell squat, bench press, deadlift, and overhead press under strict coaching to maximize pure raw tendon and muscular power.',
      duration: '12 Weeks',
      intensity: 'High / Elite',
      icon: <Dumbbell className="text-orange" size={26} />,
      highlights: ['Biomechanical form checks', 'Periodized progressive overload', 'Competition-grade calibrated plates']
    },
    {
      id: 'hypertrophy',
      category: 'hypertrophy',
      title: 'Aesthetic Bodybuilding & Hypertrophy',
      badge: 'Most Popular',
      desc: 'Sculpt dense muscle mass, balance symmetry, and target individual heads with optimal biomechanical isolation and high-volume time-under-tension.',
      duration: '16 Weeks',
      intensity: 'Intense',
      icon: <Flame className="text-orange" size={26} />,
      highlights: ['Drop-sets and rest-pause protocols', 'Targeted muscle group splits', 'Posing and mind-muscle mastery']
    },
    {
      id: 'shred',
      category: 'shred',
      title: 'Metabolic HIIT & Fat Shredder',
      badge: 'Fast Results',
      desc: 'High-octane conditioning circuits combining assault bikes, kettlebell swings, and sled pushes designed to incinerate stubborn body fat while preserving lean muscle.',
      duration: '8 Weeks',
      intensity: 'High Speed',
      icon: <Zap className="text-orange" size={26} />,
      highlights: ['EPOC calorie afterburn boost', 'Heart-rate zone conditioning', 'Endurance & stamina expansion']
    },
    {
      id: 'functional',
      category: 'functional',
      title: 'Functional Turf & Athletic Mobility',
      badge: 'Longevity Focus',
      desc: 'Fix posture, bulletproof joints, enhance rotational power, and develop real-world athletic agility across our 40-foot synthetic sprint turf.',
      duration: 'Ongoing',
      intensity: 'Dynamic',
      icon: <Activity className="text-orange" size={26} />,
      highlights: ['Joint decompression & mobility', 'Plyometrics and agility cones', 'Core stability and injury prevention']
    }
  ];

  const filteredPrograms = activeCategory === 'all'
    ? programs
    : programs.filter(p => p.category === activeCategory);

  return (
    <section className="section-padding programs-section" id="programs">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Target size={14} className="text-orange" />
            <span>Targeted Training Disciplines</span>
          </div>
          <h2 className="section-title">
            TRANSFORMATION <span className="highlight">PROGRAMS</span>
          </h2>
          <p className="section-subtitle">
            Whether your goal is shattering strength PRs, carving stage-ready aesthetics, or staying pain-free and athletic for life, our certified coaching tracks are designed for you.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="program-filter-bar">
          <button 
            type="button" 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Programs
          </button>
          <button 
            type="button" 
            className={`filter-btn ${activeCategory === 'strength' ? 'active' : ''}`}
            onClick={() => setActiveCategory('strength')}
          >
            Heavy Iron
          </button>
          <button 
            type="button" 
            className={`filter-btn ${activeCategory === 'hypertrophy' ? 'active' : ''}`}
            onClick={() => setActiveCategory('hypertrophy')}
          >
            Hypertrophy
          </button>
          <button 
            type="button" 
            className={`filter-btn ${activeCategory === 'shred' ? 'active' : ''}`}
            onClick={() => setActiveCategory('shred')}
          >
            Fat Shred
          </button>
          <button 
            type="button" 
            className={`filter-btn ${activeCategory === 'functional' ? 'active' : ''}`}
            onClick={() => setActiveCategory('functional')}
          >
            Functional & Mobility
          </button>
        </div>

        {/* Program Cards Grid */}
        <div className="programs-grid">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="program-card">
              <div className="program-header">
                <div className="program-icon-box">
                  {program.icon}
                </div>
                <span className="program-badge-pill">{program.badge}</span>
              </div>

              <h3 className="program-card-title">{program.title}</h3>
              <p className="program-card-desc">{program.desc}</p>

              <div className="program-meta-row">
                <div>
                  <span className="meta-lbl">Duration</span>
                  <strong className="meta-val">{program.duration}</strong>
                </div>
                <div>
                  <span className="meta-lbl">Intensity</span>
                  <strong className="meta-val">{program.intensity}</strong>
                </div>
              </div>

              <div className="program-highlights">
                {program.highlights.map((item, idx) => (
                  <div key={idx} className="highlight-item">
                    <span className="check-bullet">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button 
                type="button" 
                className="btn btn-outline btn-sm program-card-btn"
                onClick={() => openWhatsApp(WA_TEMPLATES.program(program.title))}
              >
                <i className="fa-brands fa-whatsapp text-whatsapp" style={{ marginRight: '0.4rem', fontSize: '1.05rem' }}></i>
                <span>Inquire on WhatsApp</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
