class OnlineShop {

    warehouseSpace;

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {

        if (spaceRequired > this.warehouseSpace) {
            throw new Error('Not enough space in the warehouse.');
        } else {
            this.warehouseSpace -= spaceRequired;
            this.products.push({ product, quantity });
            return `The ${product} has been successfully delivered in the warehouse.`
        }
    }

    quantityCheck(product, minimalQuantity) {
        let data = this.products.find((p) => p.product == product);
        
        if (!data) {
            throw new Error (`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error ('The quantity cannot be zero or negative.');
        }
        if (minimalQuantity <= data.quantity) {
            return `You have enough from product ${product}.`
        } 
            let difference = minimalQuantity - data.quantity;
            data.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`
        

    }

    sellProduct(product) {
        let data = this.products.find((p) => p.product == product);
        
        if (!data) {
            throw new Error (`There is no ${product} in the warehouse.`);
        } 
            data.quantity -= 1;
            this.sales.push({product: product, quantity: 1});
            return `The ${product} has been successfully sold.`
        
    }

    revision () {

        let result = [];

        if (this.sales.length == 0) {
            return `There are no sales today!`
        } else {
            result.push(`You sold ${this.sales.length} products today!`);            
        }

        result.push(`Products in warehouse:`);
        for (let {product, quantity} of this.products) {
            result.push(`${product}-${quantity} more left`);
        }

        return result.join('\n');
    }

}


try {
    const myOnlineShop = new OnlineShop(500)
    console.log(myOnlineShop.loadingStore('headphones', 10, 200));
    console.log(myOnlineShop.loadingStore('laptop', 5, 200));
    
    console.log(myOnlineShop.quantityCheck('headphones', 10));
    console.log(myOnlineShop.quantityCheck('laptop', 10));
    
    console.log(myOnlineShop.sellProduct('headphones'));
    console.log(myOnlineShop.sellProduct('laptop'));
    console.log(myOnlineShop.revision());
    


} catch (err) {
    console.log(err)
}

