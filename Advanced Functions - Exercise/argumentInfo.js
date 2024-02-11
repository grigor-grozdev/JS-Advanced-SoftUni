function solve(...input) {

    input.forEach(el => console.log(`${typeof (el)}: ${el}`));
    let result = {}
    for (let el of input) {
        if (!result.hasOwnProperty(typeof (el))) {
            result[typeof (el)] = 0
        }
        result[typeof (el)] += 1
    }

    let sortArr = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortArr) {
        console.log(`${key} = ${value}`)
    }

}

solve('cat', 42, 56, function () { console.log('Hello world!'); })