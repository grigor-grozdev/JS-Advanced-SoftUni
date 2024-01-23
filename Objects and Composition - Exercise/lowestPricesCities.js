function solve(arr) {
  
    let catalog = {};
    
    for (let tokens of arr) {
      
      let [town, product, price] = tokens.split(' | ');
      price = Number(price);
      
      if (!catalog.hasOwnProperty(product)){
          catalog[product] = {town: town, price: price};
      } else if (catalog[product].price > price){    
        catalog[product].price = price;
        catalog[product].town = town;
      }    
    }  
    
    for (let product in catalog) {
      console.log(`${product} -> ${catalog[product].price} (${catalog[product].town})`)
    }
    }

    solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
    )