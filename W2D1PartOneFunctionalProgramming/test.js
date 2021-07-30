"use strict";
//    describe("Sum", () => {
//        it("returns the sum of array elements", () => {
//            assert.equal(10, sum([1, 2, 3, 4]));
//        });
//});
//    describe("Multiply", () => {
//        it("returns the multiplicity of array elements", () => {
//             assert.equal(24, multiply([1, 2, 3, 4]));
//        });
//    });
//describe("Reverse", () => {
//    it("returns the reverse of a string", () => {
//        assert.equal("abibah", reverse("habiba"));
//    });
//});
//describe("FilterLongWords", () => {
//    it("returns the length of the longest word from an array of strings", () => {
//        expect(["aaaa","aaaaa"]).to.eql(filterLongWords(["a", "aa", "aaa", "aaaa","aaaaa"], 3));
//     });
//});

describe("longestNoSpace", function () {
            it("returns 0 if given zero parameters", () => {
                assert.equal(longestNoSpace(), 0);
            });
            it("returns 0 if given a single string that contains a space", () => {
                assert.equal(longestNoSpace("a test"), 0);
            })
            it("returns 0 if given only strings that contains spaces", () => {
                assert.equal(longestNoSpace("this is","a test"), 0);
            });
            it("returns the length of the string if given a single string without a space", () => {
                assert.equal(longestNoSpace("hello"), 5);
            });
            it("returns the length of the longest string if given multiple strings without spaces", () => {
                assert.equal(longestNoSpace("hello", "world!"), 6);
            });
        });