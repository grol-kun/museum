import { Drawer } from './drawer.js';

export const initial = {
  init() {
    const form = document.querySelector('.section_tickets__calculation');

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
