const displayCombinaisonsTo3 = () => {
  let array = [];

  for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
      for (let k = j + 1; k < 10; k++) {
        array.push(i + "" + j + "" + k);
      }
    }
  }
  console.log(array.join("\n"));
  return array;
};

displayCombinaisonsTo3();
