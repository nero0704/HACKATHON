function fadeIn(obj) {
  obj.querySelector(".overlay").classList.add("fade");
}

function fadeOut(obj) {
  obj.querySelector(".overlay").classList.remove("fade");
}

function fadeInNav() {
  document.querySelector("#side-nav").classList.add("fade");
  document.querySelector("#side-nav-container").classList.add("fade");
  console.log("ASDAS");
}

function fadeOutNav() {
  document.getElementById("side-nav").classList.remove("fade");
  document.querySelector("#side-nav-container").classList.remove("fade");
}

function toggleNav() {
  document.getElementById("side-nav").classList.toggle("fade");
  document.querySelector("#side-nav-container").classList.toggle("fade");
}