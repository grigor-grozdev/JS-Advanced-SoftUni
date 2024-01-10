function circleArea(arg){
    let type = typeof arg;
    if (type == 'number'){
        console.log((Math.pow(arg, 2) * Math.PI).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
 }

 circleArea('asdf')