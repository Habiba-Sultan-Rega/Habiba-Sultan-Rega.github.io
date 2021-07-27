"use strict";
    describe("Sum", () => {
        it("returns the sum of array elements", () => {
            assert.equal(10, sum([1, 2, 3, 4]));
        });
});
    describe("Multiply", () => {
        it("returns the multiplicity of array elements", () => {
             assert.equal(24, multiply([1, 2, 3, 4]));
        });
    });
describe("Reverse", () => {
    it("returns the reverse of a string", () => {
        assert.equal("abibah", reverse("habiba"));
    });
});
describe("FilterLongWords", () => {
    it("returns the length of the longest word from an array of strings", () => {
        expect(["aaaa","aaaaa"]).to.eql(filterLongWords(["a", "aa", "aaa", "aaaa","aaaaa"], 3));
     });
});