const readline = require("readline-sync");

const majToSentence = () => {
  const str = readline.question("Entrez une phrase : ");
  const strArray = str.split(" ");
  if (str !== String) {
    console.log("Erreur : Veuillez entrer une phrase!");
    process.exit(0);
  }

  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);
  }
  return strArray.join(" ");
};

console.log(majToSentence());
