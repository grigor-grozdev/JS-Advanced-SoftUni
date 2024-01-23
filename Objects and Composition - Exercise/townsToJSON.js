function solve(arr) {

    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split('|').map(x => x.trim()).filter(x => !!x);
        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));
        let obj = {
            Town: town,
            Latitude: latitude,
            Longitude: longitude
        }
        result.push(obj)
    }
    console.log(JSON.stringify(result));

}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])