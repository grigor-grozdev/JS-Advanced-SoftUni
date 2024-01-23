function extract(content) {
    let text = document.getElementById(content).textContent;

    let pattern = /[(][^\(\)]+[)]/g;

    let result = text.match(pattern);

    return result.join('; ');
}