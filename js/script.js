// Top-of-page button
let mybutton = document.getElementById("myBtn");
let nav = document.getElementById("nav");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
    nav.style.backgroundColor = "#0f0f0f";
    nav.style.transition = "0.3s";
    mybutton.style.transition = "0.3s";
  } else {
    mybutton.style.display = "none";
    nav.style.backgroundColor = "#00000000";
    nav.style.transition = "0.3s";
    mybutton.style.transition = "0.3s";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
