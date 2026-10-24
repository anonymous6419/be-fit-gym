/**
 * BE FIT GYM - Universal WhatsApp Direct Messaging Engine
 * Target: +91 97121 29393
 */

export const WHATSAPP_NUMBER = '919712129393';

export function openWhatsApp(message) {
  const text = message || 'Hello Be Fit Gym! I would like to inquire about gym membership, facilities, and daily timings.';
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export const WA_TEMPLATES = {
  general: () => 
    'Hello Be Fit Gym! I would like to inquire about gym membership, facilities, and the daily gym timings. Could you please share the details?',

  vipPass: ({ name = '', phone = '', batch = '', goal = '', notes = '' } = {}) => {
    let msg = 'Hello Be Fit Gym! I would like to claim a 1-Day Free VIP Trial Pass.';
    if (name) msg += `\n• Name: ${name}`;
    if (phone) msg += `\n• Phone: ${phone}`;
    if (batch) msg += `\n• Preferred Batch: ${batch}`;
    if (goal) msg += `\n• Primary Goal: ${goal}`;
    if (notes) msg += `\n• Notes: ${notes}`;
    msg += '\n\nPlease confirm my pass and slot availability. Thank you!';
    return msg;
  },

  batch: (batchName, timeStr) => 
    `Hello Be Fit Gym! I would like to join the *${batchName}* batch (${timeStr}). Could you please share slot availability, trainer guidance, and admission details?`,

  program: (programTitle) => 
    `Hello Be Fit Gym! I am interested in enrolling in the *${programTitle}* program track. Could you please share the coaching schedule, fee structure, and trial session details?`,

  membership: (planName, cycle) => 
    `Hello Be Fit Gym! I would like to inquire about and enroll in the *${planName}* plan (${cycle}). Please share the latest fee packages, admission procedure, and ongoing discounts.`,

  coach: (coachName, specialty) => 
    `Hello Be Fit Gym! I would like to schedule a 1-on-1 personal consultation with Coach *${coachName}* regarding ${specialty}. Please let me know available slots.`,

  calculator: (metrics) => 
    `Hello Be Fit Gym! I just calculated my fitness metrics on your website:\n• BMI: ${metrics.bmi} (${metrics.category})\n• Target Daily Calories: ${metrics.targetCalories} kcal\n• Daily Protein Target: ${metrics.targetProtein}g\n• Recommended Track: ${metrics.recommendedProgram}\n\nCould your trainers help me start on this personalized plan?`
};
