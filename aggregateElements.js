function aggregateElements(arr){
    let sum = 0;
    let inverseSum = 0;
    let concat = '';
    for (let el of arr){
        sum += el;
        inverseSum += 1 / el;
        concat += el;
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

aggregateElements([2, 4, 8, 16])