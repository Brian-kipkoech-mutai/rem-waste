export function calculateTotalPrice(priceBeforeVat: number, vatPercentage: number): number {
  const vatAmount = (priceBeforeVat * vatPercentage) / 100
  return priceBeforeVat + vatAmount
}

export function formatCurrency(amount: number): string {
  return `£${amount.toFixed(2)}`
}
