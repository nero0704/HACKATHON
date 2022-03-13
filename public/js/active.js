navbar = document.querySelector("#side-nav").querySelectorAll("a");
let valueDisplays = document.querySelectorAll(".num");
let interval = 700;
var count = false;

function updatePage() {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}`;

  if (scrollPercent == 0) {
    navbar.forEach(nav => nav.classList.remove("active"))
    navbar[0].classList.add("active");
  } else if (scrollPercent > 0 && scrollPercent < 33.476422347514095) {
    navbar.forEach(nav => nav.classList.remove("active"))
    navbar[1].classList.add("active");
  } else if (scrollPercent >= 33.476422347514095 && scrollPercent < 43.27908764736033) {
    navbar.forEach(nav => nav.classList.remove("active"))
    navbar[2].classList.add("active");
  } else if (scrollPercent >= 43.27908764736033 && scrollPercent < 54.363147104049204) {
    navbar.forEach(nav => nav.classList.remove("active"))
    navbar[3].classList.add("active");
  } else if (scrollPercent >= 54.363147104049204 && scrollPercent < 91.39543823680164) {
    navbar.forEach(nav => nav.classList.remove("active"))
    navbar[4].classList.add("active");
  } else if (scrollPercent >= 91.39543823680164 && scrollPercent < 100.01281394156842) {
    navbar.forEach(nav => nav.classList.remove("active"))
    navbar[5].classList.add("active");
  }

  if (scrollPercent >= 46.788413098236774 && scrollPercent <= 78.99874055415617 && !count) {
    count = true;
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function() {
        if (endValue >= 1000000) {
          startValue += 4651;
        } else {
          startValue += 1;
        }
        valueDisplay.textContent = startValue.toLocaleString('en');
        if (startValue >= endValue) {
          clearInterval(counter);
          valueDisplay.textContent = endValue.toLocaleString('en');
        }
      }, duration);
    })
  }
}




document.addEventListener('scroll', updatePage);