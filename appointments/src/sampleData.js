export const today = new Date();

export const at = (hours) => today.setHours(hours, 0);

export const sampleAppointments = [
  {
    startAt: today.setHours(9, 0),
    customer: { firstName: "Charlie" },
  },
  {
    startAt: today.setHours(10, 0),
    customer: { firstName: "Frankie" },
  },
  {
    startAt: today.setHours(11, 0),
    customer: { firstName: "Casey" },
  },
  {
    startAt: today.setHours(12, 0),
    customer: { firstName: "Ashley" },
  },
  {
    startAt: today.setHours(13, 0),
    customer: { firstName: "Jordan" },
  },
  {
    startAt: today.setHours(14, 0),
    customer: { firstName: "Jay" },
  },
  {
    startAt: today.setHours(15, 0),
    customer: { firstName: "Alex" },
  },
  {
    startAt: today.setHours(16, 0),
    customer: { firstName: "Jules" },
  },
  {
    startAt: today.setHours(17, 0),
    customer: { firstName: "Stevie" },
  },
];
