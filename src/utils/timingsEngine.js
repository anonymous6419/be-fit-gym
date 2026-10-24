/**
 * BE FIT GYM - Real-Time Timings & Live Schedule Engine
 *
 * Official Schedule:
 * - Monday to Saturday: 5:30 AM to 10:00 PM (Continuous Full-Day Access)
 * - Sunday: 6:00 AM to 10:00 AM (Morning Special Session)
 */

export const GYM_SCHEDULE = {
  weekdayOpen: { h: 5, m: 30 },
  weekdayClose: { h: 22, m: 0 },
  weekdayBatches: [
    {
      id: 'early-morning',
      name: 'Early Morning Power & Strength',
      timeStr: '5:30 AM – 8:30 AM',
      startH: 5,
      startM: 30,
      endH: 8,
      endM: 30,
      focus: 'Heavy compounds, empty platforms, intense focus',
      intensity: 'High',
      tag: 'Most Energetic'
    },
    {
      id: 'mid-morning',
      name: 'Mid-Morning Conditioning & Shred',
      timeStr: '8:30 AM – 12:00 PM',
      startH: 8,
      startM: 30,
      endH: 12,
      endM: 0,
      focus: 'HIIT circuits, functional turf, cardiovascular stamina',
      intensity: 'Moderate-High',
      tag: 'Fat Loss Prime'
    },
    {
      id: 'afternoon',
      name: 'Afternoon Open Floor & 1-on-1 Coaching',
      timeStr: '12:00 PM – 4:30 PM',
      startH: 12,
      startM: 0,
      endH: 16,
      endM: 30,
      focus: 'Dedicated coaching attention, quiet floor, biomechanics',
      intensity: 'Custom',
      tag: 'Zero Wait Time'
    },
    {
      id: 'evening-prime',
      name: 'Evening Prime Hypertrophy & Rush',
      timeStr: '4:30 PM – 8:00 PM',
      startH: 16,
      startM: 30,
      endH: 20,
      endM: 0,
      focus: 'High-voltage atmosphere, heavy dumbbells, bodybuilding',
      intensity: 'Maximum',
      tag: 'Peak Energy'
    },
    {
      id: 'night-owl',
      name: 'Night Owl Strength Blitz',
      timeStr: '8:00 PM – 10:00 PM',
      startH: 20,
      startM: 0,
      endH: 22,
      endM: 0,
      focus: 'Late-night power session, post-work de-stress lifting',
      intensity: 'High',
      tag: 'Focused & Gritty'
    }
  ],
  sundayOpen: { h: 6, m: 0 },
  sundayClose: { h: 10, m: 0 },
  sundayBatches: [
    {
      id: 'sunday-special',
      name: 'Sunday Morning Mobility & Power Special',
      timeStr: '6:00 AM – 10:00 AM',
      startH: 6,
      startM: 0,
      endH: 10,
      endM: 0,
      focus: 'Deep mobility, Olympic lifting drills, active recovery',
      intensity: 'Moderate',
      tag: 'Weekend Special'
    }
  ]
};

export function getGymLiveStatus(customDate = new Date()) {
  const now = customDate;
  const day = now.getDay(); // 0 = Sunday, 1-6 = Monday-Saturday
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const isSunday = day === 0;
  const openMins = isSunday
    ? GYM_SCHEDULE.sundayOpen.h * 60 + GYM_SCHEDULE.sundayOpen.m
    : GYM_SCHEDULE.weekdayOpen.h * 60 + GYM_SCHEDULE.weekdayOpen.m;

  const closeMins = isSunday
    ? GYM_SCHEDULE.sundayClose.h * 60 + GYM_SCHEDULE.sundayClose.m
    : GYM_SCHEDULE.weekdayClose.h * 60 + GYM_SCHEDULE.weekdayClose.m;

  let isOpen = false;
  let currentSessionName = '';
  let activeBatchId = null;
  let nextSessionInfo = '';

  if (currentMinutes >= openMins && currentMinutes < closeMins) {
    isOpen = true;
    const minutesLeft = closeMins - currentMinutes;
    const hoursLeft = Math.floor(minutesLeft / 60);
    const remMinutes = minutesLeft % 60;
    const closeTimeStr = isSunday ? '10:00 AM' : '10:00 PM';
    const countdownStr = hoursLeft > 0 ? `${hoursLeft}h ${remMinutes}m` : `${remMinutes}m`;
    nextSessionInfo = `Closes in ${countdownStr} (at ${closeTimeStr})`;

    const batches = isSunday ? GYM_SCHEDULE.sundayBatches : GYM_SCHEDULE.weekdayBatches;
    for (const b of batches) {
      const bStart = b.startH * 60 + b.startM;
      const bEnd = b.endH * 60 + b.endM;
      if (currentMinutes >= bStart && currentMinutes < bEnd) {
        currentSessionName = b.name;
        activeBatchId = b.id;
        break;
      }
    }
    if (!currentSessionName) {
      currentSessionName = isSunday ? 'Sunday Morning Session' : 'Daily Strength Session';
    }
  } else {
    isOpen = false;
    if (isSunday) {
      if (currentMinutes < openMins) {
        nextSessionInfo = 'Opens Today at 6:00 AM (Sunday Morning Session)';
      } else {
        nextSessionInfo = 'Opens Tomorrow (Mon) at 5:30 AM';
      }
    } else {
      if (currentMinutes < openMins) {
        nextSessionInfo = 'Opens Today at 5:30 AM';
      } else {
        if (day === 6) {
          nextSessionInfo = 'Opens Tomorrow (Sun) at 6:00 AM';
        } else {
          nextSessionInfo = 'Opens Tomorrow at 5:30 AM';
        }
      }
    }
  }

  // Format current time nicely: e.g. "07:18 PM"
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 === 0 ? 12 : hours % 12;
  const timeFormatted = `${displayHours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${period}`;

  return {
    isOpen,
    isSunday,
    currentSessionName,
    activeBatchId,
    nextSessionInfo,
    timeFormatted
  };
}
