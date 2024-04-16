const displayUniqueCombinaisons = () => {
  let array = [];

  for (let i = 0; i < 100; i++) {
    for (let j = i + 1; j < 100; j++) {
      let first = i < 10 ? "0" + i : i;
      let second = j < 10 ? "0" + j : j;
      let combination = `${first} ${second}`;
      if (!array.includes(combination)) {
        array.push(combination);
      }
    }
  }
  console.log(array.join("\n "));
  return array;
};

displayUniqueCombinaisons();
