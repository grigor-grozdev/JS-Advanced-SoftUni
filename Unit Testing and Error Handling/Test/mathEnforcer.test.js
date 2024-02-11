import {assert} from "chai";
import { mathEnforcer } from "../Unit Testing and Error Handling - Exercise/mathEnforcer.js";

describe("test addFive functionality", ()=>{
    it("test with invalid value", ()=>{
        assert.isUndefined(mathEnforcer.addFive('go'),  "expect undefined");
        assert.isUndefined(mathEnforcer.addFive([]), "expect undefined");
    });
    it("test with valid value", ()=>{
        assert.equal(mathEnforcer.addFive(-10), -5, "correct value");
        assert.equal(mathEnforcer.addFive(-5), 0, "correct value");
        assert.equal(mathEnforcer.addFive(0), 5, "correct value");
        assert.equal(mathEnforcer.addFive(1), 6, "correct value");
        assert.equal(mathEnforcer.addFive(1.5), 6.5, "correct value");
    })
})

describe("test subtractTen functionality", ()=>{
    it("test with invalid value", ()=>{
        assert.isUndefined(mathEnforcer.subtractTen(' '), "must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen('{}'), "must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen('1'), "must be undefined");
    })
    it("test with valid value", ()=>{
        assert.equal(mathEnforcer.subtractTen(-10), -20, "correct value");
        assert.equal(mathEnforcer.subtractTen(0), -10, "correct value");
        assert.equal(mathEnforcer.subtractTen(10), 0, "correct value");
        assert.equal(mathEnforcer.subtractTen(20), 10, "correct value");
        assert.equal(mathEnforcer.subtractTen(10.5), 0.5, "correct value");
    })
})

describe("test sum functionality", ()=>{
    it("test with invalid value", ()=>{
        assert.isUndefined(mathEnforcer.sum("pesho", "gosho"), "must be undefined");
        assert.isUndefined(mathEnforcer.sum("pesho", 5), "must be undefined");
        assert.isUndefined(mathEnforcer.sum(5, "gosho"), "must be undefined");
        assert.isUndefined(mathEnforcer.sum("5", 5), "must be undefined");
        assert.isUndefined(mathEnforcer.sum(5, []), "must be undefined");
    })
    it("test with valud value", ()=>{
        assert.equal(mathEnforcer.sum(1,1), 2, "correct value");
        assert.equal(mathEnforcer.sum(0,1), 1, "correct value");
        assert.equal(mathEnforcer.sum(1,0), 1, "correct value");
        assert.equal(mathEnforcer.sum(-1,1), 0, "correct value");
        assert.equal(mathEnforcer.sum(1,-1), 0, "correct value");
        assert.equal(mathEnforcer.sum(-1,-1), -2, "correct value");
        assert.equal(mathEnforcer.sum(1,1.5), 2.5, "correct value");
        assert.equal(mathEnforcer.sum(1.5,1), 2.5, "correct value");
        assert.equal(mathEnforcer.sum(1.5,1.5), 3, "correct value");
    })
})