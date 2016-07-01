//scroll to collapse project-title

var title = document.getElementById("title");

var pageOffset2 = window.pageYOffset;

//evento quando scrolli
window.onscroll = function (e) {
  // prendi posizione dello scroll
  var pageOffset = window.pageYOffset;
  // se la posizione attuale e minore di quela precedente
  if (pageOffset > pageOffset2) {
    title.classList.add("collapsed");
  } else {
    title.classList.remove("collapsed");
  };
  // predi posizione per dopo
  pageOffset2 = window.pageYOffset;
};


//click contact appear the box

var contactbox = document.getElementById("contact-box");
var contactlink = document.getElementById("contact-link");

contactlink.addEventListener("click", openContactBox);

function openContactBox() {
  
  contactbox.classList.toggle("animation-contact-box");
  
}