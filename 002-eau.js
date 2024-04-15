const displayCombinaisonsTo2 = () => {
  let array = [];

  for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
      array.push(i + "" + j);
    }
  }
  console.log(array.join("\n"));
  return array;
};

displayCombinaisonsTo2();
