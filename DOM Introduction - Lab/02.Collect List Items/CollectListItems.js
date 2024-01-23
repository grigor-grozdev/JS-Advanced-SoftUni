function extractText() {
    // TODO
    let result = '';
    let items = document.getElementById('items').children;
    let listArr = Array.from(items);
    for (let item of listArr){
        result += item.textContent + '\n'
    }

    let textArea = document.getElementById('result');
    textArea.value = result;
    }