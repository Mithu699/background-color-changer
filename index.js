const changeBtn = document.getElementById("changeBtn");
const copyBtn = document.getElementById("copyBtn");
const colorCode = document.getElementById("colorCode");
const colorBox = document.getElementById("colorBox");

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

changeBtn.addEventListener("click", () => {
  const color = randomColor();
  document.body.style.background = color;
  colorBox.style.background = color;
  colorCode.innerText = color;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.write(colorCode.innerText);
  copyBtn.innerText = " copied";
  setTimeout(() => {
    copyBtn.innerText = "copy HEX";
  }, 1500);
});
