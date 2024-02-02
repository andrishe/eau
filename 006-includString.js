const readline = require("readline-sync");

const includeStr = () => {
  const str = readline.question("Entrez un mot : ");

  if (str <= "" || str !== String) {
    console.log("Erreur : Veuillez entrer un mot!");
    process.exit(0);
  }

  const strCharact = readline.question("Verifier le character : ");
  return str.includes(strCharact);
};

console.log(includeStr());
