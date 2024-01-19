function solve(arr) {

    let result = {};

    for (let i = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let kcal = Number(arr[i + 1]);

        result[name] = kcal;
    }

    console.log(result)

}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])