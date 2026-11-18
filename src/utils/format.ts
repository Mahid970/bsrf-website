const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

/** 15 November 2026 */
export const formatDate = (d: Date) => dateFormat.format(d);
