
export function currencyFormat(num: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
}

export function goToPage(history: any, path: string) {
  history.push(path);
}