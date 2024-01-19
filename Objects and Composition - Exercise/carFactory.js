function solve(obj) {

    let order = obj;
    let result = {};

    let engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 }
    }

    let hp = order.power;

    function power(hp) {
        let eng = {};
        if (order.power <= 90) {
            eng = engines.smallEngine;
        } else if (order.power <= 120) {
            eng = engines.normalEngine;
        } else if (order.power <= 200) {
            eng = engines.monsterEngine;
        }
        return eng;
    }

    let type = {
        hatchback: { type: 'hatchback', color: order.color },
        coupe: { type: 'coupe', color: order.color }
    }

    let wheel = 0;
    if (order.wheelsize % 2 == 0) {
        wheel = order.wheelsize - 1;
    } else {
        wheel = order.wheelsize;
    }
    let wheelsFinal = new Array(4).fill(wheel);

    result = {
        model: order.model,
        engine: power(hp),
        carriage: type[order.carriage],
        wheels: wheelsFinal
    }

    return result;
}

solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})