function solve(text) {
    console.log(text.split(/[^a-zA-Z0-9]+/)
                    .join(' ')
                    .trim()
                    .split(" ")
                    .map(x => x.toUpperCase())
                    .join(', '))
}

solve('hello')