interface Props {
  currency?: "en-US" | "pt-BR";
  value: number;
}

export function formatCurrency({ currency = "pt-BR", value = 0 }: Props) {
  const currencyType = {
    "en-US": "USD",
    "pt-BR": "BRL",
  }
  return new Intl.NumberFormat(currency, {
    style: "currency",
    currency: currencyType[currency],
  }).format(value);
}
