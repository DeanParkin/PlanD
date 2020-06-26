// Plan;D Main js document

const parallax = document.getElementById('paralax');

window.addEventListener("scroll", function () {
  var offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 1.5 + "px";
});
