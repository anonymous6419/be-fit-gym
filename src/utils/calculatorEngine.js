/**
 * BE FIT GYM - Biometric & Caloric Engine
 */

export function calculateFitnessMetrics({
  gender = 'male',
  heightCm = 175,
  weightKg = 72,
  age = 25,
  activity = 1.55,
  goal = 'muscle'
}) {
  const hM = heightCm / 100;
  const bmi = weightKg / (hM * hM);
  const formattedBmi = bmi.toFixed(1);

  let category = 'Normal Weight';
  let categoryColor = '#34D399';
  let categoryBg = 'rgba(16, 185, 129, 0.15)';
  let meterPercent = 45;

  if (bmi < 18.5) {
    category = 'Underweight';
    categoryColor = '#60A5FA';
    categoryBg = 'rgba(59, 130, 246, 0.15)';
    meterPercent = Math.max(8, (bmi / 18.5) * 25);
  } else if (bmi <= 24.9) {
    category = 'Normal Weight';
    categoryColor = '#34D399';
    categoryBg = 'rgba(16, 185, 129, 0.15)';
    meterPercent = 25 + ((bmi - 18.5) / 6.4) * 25;
  } else if (bmi <= 29.9) {
    category = 'Overweight';
    categoryColor = '#FBBF24';
    categoryBg = 'rgba(245, 158, 11, 0.15)';
    meterPercent = 50 + ((bmi - 25) / 4.9) * 25;
  } else {
    category = 'Obese';
    categoryColor = '#F87171';
    categoryBg = 'rgba(239, 68, 68, 0.15)';
    meterPercent = Math.min(100, 75 + ((bmi - 30) / 10) * 25);
  }

  // Mifflin-St Jeor Formula
  let bmr = 0;
  if (gender === 'male') {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  const tdee = Math.round(bmr * parseFloat(activity));

  let targetCalories = tdee;
  let recommendedProgram = 'Pro Strength Training';
  let targetProtein = Math.round(weightKg * 2.0);

  if (goal === 'loss') {
    targetCalories = Math.round(tdee - 450);
    recommendedProgram = 'HIIT & Fat Shred Circuit';
    targetProtein = Math.round(weightKg * 2.2);
  } else if (goal === 'muscle') {
    targetCalories = Math.round(tdee + 350);
    recommendedProgram = 'Hypertrophy & Heavy Iron';
    targetProtein = Math.round(weightKg * 2.0);
  } else {
    recommendedProgram = 'Functional Strength & Longevity';
    targetProtein = Math.round(weightKg * 1.6);
  }

  const targetCarbs = Math.max(50, Math.round((targetCalories * 0.45) / 4));
  const targetFats = Math.max(30, Math.round((targetCalories * 0.25) / 9));

  return {
    bmi: formattedBmi,
    category,
    categoryColor,
    categoryBg,
    meterPercent: Math.min(100, Math.max(5, meterPercent)),
    bmr: Math.round(bmr),
    tdee,
    targetCalories,
    targetProtein,
    targetCarbs,
    targetFats,
    recommendedProgram
  };
}
