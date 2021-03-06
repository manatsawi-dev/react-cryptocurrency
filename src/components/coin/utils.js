export const getLocalStringText = (value) => {
  if (typeof value !== 'number') {
    return 0;
  }
  return value.toLocaleString();
};

export const getPriceChangeText = (priceChange) => {
  if (typeof priceChange !== 'number') {
    return 0;
  }
  return priceChange.toFixed(2);
};
