export default class AppController {
  /* @ngInject */
  constructor($state){
    this.state = $state;
    if(window.location == 'robertagardiman.com') {
      $window.location = 'robertagardiman.com/dist/#!/home'
    }
  }

  setActive(pageName){
    const urlPage = this.state.current.url;
    if(urlPage && urlPage.indexOf(pageName) > -1){
      return true;
    }else {
      return false;
    }
  }

  toggleExtendedMenu() {
    document.querySelector('.menu--extended').classList.toggle('open');
    document.querySelector('.menu img').classList.toggle('rotate');
  }

  closeMenu() {
    document.querySelector('.menu--extended').classList.remove('open');
    document.querySelector('.menu img').classList.remove('rotate');
  }
}
