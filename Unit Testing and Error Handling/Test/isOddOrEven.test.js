import { assert } from "chai";
import { isOddOrEven } from "../Unit Testing and Error Handling - Exercise/isOddOrEven.js"

describe("isOddOrEven", ()=>{
    it("test with no strin value", ()=>{
        assert.equal(isOddOrEven({prop: "Pesho"}), undefined, "return type must be undefined");
        assert.equal(isOddOrEven(5), undefined, "return type must be undefined");
        assert.isNotOk(isOddOrEven([]),"return type must be undefined");
    });

    it("test with a valid string value", ()=>{
        assert.equal(isOddOrEven("pesho"), "odd", "result is correct");
        assert.equal(isOddOrEven("Gogo"), "even", "result is correct")
    })
})