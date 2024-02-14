import {expect} from 'chai';
import {motorcycleRider} from "../Unit Testing and Error Handling - Exercise/motorcycleRider.js"

describe ("test suite", function() {

    describe("licenseResriction functionality", () =>{
        it('return correct for AM', ()=> {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        });

        it('return correct for A1', ()=> {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
        });

        it('return correct for A2', ()=> {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        });
        
        it('return correct for A', ()=> {
            expect(motorcycleRider.licenseRestriction('A')).to.equal("No motorcycle restrictions, and the minimum age is 24.")
        });

        it('throw error for incorect input AMa', ()=> {
            expect(() => motorcycleRider.licenseRestriction('AMa')).to.throw;
        });
    });

    describe('motorcycleShowroom functionality', () => {
        it('return correct result', () => {
            expect(motorcycleRider.motorcycleShowroom([50,50], 50)).to.equal("There are 2 available motorcycles matching your criteria!")
        });

        it('return correct result', () => {
            expect(motorcycleRider.motorcycleShowroom([50,51], 50)).to.equal("There are 1 available motorcycles matching your criteria!")
        });

        it("throw error", () => {
            expect(() => motorcycleRider.motorcycleShowroom(50,50)).to.throw;
        });

        it("throw error", () => {
            expect(() => motorcycleRider.motorcycleShowroom([],50)).to.throw;
        });

        it("throw error", () => {
            expect(() => motorcycleRider.motorcycleShowroom([50],49)).to.throw;
        });

        it("throw error", () => {
            expect(() => motorcycleRider.motorcycleShowroom([50], '50')).to.throw;
        });

        it("throw error", () => {
            expect(() => motorcycleRider.motorcycleShowroom(50)).to.throw;
        });
    });

    describe("otherSpendings functionality", () => {
        it("return correct result", () => {
            expect(motorcycleRider.otherSpendings(['helmet','jacked'], ['engine oil', 'oil filter'], false)).to.equal('You spend $600.00 for equipment and consumables!');
        });

        it("return correct result", () => {
            expect(motorcycleRider.otherSpendings(['helmet','jacked'], ['engine oil', 'oil filter'], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
        });

        it("throw error", () => {
            expect(() => motorcycleRider.otherSpendings('helmet','jacked', ['engine oil', 'oil filter'], true)).to.throw;
        });

        it("throw error", () => {
            expect(() => motorcycleRider.otherSpendings(['helmet'], 'engine oil', true)).to.throw;
        });

        it("throw error", () => {
            expect(() => motorcycleRider.otherSpendings('helmet','jacked', ['engine oil', 'oil filter'], 'true')).to.throw;
        });

        it("throw error", () => {
            expect(() => motorcycleRider.otherSpendings(['helmet','jacked'], ['engine oil', 'oil filter'], 10)).to.throw;
        });
    });
});