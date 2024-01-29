function focused() {
    let inputRef = document.querySelectorAll('input');
    for (let input of inputRef) {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', offFocus)
    }

    function onFocus(event) {
        let input = event.target;
        input.parentElement.classList.add('focused')
    }

    function offFocus(event) {
        let input = event.target;
        input.parentElement.classList.remove('focused')
    }
}