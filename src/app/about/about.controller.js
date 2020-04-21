export default class AboutController{
  constructor(){
    this.skills = [
      {
        name: 'Html',
        level: '100',
        icon: './../../../assets/loghi-skills/html-logo.svg'
      },
      {
        name: 'Css',
        level: '100',
        icon: './../../../assets/loghi-skills/css-logo.png'
      },
      {
        name: 'Sass',
        level: '100',
        icon: './../../../assets/loghi-skills/sass-logo.png'
      },
      {
        name: 'Javascript',
        level: '80',
        icon: './../../../assets/loghi-skills/js-logo.png'
      },
      {
        name: 'Angular',
        level: '80',
        icon: './../../../assets/loghi-skills/angular-logo.png'
      },
      {
        name: 'Typescript',
        level: '80',
        icon: './../../../assets/loghi-skills/ts-logo.png'
      },
      {
        name: 'SketchApp',
        level: '100',
        icon: './../../../assets/loghi-skills/sketch-logo.jpg'
      },
      {
        name: 'Photoshop',
        level: '80',
        icon: './../../../assets/loghi-skills/photoshop-logo.png'
      },
      {
        name: 'Illustrator',
        level: '80',
        icon: './../../../assets/loghi-skills/illustrator-logo.png'
      },
      {
        name: 'Adobe XD',
        level: '70',
        icon: './../../../assets/loghi-skills/xd-logo.png'
      },
    ]

  }

  $onInit(){
    if (window.screen.width > 768) {
      setTimeout(function(){
        document.querySelector('#about__container').classList.add('in');
      }, 1000);
    }

    setTimeout(this.setSkillsLevel.bind(this, this.skills), 0)
  }

  setSkillsLevel(skills){
      const progressValue = document.querySelectorAll('.progress__value');

      const RADIUS = 54;
      const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

      function progress(value) {
        const progress = value / 100;
        const dashoffset = CIRCUMFERENCE * (1 - progress);

        // console.log('progress:', value + '%', '|', 'offset:', dashoffset)
        return dashoffset;

          // progressValue.forEach(p=> {
          //   p.style.strokeDashoffset = dashoffset;
          // } )

      }

      progressValue.forEach((p, index)=>{
        p.style.strokeDasharray = CIRCUMFERENCE;
        p.style.strokeDashoffset = progress(skills[index].level);
        //progress(40);
      })

        progressValue[0].style.strokeDasharray = CIRCUMFERENCE;
        progressValue[0].style.strokeDashoffset = progress(90);
        // //progress(40);
        // console.log(skills[index].level);
      // })


    }
}
