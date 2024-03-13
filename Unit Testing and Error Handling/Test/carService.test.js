import { expect } from 'chai'
import { carService } from '../Unit Testing and Error Handling - Exercise/03. Car Service_Resources.js'

describe("test suite", function () {

    describe("isItExpensive functionality", () => {

        it("test valid input", () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money')
        })

        it("test valid input", () => {
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money')
        })

        it("test valid input", () => {
            expect(carService.isItExpensive('trans')).to.equal('The overall price will be a bit cheaper')
        })
    })

    describe("discount functionality", () => {

        it("test with valid input", () => {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`)
        })

        it("test with valid input", () => {
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`)
        })

        it("test with valid input", () => {
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`)
        })

        it("test with valid input", () => {
            expect(carService.discount(2, 100)).to.equal(`You cannot apply a discount`)
        })

        it("test with valid input", () => {
            expect(carService.discount(1, 100)).to.equal(`You cannot apply a discount`)
        })

        it("test with invalid input", () => {
            expect(() => carService.discount('2', 100)).to.throw
        })

        it("test with invalid input", () => {
            expect(() => carService.discount('2', '100')).to.throw
        })

        it("test with invalid input", () => {
            expect(() => carService.discount(2, '100')).to.throw
        })

    })

    describe("partsToBuy functionality", () => {

        it("test with invalid input", () => {
            expect(() => carService.partsToBuy(2, '100')).to.throw
        })

        it("test with invalid input", () => {
            expect(() => carService.partsToBuy([2], '100')).to.throw
        })

        it("test with invalid input", () => {
            expect(() => carService.partsToBuy('str', ['100'])).to.throw
        })

        it("test with valid input", () => {
            expect(carService.partsToBuy([], ['100'])).to.equal(0)
        })

        it("test with valid input", () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve"])).to.equal(145)
        })

        it("test with valid input", () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"])).to.equal(375)
        })

        it("test with valid input", () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], [])).to.equal(0)
        })
    })
})