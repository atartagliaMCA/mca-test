export const useCurrency = (number) => new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
}).format(number);
