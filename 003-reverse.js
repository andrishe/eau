const readline = require("readline-sync");

const reversed = () => {
  let str = readline.question("Entrez une phrase : ");

  if (str === "" || str !== Number) {
    console.log("Erreur : Veuillez entrer une phrase valide.");
    process.exit(0);
  }

  let strArray = str.split(" ");
  console.log(strArray.reverse().join(" "));
};

reversed();
