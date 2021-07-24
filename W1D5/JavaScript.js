/* return the maximum of 2 numbers */
const max = function(x,y){
    return x > y ? x:y;
}
//console.log(max(20,10));

/* return the maximum of 3 numbers */
const maxOfThree = function(x,y,z){
    return max(max(x, y), z);
}
//console.log(maxOfThree(100,500,2000));

/* return true if the character is Vowel  */
const isVowel = function(x){
    return x==='a'||x==='A'||x==='e'||x==='E'||x==='i'||x==='I'||x==='o'||x==='O'||x==='u'||x==='U';
}
//console.log(isVowel("a"));

/* returns the sum of array elements */
const sum = function(arr){
    return arr.reduce(function (acc,elements){
           return acc + elements });
}
//console.log(sum([1,2,3,4]));

/* returns the sum of array elements */
const multiply = function(arr){
    return arr.reduce(function (acc,elements){
           return acc * elements });
}
//console.log(multiply([1,2,3,4]));

/* returns the reverse of a string */
const reverse = function(str){
    return str.split('').reverse("").join('');
}
//console.log(reverse("habiba"));

/*  returns the length of the longest word from an array of strings */
const findLongestWord = function(arrOfWords){
    return arrOfWords.sort(function (a, b) { return b.length - a.length })[0].length;
}
//console.log(findLongestWord(['fdgdfgdfg', 'gdfgf', 'gdfgdfhawsdgd', 'gdf', 'gdfhdfhjurvweadsd']));

/* returns the array of words that are longer than i */
function filterLongWord(arrOfWords, i) {
    return arrOfWords.filter(word => word.length > i);
}
//console.log(filterLongWord(['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],3));

/****************************************************************************************************************/
/* Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:

        a) multiply each element by 10;
        b) return array with all elements equal to 3;
        c) return the product of all elements;*/

/****************************************************************************************************************/

const a = [1,3,5,3,3];
const b = a.map(function(elem, i, array) {
  return elem * 10;})
document.writeln(b.toString() + "<br/>");

const c = a.filter(function(elem, i, array){
  return elem === 3;});
document.writeln(c.toString() + "<br/>");

const d = a.reduce(function(prevValue, elem, i, array){
             return prevValue * elem;});
document.writeln(d+ "<br/>");

/****************************************************************************************************************/
/*                               function myFunctionTest(output, function)                                      */
/****************************************************************************************************************/

const myStringFunctionTest = function(msg, expectedOutput, func, ) {
    if (expectedOutput.tostring === func.tostring) {
        console.log(msg + expectedOutput + " : TEST SUCCEEDED");
    } else {
        console.log(msg + expectedOutput + " : TEST FAILED");
    }
}
const myFunctionTest = function(msg, expectedOutput, func, ) {
    if (expectedOutput === func) {
        console.log(msg + expectedOutput + " : TEST SUCCEEDED");
    } else {
        console.log(msg + expectedOutput + " : TEST FAILED");
    }
}

/****************************************************************************************************************/
/*                              test cases                                                                      */
/****************************************************************************************************************/

myFunctionTest("Expected output of max(20,10) is ", 20, max(20,10) );
myFunctionTest("Expected output of max(20,10) is ", 10, max(20,10) );
myFunctionTest("Expected output of maxOfThree(10, 20, 30) is ",30, maxOfThree(10, 20, 30));
myFunctionTest("Expected output of maxOfThree(10, 20, 30) is ",20, maxOfThree(10, 20, 30));
myStringFunctionTest("Expected output of isVowel('a') is ", true, isVowel('a'));
myStringFunctionTest("Expected output of isVowel('z') is ",false, isVowel('z'));
myFunctionTest("Expected output of sum([1, 2, 3, 4]) is ", 10, sum([1, 2, 3, 4]));
myFunctionTest("Expected output of sum([1, 2, 3, 4]) is ", 20, sum([1, 2, 3, 4]));
myFunctionTest("Expected output of multiply([1, 2, 3, 4]) is ",24, multiply([1, 2, 3, 4]));
myFunctionTest("Expected output of multiply([1, 2, 3, 4]) is ",14, multiply([1, 2, 3, 4]));
myFunctionTest("Expected output of reverse('habiba') is ", "abibah", reverse("habiba"));
myFunctionTest("Expected output of reverse('habiba') is ", "abiabh", reverse("habiba"));
myFunctionTest( "Expected output of findLongestWord(['a','aaa', 'aaa','aaaa']) is ", 4, findLongestWord(['a','aaa', 'aaa','aaaa']));
myFunctionTest( "Expected output of findLongestWord(['a','aaa', 'aaa','aaaa']) is ", 3, findLongestWord(['a','aaa', 'aaa','aaaa']));
myStringFunctionTest("Expected output of filterLongWord(['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],3) is ",["aaaa","aaaaa"], filterLongWord(['a', 'aa', 'aaa', 'aaaa', 'aaaaa'], 3));
