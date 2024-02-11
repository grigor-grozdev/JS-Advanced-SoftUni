function solve(arr, sort){
    class Ticket {
        destination;
        price;
        status;
        constructor(destination, price, status){
            this.destination = destination,
            this.price = price,
            this.status = status
        }
    }
    
    let result = [];
    
    for (let tokens of arr) {
        let [destination, price, status] = tokens.split('|');
        price = Number(price);
        let ticket = new Ticket (destination, price, status);
        result.push(ticket);
    }
    
    let sortedResult = [];
    
    if (sort == "price") {
    sortedResult = result.sort((a, b) => a[sort] - b[sort]);   
    } else {
    sortedResult = result.sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    
    return sortedResult;
}