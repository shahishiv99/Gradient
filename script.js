const first = document.getElementById("firstColor");
const second = document.getElementById("secondColor");
const head = document.getElementById("linear");
const con = document.getElementById("contenor");

const changeColor = () => {
  con.style.background =
    "linear-gradient(to right, " + first.value + ", " + second.value + ")";
};

first.addEventListener("input", changeColor);
second.addEventListener("input", changeColor);
