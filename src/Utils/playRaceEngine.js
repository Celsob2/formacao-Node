import { getRandomBlock } from "./getRandomBlock.js";
import { rollDice } from "./rollDice.js";
import { logRollResult } from "./logRollResult.js";

export async function playRaceEngine(character1, character2) {
  // pontos totais
  let totalPoints1 = 0;
  let totalPoints2 = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`🎌Rodada ${round}`);
    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // skill test
    let totalSkillTest1 = 0;
    let totalSkillTest2 = 0;

    if (block === "RETA") {
      totalSkillTest1 = diceResult1 + character1.VELOCIDADE;
      totalSkillTest2 = diceResult2 + character2.VELOCIDADE;
      await logRollResult(
        character1.NOME,
        "VELOCIDADE",
        diceResult1,
        character1.VELOCIDADE,
      );
      await logRollResult(
        character2.NOME,
        "VELOCIDADE",
        diceResult2,
        character2.VELOCIDADE,
      );
      if (totalSkillTest1 > totalSkillTest2) {
        console.log(
          `${character1.NOME} venceu o desafio de RETA e marcou um ponto.`,
        );
        character1.PONTOS++;
      }
      if (totalSkillTest2 > totalSkillTest1) {
        console.log(
          `${character2.NOME} venceu o desafio de RETA e marcou um ponto.`,
        );
        character2.PONTOS++;
      }
    }
    if (block === "CURVA") {
      totalSkillTest1 = diceResult1 + character1.MANOBRABILIDADE;
      totalSkillTest2 = diceResult2 + character2.MANOBRABILIDADE;
      await logRollResult(
        character1.NOME,
        "MANOBRABILIDADE",
        diceResult1,
        character1.MANOBRABILIDADE,
      );
      await logRollResult(
        character2.NOME,
        "MANOBRABILIDADE",
        diceResult2,
        character2.MANOBRABILIDADE,
      );
      if (totalSkillTest1 > totalSkillTest2) {
        console.log(
          `${character1.NOME} venceu o desafio de RETA e marcou um ponto.`,
        );
        character1.PONTOS++;
      }
      if (totalSkillTest2 > totalSkillTest1) {
        console.log(
          `${character2.NOME} venceu o desafio de RETA e marcou um ponto.`,
        );
        character2.PONTOS++;
      }
    }
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult1 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}🥊`);

      await logRollResult(
        character1.NOME,
        "PODER",
        diceResult1,
        character1.PODER,
      );
      await logRollResult(
        character2.NOME,
        "PODER",
        diceResult2,
        character2.PODER,
      );

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(
          `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto.🐢`,
        );
        character2.PONTOS--;
      }
      if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(
          `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto.🐢`,
        );
        character1.PONTOS--;
      }
      console.log(
        powerResult1 === powerResult2
          ? "Confronto empatado! Nenhum ponto foi perdido"
          : "",
      );
    }
    console.log("-----------------------------------------------");
  }
}
