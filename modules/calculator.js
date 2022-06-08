export class Calculator {
  static calc({ price, numOfbasics, numofsenior }) {
    let result = 0;
    if (numOfbasics) {
      result += numOfbasics * price;
    }
    if (numofsenior) {
      result += (numofsenior * price) / 2;
    }
    return result;
  }
}
