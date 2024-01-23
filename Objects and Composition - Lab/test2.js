let arr = [{"Name":"Stamat","Score":5.5},
{"Name":"Rumen","Score":6}];

let outputArr= [];

arr.forEach((obj) => outputArr.push(makeValueRow(obj)));

function makeValueRow(obj) {
    
    let keys = Object.keys(obj);
    let result = `<tr>`;
    for (let key of keys){
        result += `<td>${obj[key]}</td>`
    };
    result += `</tr>`;

    return result;
};



console.log(outputArr.join('\n'));