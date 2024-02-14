import { expect } from "chai";
import { findNewApartment } from "../findApartment.js";

describe("test suite", function () {

    describe("isGoodLocation functionality", () => {

        it("expect correct for city", () => {
            expect(findNewApartment.isGoodLocation("Varna", true)).to.equal("You can go on home tour!")
        })

        it("expect correct for city", () => {
            expect(findNewApartment.isGoodLocation("Varna", false)).to.equal("There is no public transport in area.")
        })

        it("expect correct for city", () => {
            expect(findNewApartment.isGoodLocation("Jambol", false)).to.equal("This location is not suitable for you.")
        })

        it("expect correct for city", () => {
            expect(findNewApartment.isGoodLocation("Jambol", true)).to.equal("This location is not suitable for you.")
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isGoodLocation(6, false)).to.throw
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isGoodLocation(6, 'false')).to.throw
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isGoodLocation('6', 'false')).to.throw
        })
    })

    describe("isLargeEnough functionality", () => {

        it("expect correct value", () => {
            expect(findNewApartment.isLargeEnough([60], 50)).to.equal("60")
        })

        it("expect correct value", () => {
            expect(findNewApartment.isLargeEnough([60, 100], 50)).to.equal("60, 100")
        })

        it("expect correct value", () => {
            expect(findNewApartment.isLargeEnough([60, 100], 150)).to.equal("")
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isLargeEnough([], 150)).to.throw;
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isLargeEnough(100, 150)).to.throw;
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isLargeEnough([100], '150')).to.throw;
        })
    })

    describe("isItAffordable functionality", () => {
        it("expect correct value", () => {
            expect(findNewApartment.isItAffordable(100, 150)).to.equal("You can afford this home!")
        })

        it("expect correct value", () => {
            expect(findNewApartment.isItAffordable(100, 100)).to.equal("You can afford this home!")
        })

        it("expect correct value", () => {
            expect(findNewApartment.isItAffordable(150, 100)).to.equal("You don't have enough money for this house!")
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isItAffordable(0, 0)).to.throw;
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isItAffordable(100, 0)).to.throw;
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isItAffordable(0, 110)).to.throw;
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isItAffordable(-10, 0)).to.throw;
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isItAffordable(0, -90)).to.throw;
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isItAffordable("1", 100)).to.throw;
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isItAffordable("1", '100')).to.throw;
        })

        it("test invalid input", () => {
            expect(() => findNewApartment.isItAffordable(1, '100')).to.throw;
        })
    })
})