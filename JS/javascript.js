// Hex Change Background Color

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

genNew.addEventListener("click", setBg);
setBg();


// resources:https://css-tricks.com/snippets/javascript/random-hex-color/

