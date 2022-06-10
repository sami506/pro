const btn = document.getElementsByClassName("btn")[0];
const bigContenar = document.querySelector(".big-contenar");
const sam = document.getElementsByClassName("btn")[1];
const yam = document.getElementById("yam");
const vaz = document.getElementById("vaz");

btn.addEventListener("click", (eo) => {
  bigContenar.classList.add("ammn");
  eo.preventDefault();
  yam.style.display = "none";
  vaz.style.display = "block";
});
sam.addEventListener("click", (eo) => {
  yam.style.display = "block";
  vaz.style.display = "none";
  setTimeout(() => {
    bigContenar.style.display = "none";
  }, 3000);
});

const mood = document.getElementById("mood");
const body = document.getElementById("body");
mood.addEventListener('click' , (eo) => {
  body.classList.toggle('dark')
})