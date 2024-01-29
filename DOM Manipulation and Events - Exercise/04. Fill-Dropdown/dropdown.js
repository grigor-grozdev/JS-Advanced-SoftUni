function addItem() {
    let menuRef = document.getElementById("menu");
    let newTextRef = document.getElementById("newItemText");
    let newValueRef = document.getElementById("newItemValue");

    let newText = newTextRef.value;
    let newValue = newValueRef.value;

    let option = document.createElement("option");
    option.text = newText;
    option.value = newValue;

    menuRef.appendChild(option);

    newTextRef.value = "";
    newValueRef.value = "";
}