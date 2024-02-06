const readline = require("readline-sync");

const indexWanted = () => {
  const str = readline.question("Entrez un mot : ");
  const strContains = readline.question("Verifier le character : ");

  if (
    str !== String ||
    (str === "" && strContains !== String) ||
    strContains === ""
  ) {
    console.log("Erreur : Veuillez entrer une phrase!");
    process.exit(0);
  }

  const strArray = str.split(" ");

  const strIndex = strArray.indexOf(strContains);

  return console.log(strIndex);
};

indexWanted();
