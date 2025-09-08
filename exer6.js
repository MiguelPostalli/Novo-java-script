// Simula a entrada de dados
const notas = {
    primeiroBimestre: 7.5,
    segundoBimestre: 8.0,
    terceiroBimestre: 6.5,
    quartoBimestre: 9.0
  };
  
  // Função para calcular a média
  function calcularMedia(notasBimestrais) {
    const somaNotas = notasBimestrais.primeiroBimestre +
                      notasBimestrais.segundoBimestre +
                      notasBimestrais.terceiroBimestre +
                      notasBimestrais.quartoBimestre;
    const media = somaNotas / 4;
    return media;
  }
  
  // Função para exibir o boletim
  function exibirBoletim(notasAluno) {
    const mediaFinal = calcularMedia(notasAluno);
  
    console.log("--- Boletim Escolar ---");
    console.log("Notas:");
    console.log(`1º Bimestre: ${notasAluno.primeiroBimestre}`);
    console.log(`2º Bimestre: ${notasAluno.segundoBimestre}`);
    console.log(`3º Bimestre: ${notasAluno.terceiroBimestre}`);
    console.log(`4º Bimestre: ${notasAluno.quartoBimestre}`);
    console.log("-------------------------");
    console.log(`Média Final: ${mediaFinal.toFixed(2)}`);
  
    if (mediaFinal >= 7.0) {
      console.log("Status: Aprovado! 🎉");
    } else {
      console.log("Status: Reprovado. 😢");
    }
  }
  
  // Executa a função para exibir o boletim com as notas definidas
  exibirBoletim(notas);
  