function solve() {
  let input = document.getElementById("text").value.toLowerCase();
  let outputCase = document.getElementById("naming-convention").value;
  let resultRef = document.getElementById("result");
  let result = '';

  let inputArr = input.split(' ');


  if (outputCase == 'Camel Case') {
    result = inputArr.shift();
    for (let word of inputArr) {
      result += word[0].toUpperCase() + word.slice(1);
    }
  } else if (outputCase == 'Pascal Case') {
    for (let word of inputArr) {
      result += word[0].toUpperCase() + word.slice(1);
    }
  } else {
    result = 'Error!'
  }

  resultRef.textContent = result;
}