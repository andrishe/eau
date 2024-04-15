const args = process.argv.slice(2);

const errorHandling = (args) => {
  if (args.length === 0 || args.some((arg) => typeof arg !== "string")) {
    console.log("Erreur : Veuillez entrer des arguments valides.");
    process.exit(1);
  }
};

const reverseSentence = (args) => {
  errorHandling(args);
  let reversedStr = "";
  for (let i = args.length - 1; i >= 0; i--) {
    reversedStr += args[i] + " ";
  }
  console.log(reversedStr);
};

reverseSentence(args);
