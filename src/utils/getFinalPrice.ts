export const getFinalPrice = (pr: number, disc: number) => {
  return parseFloat(((pr * (100 - disc)) / 100).toFixed(2)) + '$';
};
