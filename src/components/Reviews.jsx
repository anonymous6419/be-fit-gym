import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Rohit Sharma',
      duration: 'Member for 14 Months',
      achievement: 'Dropped 18kg Fat • Gained 6kg Lean Mass',
      text: 'The atmosphere at Be Fit Gym is unmatched. The equipment is top-tier — especially the Olympic platforms and heavy dumbbells. Coach Alex corrected my deadlift setup and my lower back pain completely vanished.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Patel',
      duration: 'Member for 9 Months',
      achievement: 'Squat PR: 95kg • Core Transformation',
      text: 'I used to feel intimidated in standard commercial gyms, but the community and coaches here made me feel welcome from Day 1. The 5:30 AM early morning session gives me unstoppable energy for my entire workday.',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Verma',
      duration: 'Member for 2 Years',
      achievement: 'Deadlift PR: 210kg • Bench: 130kg',
      text: 'If you are serious about heavy iron and progressive overload, there is literally no other gym in the area that compares. Calibrated plates, rock-solid racks, and trainers who actually practice what they preach.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding reviews-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Quote size={14} className="text-orange" />
            <span>Proven Member Outcomes</span>
          </div>
          <h2 className="section-title">
            REAL MEMBERS, <span className="highlight">REAL RESULTS</span>
          </h2>
          <p className="section-subtitle">
            Over 2,500 athletes and everyday achievers have transformed their bodies and discipline inside Be Fit Gym. Here is what they have to say.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-stars-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FF6600" color="#FF6600" />
                ))}
              </div>

              <p className="review-quote">"{rev.text}"</p>

              <div className="review-author-wrap">
                <div className="author-avatar-initials">
                  {rev.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="author-name">
                    {rev.name}
                    <span className="verified-badge">
                      <CheckCircle2 size={13} className="text-orange" /> Verified
                    </span>
                  </h4>
                  <p className="author-duration">{rev.duration}</p>
                  <span className="author-achievement">{rev.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
