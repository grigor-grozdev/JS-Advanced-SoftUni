function addItem() {
    let input = document.getElementById("newItemText");

    if (input.value.length == 0) {
        return;
    }

    let li = document.createElement("li");
    li.textContent = input.value;
    let list = document.getElementById("items");
    list.appendChild(li);

    input.value = "";
}