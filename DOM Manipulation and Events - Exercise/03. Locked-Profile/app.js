function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll("button"));

    for (let btn of buttons) {
        btn.addEventListener('click', onClickHendler);
    }

    function onClickHendler(event) {
        let hiddenText = event.currentTarget.parentElement.querySelector('div');
        let btn = event.currentTarget;
        let radio = event.currentTarget.parentElement.querySelector("input[type='radio']:checked");

        if (radio.value == 'unlock') {
            if (btn.textContent == 'Show more') {
                hiddenText.style.display = 'block';
                btn.textContent = 'Hide it';
            } else {
                hiddenText.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }

    }
}