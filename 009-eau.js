const arg = process.argv[2];

const containNumber = (arg) => {
  let value = String(arg);
  for (let i = 0; i < value.length; i++) {
    if (!isNaN(value.charAt(i)) && !(value.charAt(i) === " ")) {
      return true;
    }
  }
  return false;
};

console.log(containNumber(arg));
