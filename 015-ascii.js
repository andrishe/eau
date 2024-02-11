const readline = require("readline-sync");

const orderAscii = () => {
  let str = readline.question("Entrez une phrase : ");

  if (!isNaN(str)) {
    console.log("Erreur : Veuillez entrer une phrase!");
    process.exit(0);
  }

  let strOrder = str.split(" ");
  console.log(strOrder.sort());
};

orderAscii();
