import {expect} from 'chai'
import {planYourTrip } from '../Unit Testing and Error Handling - Exercise/planYourTrip.js'

describe("test suite", function () {

    describe("•	choosingDestination functionality", () => {

        it("test valid input", () => {
            expect(()=> planYourTrip.choosingDestination('a','a',2023)).to.throw();
        })

        it("test valid input", () => {
            expect(()=> planYourTrip.choosingDestination('Ski Resort','Winter', 2022)).to.throw();
        })

        it("test valid input", () => {
            expect(()=> planYourTrip.choosingDestination('a','a', '2024')).to.throw();
        })

        it("test valid input", () => {
            expect(()=> planYourTrip.choosingDestination('a','a', 2024)).to.throw();
        })

        it("test valid input", () => {
            expect(planYourTrip.choosingDestination('Ski Resort','Winter', 2024)).to.equal(`Great choice! The Winter is the perfect time to visit the Ski Resort.`);
        })

        it("test valid input", () => {
            expect(planYourTrip.choosingDestination('Ski Resort','Summer', 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`);
        })
    })

    describe("• exploreOptions functionality", () => {

        it("test valid input", () => {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1)).to.equal('Skiing, Winter Hiking');
        })

        it("test valid input", () => {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2)).to.equal('Skiing, Snowboarding');
        })

        it("test valid input", () => {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 0)).to.equal('Snowboarding, Winter Hiking');
        })

        it("test valid input", () => {
            expect(planYourTrip.exploreOptions(["Skiing"], 0)).to.equal('');
        })

        it("test invalid input", () => {
            expect(()=> planYourTrip.exploreOptions("Skiing", '0')).to.throw;
        })

        it("test invalid input", () => {
            expect(()=> planYourTrip.exploreOptions("Skiing", 0)).to.throw;
        })

        it("test invalid input", () => {
            expect(()=> planYourTrip.exploreOptions(["Skiing"], -1.5)).to.throw;
        })

        it("test invalid input", () => {
            expect(()=> planYourTrip.exploreOptions(["Skiing"], -1)).to.throw;
        })

        it("test invalid input", () => {
            expect(()=> planYourTrip.exploreOptions(["Skiing"], 5)).to.throw;
        })

        it("test invalid input", () => {
            expect(()=> planYourTrip.exploreOptions(["Skiing"], 5.5)).to.throw;
        })

        it("test invalid input", () => {
            expect(()=> planYourTrip.exploreOptions(["Skiing"], '0')).to.throw;
        })

        it("test invalid input", () => {
            expect(()=> planYourTrip.exploreOptions([], 0)).to.throw;
        })
    })

    describe ("•estimateExpenses functionality", () => {

        it ("test valid input", ()=> {
            expect(planYourTrip.estimateExpenses(100, 2)).to.equal('The trip is budget-friendly, estimated cost is $200.00.')
        })

        it ("test valid input", ()=> {
            expect(planYourTrip.estimateExpenses(100, 5)).to.equal('The trip is budget-friendly, estimated cost is $500.00.')
        })

        it ("test valid input", ()=> {
            expect(planYourTrip.estimateExpenses(300, 2)).to.equal('The estimated cost for the trip is $600.00, plan accordingly.')
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses('300', '2')).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses(300, '2')).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses(-300, '2')).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses(0, '2')).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses(0, 2)).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses(0, 0)).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses(100, -2)).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses(-100, -2)).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses(100, 0)).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses('100', 2)).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses(-100, 2)).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses(undefined, 2)).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses(100, undefined)).to.throw();
        })

        it ("test invalid input", ()=> {
            expect(()=> planYourTrip.estimateExpenses(undefined, undefined)).to.throw();
        })

    })

})