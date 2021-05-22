export const getLocalStringText = (value) => {
  if (typeof value !== 'number') {
    return 0;
  }
  return value.toLocaleString();
};

export const getPriceChnageText = (priceChange) => {
  if (typeof priceChange !== 'number') {
    return 0;
  }
  return priceChange.toFixed(2);
};
