const Duck = (function(){
let quacking = false;

let flying = false;
let xPos = 0;
let yPos = 0;

const takeOff= function (){
    flying = true;
}
const land = function () {
    flying = false;
}
const startQuacking = function () {
    quacking = true;
}
 const stopQuacking = function () {
    quacking = false;
}
const moveTo= function(x, y) {
    xPos = x;
    yPos = y;
    let value = "duck is "
    if (flying) {
        value += "flying to " +x " , " +y `;
    } else {
        value += "swimming to " + x " , " + y `;
    }
    if (quacking) {
        value += "while quacking";
    }
    console.log(value);
}

module.exports.takeOff = takeOff;
module.exports.land = land;
module.exports.startQuacking = startQuacking;
module.exports.stopQuacking = stopQuacking;
})();


const duck = require("./Duck");
duck.moveTo(1, 2);
duck.takeOff();
duck.moveTo(2, 3);
duck.startQuacking();
duck.moveTo(2, 3);
duck.land();
duck.moveTo(2, 4);
duck.stopQuacking();
duck.moveTo(4,5);
