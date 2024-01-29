function generateReport() {
    let result = [];
    let index = [];
    let obj = {};

    let checkArr = Array.from(document.querySelectorAll("table input[type='checkbox']:checked"));

    let arr = Array.from(document.querySelectorAll("input[type='checkbox']")).map(a => a = a.name);

    for (let box of checkArr) {
        index.push(arr.indexOf(box.name));
        obj[arr.indexOf(box.name)] = box.name;
    }
    let table = Array.from(document.querySelectorAll("tbody tr"));

    for (let rows of table) {
        let row = rows.children
        let objRow = {};

        for (let i of index) {
            objRow[obj[i]] = row[i].textContent;
        }
        
        result.push(objRow)
    }

    let report = JSON.stringify(result);

    let outputRef = document.getElementById("output");
    outputRef.textContent = report;
}

//Array.from(document.querySelectorAll("tbody tr"))[0].children[0].textContent
//"Poole, Tracy" 