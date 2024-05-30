const CURRENCY_FORMATTER = new Intl.NumberFormat("en-DE", {
  currency: "EUR",

  minimumFractionDigits: 0,
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
