import React from 'react';
import { Eye, Shield, Compass, Sparkles } from 'lucide-react';

export default function Facilities({ onOpenLightbox }) {
  const facilityItems = [
    {
      id: 1,
      title: 'Heavy Iron & Olympic Platforms',
      category: 'Free Weights Arena',
      image: '/assets/images/workout-strength.jpg',
      desc: 'Competition-grade bumper plates, Texas power bars, dumbbells up to 60kg, and dedicated shock-absorbing deadlift platforms.'
    },
    {
      id: 2,
      title: 'Functional Turf & Athletic Conditioning',
      category: 'Performance Zone',
      image: '/assets/images/facility-functional.jpg',
      desc: '40ft synthetic turf lane equipped with heavy weighted sleds, battle ropes, plyometric boxes, and agility rigs.'
    },
    {
      id: 3,
      title: 'Biomechanical Isolateral Strength Suite',
      category: 'Hypertrophy Machines',
      image: '/assets/images/hero-bg.jpg',
      desc: 'Precision angle cable towers, chest-supported rowing stations, and diverging arm presses for injury-free joint mechanics.'
    }
  ];

  const facilityFeatures = [
    { title: 'Air-Conditioned & Filtered', desc: 'Hospital-grade HEPA ventilation ensuring crisp, cool oxygen flow during intense sets.' },
    { title: 'Clean & Sanitized Floor', desc: 'Continuous floor disinfection routine throughout every batch shift.' },
    { title: 'Spacious Luxury Lockers', desc: 'Secure digital key lockers, modern shower stations, and changing facilities.' },
    { title: 'Sound & High-Energy Acoustics', desc: 'Premium acoustic surround-sound playing motivational workout playlists.' }
  ];

  return (
    <section className="section-padding facilities-section" id="facilities">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} className="text-orange" />
            <span>State-of-the-Art Infrastructure</span>
          </div>
          <h2 className="section-title">
            WORLD-CLASS <span className="highlight">FACILITIES</span>
          </h2>
          <p className="section-subtitle">
            Every square foot of Be Fit Gym is engineered for maximum performance, hygiene, and iron precision. Inspect our training floor below.
          </p>
        </div>

        {/* Gallery Cards */}
        <div className="facilities-grid">
          {facilityItems.map((item) => (
            <div 
              key={item.id} 
              className="facility-card"
              onClick={() => onOpenLightbox({ img: item.image, title: item.title, desc: item.desc })}
            >
              <div className="facility-img-wrap">
                <img src={item.image} alt={item.title} className="facility-img" />
                <div className="facility-overlay">
                  <div className="view-badge">
                    <Eye size={16} />
                    <span>Click to Inspect</span>
                  </div>
                </div>
              </div>
              <div className="facility-content">
                <span className="facility-cat">{item.category}</span>
                <h3 className="facility-title">{item.title}</h3>
                <p className="facility-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Spec Highlights */}
        <div className="facility-specs-grid">
          {facilityFeatures.map((feat, idx) => (
            <div key={idx} className="spec-item">
              <div className="spec-check">✓</div>
              <div>
                <h4 className="spec-title">{feat.title}</h4>
                <p className="spec-desc">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
