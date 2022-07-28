function reverseString(arr) {
let cama = [];
let result = '';

for (let i=0; i< arr.length;i++){
 cama.push(arr[i])
}

 console.log(cama)
let i= cama.length;
while (i > 0) {
  i--
   result += cama[i]
}
    return result;
}

module.exports = reverseString;
