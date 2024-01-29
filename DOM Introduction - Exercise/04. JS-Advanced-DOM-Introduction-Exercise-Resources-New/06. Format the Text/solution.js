function solve() {
  let input = document.getElementById("input").value;
  let outputRef = document.getElementById("output");

  let arr = input.split('.')
  arr.map(x => x += ".");
  let mappedArr = arr.filter(x => !!x).map(x => x = x + '.');

  while (mappedArr.length > 0) {
    let p = document.createElement("p");
    let text = mappedArr.splice(0, 3).join(". ")
    p.textContent = text;
    outputRef.appendChild(p);
  }
}