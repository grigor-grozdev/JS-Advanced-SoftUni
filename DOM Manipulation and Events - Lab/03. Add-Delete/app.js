function addItem() {
    let input = document.getElementById("newItemText");

    if (input.value.length == 0) {
        return;
    }

    let li = document.createElement("li");
    li.textContent = input.value;
    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = "#";
    deleteBtn.addEventListener('click', onDelete);
    li.appendChild(deleteBtn);

    let list = document.getElementById("items");
    list.appendChild(li);

    input.value = "";

    function onDelete(event) {
        let delBtn = event.target;
        let parEl = delBtn.parentElement;
        parEl.remove();
    }
}