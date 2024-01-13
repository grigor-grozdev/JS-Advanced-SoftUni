function solve(num) {

    let isSame = true;
    let sum = 0;

    let numAsStr = num.toString();

    for (let i = 1; i < numAsStr.length; i++) {
        if (numAsStr[i] != numAsStr[i - 1]) {
            isSame = false;
        }
        sum += Number(numAsStr[i]);
    }
    console.log(isSame);

    console.log(sum + Number(numAsStr[0]));
}

solve(22222)