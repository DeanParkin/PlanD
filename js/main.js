// Plan;D Main js document


//Paralax Effect
const parallax = document.getElementById('paralax');

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 1.5 + "px";
});


