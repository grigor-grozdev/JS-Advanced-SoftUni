function solve() {
  let [inputTextAreaRef, resultTextAreaRef] = document.querySelectorAll("textarea");
  let [genBtnRef, buyBtnRef] = document.querySelectorAll("button");
  let tbodyRef = document.querySelector("tbody");

  genBtnRef.addEventListener('click', genClickHandler);
  buyBtnRef.addEventListener('click', buyHandler)

  function genClickHandler() {
    let data = JSON.parse(inputTextAreaRef.value);

    for (let item of data) {
      createTbRow(item);
    }
  }

  function createTbRow(item) {
    let tr = document.createElement("tr");
    tr.innerHTML += createTbData(`<img src=${item.img}>`);
    tr.innerHTML += createTbData(`<p>${item.name}</p>`);
    tr.innerHTML += createTbData(`<p>${item.price}</p>`);
    tr.innerHTML += createTbData(`<p>${item.decFactor}</p>`);
    tr.innerHTML += createTbData(`<input type="checkbox">`);
    tbodyRef.appendChild(tr);
  }

  function createTbData(item) {
    return `<td>${item}</td>`
  }

  function buyHandler() {
    let name = [];
    let price = 0;
    let sumDecFac = 0;

    let selectedRows = document.querySelectorAll("input[type='checkbox']:checked");

    for (let checked of selectedRows) {
      let [imgRef, nameRef, priceRef, decFacRef] = Array.from(checked.parentElement.parentElement.children);
      let nameValue = nameRef.children[0].textContent;
      let priceValue = Number(priceRef.children[0].textContent);
      let decFacValue = Number(decFacRef.children[0].textContent);

      name.push(nameValue);
      price += priceValue;
      sumDecFac += decFacValue;
    }
    let result = "Bought furniture: ";
    result += name.join(", ");
    result += "\n";
    result += `Total price: ${price.toFixed(2)}\n`;
    result += `Average decoration factor: ${sumDecFac / (name.length)}`;

    resultTextAreaRef.value = result;
  }

}