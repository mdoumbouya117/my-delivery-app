const CURRENCY_FORMATTER = new Intl.NumberFormat("fr-GN", {
  style: "currency",
  currency: "GNF",
  currencyDisplay: "code",
});

export const formatCurrency = (amount: number) => {
  return CURRENCY_FORMATTER.format(amount);
};
