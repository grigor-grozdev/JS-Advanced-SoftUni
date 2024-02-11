import { assert } from "chai";
import { lookupChar } from "../Unit Testing and Error Handling - Exercise/charLookup.js";

describe("test inputs", () => {
    it("test with incorect value", () => {
        assert.isUndefined(lookupChar([], 3), "must be undefined");
        assert.isUndefined(lookupChar('b', '3'), "must be undefined");
        assert.isUndefined(lookupChar([], 3.5), "must be undefined");
        assert.isUndefined(lookupChar('qwerty', 3.5), "must be undefined");
        assert.isUndefined(lookupChar('fds', 'gd'), "must be undefined");
        assert.isUndefined(lookupChar('fds', -1.5), "must be undefined");
    })
    it("test index", () => {
        assert.equal(lookupChar('qwe', -1), "Incorrect index", "Incorrect index");
        assert.equal(lookupChar('qwe', 3), "Incorrect index", "Incorrect index");
        assert.equal(lookupChar('qwe', 5), "Incorrect index", "Incorrect index");
    })
    it("test result", () => {
        assert.equal(lookupChar("qwe", 1), "w", "correct value");
        assert.equal(lookupChar("a", 0), "a", "correct value");
    })
})