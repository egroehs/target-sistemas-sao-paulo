const fs = require("fs");

// Lê o arquivo JSON
fs.readFile("dados.json", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo JSON", err);
    return;
  }

  try {
    // Converte a string JSON em um objeto
    const dados = JSON.parse(data);

    const valores = dados.map((item) => item.valor);
    const valoresValidos = valores.filter((valor) => valor > 0);

    const soma = valoresValidos.reduce((sum, valor) => sum + valor, 0);
    const mediaMensal = soma / valoresValidos.length;

    // Conta o número de dias com faturamento superior à média mensal
    const diasAcimaDaMedia = valores.filter(
      (valor) => valor > mediaMensal
    ).length;

     const menorValor = Math.min(...valoresValidos);
     const maiorValor = Math.max(...valoresValidos);

    console.log(
      `O menor valor de faturamento ocorrido em um dia do mês é: ${menorValor}. \n` +
        `O maior valor de faturamento ocorrido em um dia do mês é: ${maiorValor}. \n` +
        `O número de dias no mês em que o valor de faturamento diário foi superior à média mensal é: ${diasAcimaDaMedia}.`
    );


  } catch (parseError) {
    console.error("Erro", parseError);
  }
});

