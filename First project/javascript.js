// Hex Change Background Color
  
const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

function newColorFind(){
let randomColorString = '#';

for (let x= 0; x< 6; x++){

    let index= Math.floor(Math.random() * 16)
    let value= arrayOfColorFunctions[index]

    randomColorString = randomColorString + value
  }
return randomColorString 
}
  console.log(newColorFind());

  function changingbackgroundColor(){
  document.getElementById('colour').style.background = newColorFind()
 }

// resources:https://css-tricks.com/snippets/javascript/random-hex-color/

