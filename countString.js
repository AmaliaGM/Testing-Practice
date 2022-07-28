function string(count) {
    let counts = 0
    if (count < 1 || count >10) {
      console.log ("write a string bigger than 1 letter and smaller than 10 letters")
    }
    for (let i=0;i<count.length;i++){
      console.log(count[i])
      counts ++
    }
    
    return counts;
  }
 
  module.exports = string;
