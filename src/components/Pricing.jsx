import React, { useState } from 'react';
import { Check, Shield, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { openWhatsApp, WA_TEMPLATES } from '../utils/whatsapp';

export default function Pricing({ onOpenTrialModal }) {
  const [billingCycle, setBillingCycle] = useState('quarterly'); // 'monthly' | 'quarterly' | 'annual'

  const pricingData = [
    {
      id: 'standard',
      name: 'Standard Iron',
      tagline: 'Essential access for disciplined solo lifters.',
      prices: {
        monthly: 1499,
        quarterly: 3999,
        annual: 12999
      },
      badge: null,
      isFeatured: false,
      features: [
        'Full access to all free weights & platforms',
        'Access to morning & evening batch hours',
        'High-speed Wi-Fi & lockers',
        'Initial biomechanical assessment',
        'Standard floor trainer assistance'
      ]
    },
    {
      id: 'pro',
      name: 'Pro Athlete',
      tagline: 'Our most popular comprehensive transformation track.',
      prices: {
        monthly: 2499,
        quarterly: 5999,
        annual: 18999
      },
      badge: 'Most Popular',
      isFeatured: true,
      features: [
        'Everything in Standard Iron',
        'Unlimited access to all batches all day',
        'Personalized nutrition & calorie blueprint',
        'Bi-weekly body composition & progress scan',
        'Access to specialized functional turf & HIIT zone',
        'Priority locker allocation'
      ]
    },
    {
      id: 'vip',
      name: 'Elite VIP + Coaching',
      tagline: 'Direct 1-on-1 mentorship for guaranteed peak results.',
      prices: {
        monthly: 4999,
        quarterly: 12999,
        annual: 39999
      },
      badge: 'Ultimate',
      isFeatured: false,
      features: [
        'Everything in Pro Athlete',
        'Dedicated 1-on-1 Master Trainer coaching',
        'Custom progressive overload programming',
        'Supplementation & recovery protocol planning',
        'Complimentary guest passes (2 per month)',
        'VIP locker & complimentary workout towel service'
      ]
    }
  ];

  const getPriceSuffix = () => {
    if (billingCycle === 'monthly') return '/month';
    if (billingCycle === 'quarterly') return '/quarter';
    return '/year';
  };

  return (
    <section className="section-padding pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Shield size={14} className="text-orange" />
            <span>Transparent Memberships</span>
          </div>
          <h2 className="section-title">
            FLEXIBLE <span className="highlight">MEMBERSHIP TIERS</span>
          </h2>
          <p className="section-subtitle">
            Zero hidden maintenance fees. Invest in world-class equipment, elite coaching, and a driven community that pushes you forward every single rep.
          </p>
        </div>

        {/* Billing Switcher */}
        <div className="pricing-toggle-wrap">
          <button
            type="button"
            className={`pricing-toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>

          <button
            type="button"
            className={`pricing-toggle-btn ${billingCycle === 'quarterly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('quarterly')}
          >
            Quarterly
            <span className="save-badge">Save 15%</span>
          </button>

          <button
            type="button"
            className={`pricing-toggle-btn ${billingCycle === 'annual' ? 'active' : ''}`}
            onClick={() => setBillingCycle('annual')}
          >
            Annual
            <span className="save-badge">Save 30%</span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {pricingData.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.isFeatured ? 'featured' : ''}`}
            >
              {plan.badge && (
                <div className="pricing-badge-top">
                  <Sparkles size={13} />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
              </div>

              <div className="plan-price-box">
                <span className="currency">₹</span>
                <span className="price-num">{plan.prices[billingCycle].toLocaleString()}</span>
                <span className="price-suffix">{getPriceSuffix()}</span>
              </div>

              <div className="plan-features-list">
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="plan-feat-item">
                    <span className="feat-check">
                      <Check size={14} className="text-orange" />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className={`btn ${plan.isFeatured ? 'btn-whatsapp' : 'btn-outline'} plan-cta-btn`}
                style={{ width: '100%' }}
                onClick={() => openWhatsApp(WA_TEMPLATES.membership(plan.name, billingCycle.toUpperCase()))}
              >
                <i className="fa-brands fa-whatsapp" style={{ marginRight: '0.4rem', fontSize: '1.1rem' }}></i>
                <span>Join {plan.name} on WhatsApp</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
