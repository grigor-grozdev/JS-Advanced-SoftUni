function solve(arr) {

    let catalog = {};

    for (let tokens of arr) {
        let [product, price] = tokens.split(' : ');
        price = Number(price);
        let startLetter = product[0];

        if (catalog.hasOwnProperty(startLetter)) {
            catalog[startLetter][product] = price;
        } else {
            catalog[startLetter] = { [product]: price };
        }
    }


    let entries = Object.entries(catalog);

    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let entry of entries) {
        console.log(entry[0]);
        let list = Object.entries(entry[1]).sort((a, b) => a[0].localeCompare(b[0]));

        for (let product of list) {
            console.log(`  ${product[0]}: ${product[1]}`);
        }

    }

}

solve(['Banana : 2', 'Rubic\'s Cube : 5', 'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])