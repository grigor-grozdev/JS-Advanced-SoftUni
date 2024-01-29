function deleteByEmail() {
    let input = document.querySelector('[name ="email"]');

    let rows = Array.from(document.querySelectorAll("tbody tr"));

    let success = false;

    for (let row of rows) {
        if (row.children[1].textContent == input.value) {
            row.remove();
            success = true;
        }
    }

    let output = document.getElementById("result");

    if (success) {
        input.value = '';
        output.textContent = 'Deleted.';
    } else {
        output.textContent = 'Not found.';
    }
}