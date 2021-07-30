"use strict";

const sum = (arr)=>
                arr.reduce( (acc,elements)=> acc + elements);
const multiply = (arr) =>
                arr.reduce((acc, elements) => acc * elements);
const reverse = (str) =>
                    [...str].reverse().join("");
const filterLongWords = (words, i) => words.filter(word => word.length > i);
//const longestNoSpace=  (...strings) =>
//                                      strings.filter((strings) => { return strings.indexOf(' ') < 0 })
//                                     strings .map((strings) => { return strings.length })
//                                     strings .reduce( (acc, curr) => { return
//
//                                       },0)

const longestNoSpace= (...word) =>
word.filter(word => { return word.indexOf(' ') < 0 })
word.map(word => { return word.length })
.reduce( (acc,elements) => { return elements > acc? elements : acc }, 0)

