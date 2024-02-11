function solve(arr, action) {
    
    return arr = action == 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))