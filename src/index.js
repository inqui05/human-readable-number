'use strict';
module.exports = function toReadable (number) {
  const printNumber = (number) => {
    switch(number) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
        case 20: return 'twenty';
        case 30: return 'thirty';
        case 40: return 'forty';
        case 50: return 'fifty';
        case 60: return 'sixty';
        case 70: return 'seventy';
        case 80: return 'eighty';
        case 90: return 'ninety';
        case 100: return ' hundred';
    }
  };

  if (number < 21) {
    return printNumber(number);
  } else if (number >= 21 && number < 100) {
    if (number % 10 === 0) {
      return printNumber(number);
    } else {
      return (printNumber(number - (number % 10)) + ' ' + printNumber(number % 10));
    }
  } else if (number >= 100 & number < 1000) {
    if (number % 100 === 0) {
      return (printNumber(number / 100) + printNumber(100));
    } else {
      const handred = +number.toString().slice(0, 1),
        left = +number.toString().slice(1);
      let leftString;
  
      if (left < 21) {
        leftString = printNumber(left);
      } else {
        if (number % 10 === 0) {
          leftString = printNumber(left);
        } else {
          leftString = (printNumber(left - (left % 10)) + ' ' + printNumber(left % 10));
        }
      }
      return (printNumber(handred) + printNumber(100) + ' ' + leftString);
    }

  }
};
