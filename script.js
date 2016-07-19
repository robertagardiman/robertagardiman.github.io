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


//click contact appear/disappear the box

var contactbox = document.getElementById("contact-box");
var contactlink = document.getElementById("contact-link");

contactlink.addEventListener("click", openContactBox);

function openContactBox() {
  
  if(contactbox.classList.contains("animation-contact-box")) {
    contactbox.classList.add("no-animation-contact-box");
    contactbox.classList.remove("animation-contact-box");
  }else{
    //alert("dentro");
    contactbox.classList.add("animation-contact-box");
    contactbox.classList.remove("no-animation-contact-box");
  }
  
  
}




$(document).ready(function() {
  
    $(window).scroll(function(e) {
        var s = $(window).scrollTop(),
            opacityVal = (s / 2000);
        console.log(opacityVal);
        $('.not-blurred-image').css('opacity', opacityVal);
    });
  
    if (document.cookie.replace(/(?:(?:^|.*;\s*)doSomethingOnlyOnce\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
      alert("Do something here!");
      document.cookie = "doSomethingOnlyOnce=true";
    }
});

// Attach a listener to the window
window.onscroll = function(e) {
  
  // Get the pageYOffset
  var pageOffset = window.pageYOffset;
  var heightSkills = document.getElementById("skills").clientHeight - 2050;
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