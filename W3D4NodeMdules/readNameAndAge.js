/* Qiestion Number 2 **************************************** */

var Sum = require('./sumOfAllNumbers');

Sum();

/* Qiestion Number 3 **************************************** */

const math = require('./my_math');

console.log('3 + 5 = ' + math.add(3, 5));
console.log('3 - 5 = ' + math.subtract(3, 5));
console.log('3 * 5 = ' + math.multiply(3, 5));
console.log('3 / 5 = ' + math.divide(3, 5));
console.log('PI: ', math.pi);


/* Qiestion Number 4 **************************************** */

const drive = require('./my_car').drive;
drive();

const turn = require('./my_car').turn;
turn(100);

const Break = require('./my_car').break;
Break();