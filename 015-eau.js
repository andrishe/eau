const arg = process.argv.slice(2).join(" ");

const errorHandling = (arg) => {
  if (typeof arg !== "string" || arg.trim() === "") {
    console.log("Erreur : Veuillez entrer une chaîne de caractères valide!");
    process.exit(1);
  }
};

const orderAscii = (arg) => {
  errorHandling(arg);

  const strArray = arg.trim().split(" ");

  // Trier les mots en utilisant l'ordre ASCII
  for (let i = 0; i < strArray.length - 1; i++) {
    for (let j = i + 1; j < strArray.length; j++) {
      const strChar = strArray[i];
      const strChar2 = strArray[j];
      let str = 0;

      // Comparaison ASCII des caractères des deux mots
      while (strChar.charCodeAt(str) === strChar2.charCodeAt(str)) {
        k++;
      }

      if (strChar.charCodeAt(str) > strChar2.charCodeAt(str)) {
        // Échanger les mots si nécessaire pour les trier en ordre ASCII
        const temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
      }
    }
  }

  // Rejoindre les mots triés pour former une phrase
  const sortedStr = strArray.join(" ");

  console.log(sortedStr);
};

orderAscii(arg);
