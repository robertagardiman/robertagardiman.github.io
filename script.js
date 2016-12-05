//scroll to collapse project-title

var title = document.getElementById("title");

var pageOffset2 = window.pageYOffset;

// //evento quando scrolli
// window.onscroll = function (e) {
//   // prendi posizione dello scroll
//   var pageOffset = window.pageYOffset;
//   // se la posizione attuale e minore di quela precedente
//   if (pageOffset > pageOffset2) {
//     title.classList.add("collapsed");
//   } else {
//     title.classList.remove("collapsed");
//   };
//   // predi posizione per dopo
//   pageOffset2 = window.pageYOffset;
// };



$(document).ready(function () {
  
    $(window).scroll(function (e) {
        var s = $(window).scrollTop(),
            opacityVal = (s/2000);
        console.log(opacityVal);
        $('.not-blurred-image').css('opacity', opacityVal);
    });

});

// Attach a listener to the window
window.onscroll = function(e) {
  
  // Get the pageYOffset
  var pageOffset = window.pageYOffset;
  var heightSkills = document.getElementById("skills").clientHeight - 1050;
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



//SMOOTH SCROLL

function smoothScrollTo(destination, parent, time) {
   var scroll = init();
   requestAnimationFrame(shouldScroll);

   function init() {
       var start = parent.scrollTop;
       var ticks = time || 30;
       var i = 0;
       return {
           positionY: function () {
               return (destination - start) * i / ticks + start;
           }, 
           isFinished: function () {
               return i++ >= ticks;
           }
       };
   }

   function shouldScroll() {
       if(scroll.isFinished()) return;
       parent.scrollTop = scroll.positionY();
       requestAnimationFrame(shouldScroll);
   }
}

function selected(elem, parent) {
   for(var i = 0; i < parent.children.length; i++) {
       parent.children[i].classList.remove('is-selected');
   }
   elem.classList.add('is-selected');
   return elem;
}


if (document.querySelector('#scroll-top') != null){
    document.querySelector('#scroll-top').addEventListener('click', function(e){

        smoothScrollTo(window.innerHeight, document.body, 20);

    });

}