"use strict";
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports= function () {
                let numbers = [];
                const sumTotal = function () {
                    readline.question("type a number or 'stop': ", num => {
                        if (num === 'stop') {
                            console.log("the sum of number is : "+numbers.reduce((sum, elem) => sum + elem));
                            readline.close();
                        } else {
                            numbers.push(Number(num));
                            sumTotal();
                        }
                    })
                }
                sumTotal();
            }

