navbar = document.querySelector("#side-nav").querySelectorAll("a");

var dont = false
navbar.forEach(element => {
  element.addEventListener("click", function() {
    dont = true
    navbar.forEach(nav => nav.classList.remove("active"))

    this.classList.add("active");
    setTimeout(() => {
      dont = false
    }, 700);
  })
})

function updatePage() {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}`;
  console.log(scrollPercent);
  if (!dont) {
    if (scrollPercent == 0) {
      navbar.forEach(nav => nav.classList.remove("active"))
      navbar[0].classList.add("active");
      console.log("ASDASd");
    } else if (scrollPercent > 0 && scrollPercent < 33.476422347514095) {
      navbar.forEach(nav => nav.classList.remove("active"))
      navbar[1].classList.add("active");
      console.log("ASDASd");
    } else if (scrollPercent >= 33.476422347514095 && scrollPercent < 43.27908764736033) {
      navbar.forEach(nav => nav.classList.remove("active"))
      navbar[2].classList.add("active");
      console.log("ASDASd");
    } else if (scrollPercent >= 43.27908764736033 && scrollPercent < 54.363147104049204) {
      navbar.forEach(nav => nav.classList.remove("active"))
      navbar[3].classList.add("active");
      console.log("ASDASd");
    } else if (scrollPercent >= 54.363147104049204 && scrollPercent < 91.39543823680164) {
      navbar.forEach(nav => nav.classList.remove("active"))
      navbar[4].classList.add("active");
      console.log("ASDASd");
    } else if (scrollPercent >= 91.39543823680164 && scrollPercent < 100.01281394156842) {
      navbar.forEach(nav => nav.classList.remove("active"))
      navbar[5].classList.add("active");
      console.log("ASDASd");
    }
  }
}

document.addEventListener('scroll', updatePage);