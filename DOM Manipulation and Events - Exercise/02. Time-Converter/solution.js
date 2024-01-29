function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll("input[type='button']"));

    for (let btn of buttons) {
        btn.addEventListener("click", convertHendler);
    }

    function convertHendler(event) {
        let currentUnitInput = event.currentTarget.parentElement.children[1];
        let value = Number(currentUnitInput.value);
        let unit = currentUnitInput.id;

        switch (unit) {
            case "days": setNewUnit(value); break;
            case "hours": setNewUnit(value / 24); break;
            case "minutes": setNewUnit(value / 24 / 60); break;
            case "seconds": setNewUnit(value / 24 / 60 / 60); break;
        }
    }

    function setNewUnit(days) {
        let inputs = document.querySelectorAll("input[type='text']");
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }
}