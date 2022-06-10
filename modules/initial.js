import { Drawer } from './drawer.js';

export const initial = {
  init() {
    const form = document.querySelector('.section_tickets__calculation');
    const menuBar = document.querySelector('.section-welcome__menu-bar');
    menuBar.classList.remove('open');
    const menuBtn = document.querySelector('.header__menu-burger');
    menuBtn.classList.remove('open');
    const welcomeText = document.querySelector('.section-welcome__text');
    welcomeText.classList.remove('open');

    form.onsubmit = function () {
      if (Drawer.isValid()) {
        alert('Thanks');
      }
      form.reset();
      Drawer.change();
      return false;
    };

    Drawer.change();
    Drawer.watch();
  },
};
