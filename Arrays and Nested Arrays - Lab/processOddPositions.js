function solve(arr) {

    return (arr.filter((num, i) => i % 2 != 0).map(num => num * 2).reverse().join(' '))

}

solve([10, 15, 20, 25]);