function cookingByNumbers(num, ...operations) {
    num = Number(num);

    let actions = {
        chop() { return (num = num / 2); },
        dice() { return num = Math.sqrt(num); },
        spice() { return num = num + 1; },
        bake() { return num = num * 3 },
        fillet() { return num = num * 0.8; }
    }

    operations.forEach(action => console.log(actions[action](num)));

}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')