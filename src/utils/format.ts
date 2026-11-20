const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const monthShort = new Intl.DateTimeFormat('en-GB', { month: 'short', timeZone: 'UTC' });

/** 15 November 2026 */
export const formatDate = (d: Date) => dateFormat.format(d);

/** { day: '15', month: 'Nov' } for calendar-style date blocks */
export const dateParts = (d: Date) => ({ day: String(d.getUTCDate()), month: monthShort.format(d) });

/** 2026-11-15 */
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
