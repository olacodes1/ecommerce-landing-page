let menu = document.querySelector(".fa-bars");
let nav = document.querySelector(".navlinks");

menu.addEventListener("click", function () {
  nav.classList.toggle("active");
  this.classList.toggle("fa-times");
  this.style.color = "black";
  document.querySelector(".fa-search").style.color = "black";
});
