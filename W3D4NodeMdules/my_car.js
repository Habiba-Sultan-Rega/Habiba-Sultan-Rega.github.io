"use strict";
module.exports.drive = function () {
    console.log("The car moves forward");
}
module.exports.turn = function (degrees) {
    console.log(`The car turns ${degrees}˚`);
}
module.exports.break = function () {
    console.log("The car stops.");
}