import { Drawer } from "./drawer.js";

export const initial = {
  init() {
    const form = document.querySelector(".section_tickets__calculation");

    form.onsubmit = function () {
      alert("Thanks");
      form.reset();
      Drawer.change();
      return false;
    };

    console.log(form);
    Drawer.change();
    Drawer.watch();
    
  },
};
