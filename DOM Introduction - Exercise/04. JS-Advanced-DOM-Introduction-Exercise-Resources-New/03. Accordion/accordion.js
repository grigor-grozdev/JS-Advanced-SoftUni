function toggle() {
    let buttonRef = document.querySelector('.button');
    let textRef = document.querySelector('div#extra');
    if (buttonRef.textContent == 'More') {
        textRef.style.display = "block";
        buttonRef.textContent = "Less";
    } else if (buttonRef.textContent == 'Less') {
        textRef.style.display = "none";
        buttonRef.textContent = "More";
    }
}