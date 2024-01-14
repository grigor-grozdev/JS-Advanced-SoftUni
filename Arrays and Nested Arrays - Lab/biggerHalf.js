function solve(arr) {

    arr.sort((a, b) => a - b);

    return (arr.slice(Math.floor(arr.length/2)));

}

console.log(solve([3, 19, 14]));