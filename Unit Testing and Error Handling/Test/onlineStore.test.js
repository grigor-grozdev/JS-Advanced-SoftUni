import {expect} from 'chai';
import { onlineStore } from '../Unit Testing and Error Handling - Exercise/onlineStore.js'

describe("test", function() {

    describe("testing isProductAvailable functionality", () => {

        it("expect valid output", ()=>{
            expect(onlineStore.isProductAvailable("product", 0)).to.equal("Sorry, product is currently out of stock.");
        });

        it("expect valid output", ()=>{
            expect(onlineStore.isProductAvailable("product", -1)).to.equal("Sorry, product is currently out of stock.");
        });

        it("expect valid output", ()=>{
            expect(onlineStore.isProductAvailable("product", 1)).to.equal("Great! product is available for purchase.");
        });

        it("test with invalid input", ()=>{
            expect(()=>onlineStore.isProductAvailable(1, 1)).to.throw;
        });

        it("test with invalid input", ()=>{
            expect(()=>onlineStore.isProductAvailable(1, '1')).to.throw;
        });

        it("test with invalid input", ()=>{
            expect(()=>onlineStore.isProductAvailable('1', '1')).to.throw;
        });        
    });

    describe("testing canAffordProduct functionality", ()=>{

        it("expect valid output", ()=>{
            expect(onlineStore.canAffordProduct(2,1)).to.equal("You don't have sufficient funds to buy this product.");
        });

        it("expect valid output", ()=>{
            expect(onlineStore.canAffordProduct(2,-1)).to.equal("You don't have sufficient funds to buy this product.");
        });

        it("expect valid output", ()=>{
            expect(onlineStore.canAffordProduct(1,1)).to.equal("Product purchased. Your remaining balance is $0.");
        });

        it("expect valid output", ()=>{
            expect(onlineStore.canAffordProduct(1,2)).to.equal("Product purchased. Your remaining balance is $1.");
        });

        it("test invalid input", ()=>{
            expect(()=>onlineStore.canAffordProduct('1',1)).to.throw();
        });

        it("test invalid input", ()=>{
            expect(()=>onlineStore.canAffordProduct('1','1')).to.throw();
        });

        it("test invalid input", ()=>{
            expect(()=>onlineStore.canAffordProduct(1,'1')).to.throw();
        });
    });

    describe ("testing getRecommendedProducts functionality", ()=>{

        it("expect valid output", ()=>{
            expect(onlineStore.getRecommendedProducts([{name:"Camera", category:"Photography"}], "Photography")).to.equal("Recommended products in the Photography category: Camera")
        });

        it("expect valid output", ()=>{
            expect(onlineStore.getRecommendedProducts([{name:"Camera", category:"Photography"}], "Photo")).to.equal("Sorry, we currently have no recommended products in the Photo category.")
        });

        it("test invalid input", ()=>{
            expect(()=> onlineStore.getRecommendedProducts([{name:"Camera", category:"Photography"}], 1)).to.throw();
        });

        it("test invalid input", ()=>{
            expect(()=> onlineStore.getRecommendedProducts({name:"Camera", category:"Photography"}, '1')).to.throw();
        });

        it("test invalid input", ()=>{
            expect(()=> onlineStore.getRecommendedProducts({name:"Camera", category:"Photography"}, 1)).to.throw();
        });
    });
});