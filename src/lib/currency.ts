const CURRENCY_FORMATTER = new Intl.NumberFormat("fr-GN", {
  style: "currency",
  currency: "GNF",
  currencyDisplay: "code",
});

export const formatCurrencyFull = (amount: number) => {
  return CURRENCY_FORMATTER.format(amount);
};

export const formatCurrency = (amount: number) => {
  const formattedCurrency = formatCurrencyFull(amount);

  const [currency, price] = formattedCurrency.split(/\s+/);

  return { currency, price };
};
