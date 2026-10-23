export async function logRollResult(
  charcaterName,
  block,
  diceResult,
  attribute,
) {
  console.log(
    `${charcaterName} rolou um dado de ${block} 🎲${diceResult} + ${attribute} = ${diceResult + attribute}`,
  );
}
