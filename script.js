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