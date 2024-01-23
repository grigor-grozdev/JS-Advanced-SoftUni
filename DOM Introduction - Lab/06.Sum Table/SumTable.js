function sumTable() {
    let sum = 0;
    let table = Array.from(document.getElementsByTagName('tr'));

    for (let i = 1; i < table.length-1; i++) {

        let row = Array.from(table[i].children);

        sum += Number(row[row.length-1].textContent);
        
    }

    document.getElementById('sum').textContent = sum;
    
}