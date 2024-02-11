function solve(arr) {

    let cars = new Map();

    for (let row of arr) {
        let [brand, model, qty] = row.split(' | ');
        qty = Number(qty);

        if (!cars.has(brand)) {
            let models = new Map();
            models.set(model, qty)

            cars.set(brand, models);
        } else {
            if (!cars.get(brand).has(model)) {
                cars.get(brand).set(model, qty);
            } else {
                cars.get(brand).set(model, cars.get(brand).get(model) + qty)
            }
        }

    }

    for (let entry of cars) {
        console.log(entry[0])
        for (let items of entry[1]) {
            console.log(`###${items[0]} -> ${items[1]}`)
        }
    }
}