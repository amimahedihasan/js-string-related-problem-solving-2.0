
// Task 5
const myString1 = 'The eXtra Young Fox jumps over the Yard'
let captilizeNext = true;

let updatedString = ''
for(const key of myString1){
  if(key === ' '){
    updatedString = updatedString + key;
    captilizeNext = true;
  }
  else if (captilizeNext === true){
    updatedString = updatedString + key.toUpperCase()
    captilizeNext = false;
  }
  else{
    updatedString = updatedString + key;

  }
}
console.log(updatedString)




