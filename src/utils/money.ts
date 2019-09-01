import currency from 'currency.js';

export const BRL = (value: number | string | currency) =>
  currency(value, { symbol: 'R$', precision: 2 });
