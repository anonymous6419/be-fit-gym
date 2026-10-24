import React, { useState, useMemo } from 'react';
import { Calculator, Flame, Activity, Sparkles, Dumbbell, ArrowRight } from 'lucide-react';
import { calculateFitnessMetrics } from '../utils/calculatorEngine';
import { openWhatsApp, WA_TEMPLATES } from '../utils/whatsapp';

export default function BmiCalculator({ onOpenTrialModal }) {
  const [gender, setGender] = useState('male');
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(74);
  const [age, setAge] = useState(26);
  const [activity, setActivity] = useState(1.55);
  const [goal, setGoal] = useState('muscle');

  const metrics = useMemo(() => {
    return calculateFitnessMetrics({
      gender,
      heightCm: Number(heightCm) || 170,
      weightKg: Number(weightKg) || 70,
      age: Number(age) || 25,
      activity: Number(activity) || 1.55,
      goal
    });
  }, [gender, heightCm, weightKg, age, activity, goal]);

  return (
    <section className="section-padding calculator-section" id="calculator">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Calculator size={14} className="text-orange" />
            <span>Interactive Biometrics Engine</span>
          </div>
          <h2 className="section-title">
            FITNESS &amp; CALORIE <span className="highlight">CALCULATOR</span>
          </h2>
          <p className="section-subtitle">
            Get instant personalized body statistics, exact daily energy requirements, and protein targets calculated to match your transformation goal.
          </p>
        </div>

        <div className="calculator-wrapper">
          {/* Controls Form */}
          <div className="calculator-form-card">
            <h3 className="calc-card-title">Enter Your Personal Metrics</h3>

            {/* Gender Toggle */}
            <div className="calc-gender-toggle">
              <button
                type="button"
                className={`gender-btn ${gender === 'male' ? 'active' : ''}`}
                onClick={() => setGender('male')}
              >
                <span>♂ Male</span>
              </button>
              <button
                type="button"
                className={`gender-btn ${gender === 'female' ? 'active' : ''}`}
                onClick={() => setGender('female')}
              >
                <span>♀ Female</span>
              </button>
            </div>

            {/* Inputs Grid */}
            <div className="calc-inputs-grid">
              <div className="calc-field">
                <label htmlFor="heightInput">Height (cm)</label>
                <div className="input-with-slider">
                  <input
                    id="heightInput"
                    type="number"
                    min="120"
                    max="230"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="calc-input"
                  />
                  <input
                    type="range"
                    min="120"
                    max="220"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="calc-range"
                  />
                </div>
              </div>

              <div className="calc-field">
                <label htmlFor="weightInput">Weight (kg)</label>
                <div className="input-with-slider">
                  <input
                    id="weightInput"
                    type="number"
                    min="35"
                    max="180"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    className="calc-input"
                  />
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    className="calc-range"
                  />
                </div>
              </div>

              <div className="calc-field">
                <label htmlFor="ageInput">Age (Years)</label>
                <input
                  id="ageInput"
                  type="number"
                  min="14"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="calc-input"
                />
              </div>

              <div className="calc-field">
                <label htmlFor="activitySelect">Activity Multiplier</label>
                <select
                  id="activitySelect"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="calc-select"
                >
                  <option value={1.2}>Sedentary (Office / Desk Job)</option>
                  <option value={1.375}>Lightly Active (1-3 gym days/week)</option>
                  <option value={1.55}>Moderately Active (3-5 gym days/week)</option>
                  <option value={1.725}>Very Active (6-7 intense training sessions)</option>
                  <option value={1.9}>Elite Athlete / Heavy Physical Labor</option>
                </select>
              </div>
            </div>

            {/* Goal Selector */}
            <div className="calc-goal-group">
              <label className="field-lbl">Primary Transformation Goal</label>
              <div className="goal-options-grid">
                <button
                  type="button"
                  className={`goal-btn ${goal === 'loss' ? 'active' : ''}`}
                  onClick={() => setGoal('loss')}
                >
                  <Flame size={16} />
                  <span>Fat Loss (Deficit)</span>
                </button>

                <button
                  type="button"
                  className={`goal-btn ${goal === 'muscle' ? 'active' : ''}`}
                  onClick={() => setGoal('muscle')}
                >
                  <Dumbbell size={16} />
                  <span>Build Muscle (Surplus)</span>
                </button>

                <button
                  type="button"
                  className={`goal-btn ${goal === 'maintain' ? 'active' : ''}`}
                  onClick={() => setGoal('maintain')}
                >
                  <Activity size={16} />
                  <span>Maintain &amp; Tone</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="calculator-results-card">
            <h3 className="calc-card-title">Calculated Biometric Profile</h3>

            {/* BMI Display */}
            <div className="bmi-display-box">
              <div className="bmi-score-wrap">
                <span className="bmi-score-num">{metrics.bmi}</span>
                <span className="bmi-score-unit">BMI Index</span>
              </div>
              <div 
                className="bmi-category-tag" 
                style={{ backgroundColor: metrics.categoryBg, color: metrics.categoryColor }}
              >
                {metrics.category}
              </div>
            </div>

            {/* Visual Gauge */}
            <div className="bmi-meter-track">
              <div 
                className="bmi-meter-bar" 
                style={{ width: `${metrics.meterPercent}%`, backgroundColor: metrics.categoryColor }}
              ></div>
            </div>
            <div className="bmi-scale-labels">
              <span>Underweight</span>
              <span>Normal</span>
              <span>Overweight</span>
              <span>Obese</span>
            </div>

            {/* Macros Breakdown */}
            <div className="calc-macros-grid">
              <div className="macro-card highlight-calorie">
                <span className="macro-label">Daily Calories</span>
                <h4 className="macro-val">{metrics.targetCalories} <small>kcal</small></h4>
                <p className="macro-sub">TDEE Adjusted</p>
              </div>

              <div className="macro-card">
                <span className="macro-label">Target Protein</span>
                <h4 className="macro-val">{metrics.targetProtein} <small>g/day</small></h4>
                <p className="macro-sub">Optimal Muscle Repair</p>
              </div>

              <div className="macro-card">
                <span className="macro-label">Carbohydrates</span>
                <h4 className="macro-val">{metrics.targetCarbs} <small>g</small></h4>
                <p className="macro-sub">Sustained Training Fuel</p>
              </div>

              <div className="macro-card">
                <span className="macro-label">Essential Fats</span>
                <h4 className="macro-val">{metrics.targetFats} <small>g</small></h4>
                <p className="macro-sub">Hormonal Balance</p>
              </div>
            </div>

            {/* Recommended Track & CTA */}
            <div className="calc-recommendation-box">
              <div className="rec-text">
                <span className="rec-badge">Recommended Track</span>
                <h5>{metrics.recommendedProgram}</h5>
              </div>
              <button 
                type="button" 
                className="btn btn-whatsapp btn-sm"
                onClick={() => openWhatsApp(WA_TEMPLATES.calculator(metrics))}
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.1rem' }}></i>
                <span>Get This Diet &amp; Workout on WhatsApp</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
