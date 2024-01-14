function solve(arr, start, end) {

    let startIdx = arr.indexOf(start);
    let endIdx = arr.indexOf(end) + 1;

    let result = arr.slice(startIdx, endIdx)

    return result;

}

solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')