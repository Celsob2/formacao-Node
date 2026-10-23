import { Players } from "./Players/index.js";
import { declareWinner } from "./Utils/declareWinner.js";
import { playRaceEngine } from "./Utils/playRaceEngine.js";

(async function main() {
  console.log(
    `🎌🚨 Corrida entre ${Players.player1.NOME} e o ${Players.player2.NOME}
     começando... \n`,
  );

  await playRaceEngine(Players.player1, Players.player2);
  await declareWinner(Players.player1, Players.player2);
})();
