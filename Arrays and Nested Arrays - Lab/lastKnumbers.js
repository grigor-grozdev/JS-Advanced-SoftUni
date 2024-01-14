function lastKnumbers(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                sum += result[i - j];
            } else {
                continue;
            }
        }
        result.push(sum);
    }
    return result;
}

console.log(lastKnumbers(16, 4));
lastKnumbers(8, 2);