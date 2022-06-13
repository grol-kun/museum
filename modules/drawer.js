import { Calculator } from './calculator.js';

export class Drawer {
  static prices = {
    Permanent_exhibition: 100,
    Temporary_exhibition: 200,
    Combined_admission: 300,
  };

  static watch() {
    const changeables = document.querySelectorAll('.changeable');
    const inputNumbers = document.querySelectorAll('.section_tickets__input-number');
    const menuBtn = document.querySelector('.header__menu-burger');

    for (let input of inputNumbers) {
      input.previousElementSibling.onclick = function () {
        input.stepDown();
        const event = new Event('change');
        input.dispatchEvent(event);
      };

      input.nextElementSibling.onclick = function () {
        input.stepUp();
        const event = new Event('change');
        input.dispatchEvent(event);
      };
    }

    for (let elem of changeables) {
      elem.onchange = function () {
        Drawer.change();
      };
    }
    menuBtn.addEventListener('click', this.toggle);
  }

  static change() {
    const radios = Array.from(document.querySelectorAll('.section_tickets__radio-group .changeable'));
    const option = radios.filter((item) => item.checked)[0].value;
    const price = this.prices[option];

    const numOfbasics = document.getElementById('basic').value;
    const numofsenior = document.getElementById('senior').value;

    const result = Calculator.calc({ price, numOfbasics, numofsenior });
    this.draw(result);
  }

  static draw(result) {
    const totalField = document.querySelector('.section_tickets__value');
    totalField.innerHTML = result;
  }

  static isValid() {
    const numOfbasics = +document.getElementById('basic').value;
    const numofsenior = +document.getElementById('senior').value;
    console.log(numOfbasics);
    console.log(numofsenior);
    return numOfbasics || numofsenior;
  }

  static toggle() {
    const menuBar = document.querySelector('.section-welcome__menu-bar');
    menuBar.classList.toggle('open');
    const menuBtn = document.querySelector('.header__menu-burger');
    menuBtn.classList.toggle('open');
    const welcomeText = document.querySelector('.section-welcome__text.text-active');
    welcomeText.classList.toggle('open');
  }
}
