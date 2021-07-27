"use strict";

const sum = (arr)=>
                arr.reduce( (acc,elements)=> acc + elements);
const multiply = (arr) =>
                arr.reduce((acc, elements) => acc * elements);
const reverse = (str) =>
                    [...str].reverse().join("");
const filterLongWords = (words, i) =>
                                words.filter(word => word.length > i);