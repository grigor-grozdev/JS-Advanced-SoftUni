function roadRadar(speed, area) {

    speed = Number(speed);

    let speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    if (speed <= speedLimits[area]) {
        console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
    } else if (speed <= speedLimits[area] + 20) {
        console.log(`The speed is ${speed - speedLimits[area]} km/h faster than the allowed speed of ${speedLimits[area]} - speeding`);
    } else if (speed <= speedLimits[area] + 40) {
        console.log(`The speed is ${speed - speedLimits[area]} km/h faster than the allowed speed of ${speedLimits[area]} - excessive speeding`);
    } else {
        console.log(`The speed is ${speed - speedLimits[area]} km/h faster than the allowed speed of ${speedLimits[area]} - reckless driving`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');