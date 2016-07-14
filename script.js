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

$(document).ready(function() {
  
    $(window).scroll(function(e) {
        var s = $(window).scrollTop(),
            opacityVal = (s / 2500);
        console.log(opacityVal);
        $('.not-blurred-image').css('opacity', opacityVal);
    });
});

// Attach a listener to the window
window.onscroll = function(e) {
  
  // Get the pageYOffset
  var pageOffset = window.pageYOffset;
  var heightSkills = document.getElementById("skills").clientHeight - 350;
  var skillAi = document.getElementById("skill-ai");
  
  var levelSkills = document.getElementsByClassName("level-skill");
  
  console.log(heightSkills);
  console.log(pageOffset);
  console.log(levelSkills);
  console.log(levelSkills.length);
  
  if(pageOffset > heightSkills) {
    levelSkills[0].classList.add("skill-ai"); //illustrator
    levelSkills[1].classList.add("skill-ai"); // ps
    levelSkills[2].classList.add("skill-ai"); // id
    levelSkills[3].classList.add("skill-ae"); // ae
    levelSkills[4].classList.add("skill-ai"); // html
    levelSkills[5].classList.add("skill-ai"); // css
    levelSkills[6].classList.add("skill-js"); // js
    levelSkills[7].classList.add("skill-ai"); // marvel
    levelSkills[8].classList.add("skill-ai"); // invision
  }
}