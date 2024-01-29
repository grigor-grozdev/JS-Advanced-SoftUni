function attachGradientEvents() {
    let grid = document.getElementById('gradient');

    grid.addEventListener('mousemove', gridMove);
    grid.addEventListener('mouseout', gridOut);

    function gridMove(event) {
        let gridBoxWidth = event.target.clientWidth;
        let mousePosition = event.offsetX / (gridBoxWidth - 1);
        let percentage = Math.trunc(mousePosition * 100);
        document.getElementById('result').textContent = percentage + '%';
    }

    function gridOut(event) {
        document.getElementById('result').textContent = '';
    }

}