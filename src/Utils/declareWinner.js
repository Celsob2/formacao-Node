export async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME} : ${character1.PONTOS} pontos(s)`);
  console.log(`${character2.NOME} : ${character2.PONTOS} pontos(s)`);

  if (character1.PONTOS > character2.PONTOS) {
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  } else if (character2.PONTOS > character1.PONTOS) {
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
  } else {
    console.log("A corrida terminou em empate.");
  }
}
