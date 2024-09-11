
const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Obter os valores do objeto como um array
const valores = Object.values(faturamento);
const estados = Object.keys(faturamento);
const faturamentoTotal = valores.reduce((sum, valor) => sum + valor, 0);

for (let i = 0; i < estados.length; i++) {
  let estado = estados[i];
  let valor = faturamento[estado];
  let percentual = (valor * 100) / faturamentoTotal;
  console.log(`Percentual do estado ${estado} é ${percentual.toFixed(2)}%`);
}

