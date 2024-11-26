import BigNumber from 'bignumber.js';

export const IsNumberZero = (number?: string | number | BigNumber) => {
  return BigNumber(number || 0).eq(0);
};
