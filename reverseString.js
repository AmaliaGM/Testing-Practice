function reverseString(arr) {
  const cama = [];
  let result = '';

  for (let i = 0; i < arr.length; i += 1) {
    cama.push(arr[i]);
  }

  console.log(cama);
  let i = cama.length;
  while (i > 0) {
    i -= 1;
    result += cama[i];
  }
  return result;
}

module.exports = reverseString;
