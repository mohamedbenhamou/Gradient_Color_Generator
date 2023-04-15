const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const copy = document.querySelector(".copy");
const body = document.querySelector("#corps");
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  copy.value = body.style.background;
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
