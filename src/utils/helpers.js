export const formatPrice = (number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(number / 10);
};

export const getUniqueValues = (arr, type) => {
  let unique = arr.map((item) => item[type]);

  if (type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};

export const randomIndex = Math.floor(Math.random() * 6 + 1);
