const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a quantidade de vitórias: ", (win) => {
  rl.question("Digite a quantidade de derrotas: ", (defeat) => {
    calculate(parseInt(win), parseInt(defeat));
    rl.close();
  });
});

function calculate(winAmount, defeatAmount) {
  const balanceRanked = winAmount - defeatAmount;
  let level;

  if (winAmount < 10) {
    level = "Ferro";
  } else if (winAmount >= 11 && winAmount <= 20) {
    level = "Bronze";
  } else if (winAmount >= 21 && winAmount <= 50) {
    level = "Prata";
  } else if (winAmount >= 51 && winAmount <= 80) {
    level = "Ouro";
  } else if (winAmount >= 81 && winAmount <= 90) {
    level = "Diamante";
  } else if (winAmount >= 91 && winAmount <= 100) {
    level = "Lendário";
  } else {
    level = "Imortal";
  }

  console.log(
    `O Herói tem de saldo ${balanceRanked} está no nível de ${level}`
  );
}
