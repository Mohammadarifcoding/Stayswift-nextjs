export const isDateInBetween = (date, from, to) => {
  return (
    new Date(date).getTime() > new Date(from).getTime() &&
    new Date(date).getTime() < new Date(to).getTime()
  );
};

export const getDayDifference = (from, to) => {
  return (
    (new Date(to).getTime() - new Date(from).getTime()) /
      (1000 * 60 * 60 * 24) +
    1
  );
};
