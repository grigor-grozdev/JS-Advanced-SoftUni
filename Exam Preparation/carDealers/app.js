window.addEventListener("load", solve);

function solve() {

  let inputs = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price')
  }

  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', onPublishClick);

  let table = document.getElementById('table-body');
  let soldList = document.querySelector('#cars-list');
  let profit = document.getElementById('profit');



  function onPublishClick(event) {

    event.preventDefault();

    let make = inputs.make.value;
    let model = inputs.model.value;
    let year = inputs.year.value;
    let fuel = inputs.fuel.value;
    let originalCost = Number(inputs.originalCost.value);
    let sellingPrice = Number(inputs.sellingPrice.value);

    console.log(make, model, year, fuel, originalCost, sellingPrice)

    if (
      inputs.make.value == '' ||
      inputs.model.value == '' ||
      inputs.year.value == '' ||
      inputs.fuel.value == '' ||
      inputs.originalCost.value == '' ||
      inputs.sellingPrice.value == ''
    ) {
      return;
    }

    if (originalCost > sellingPrice) {
      return;
    }

    inputs.make.value = ''
    inputs.model.value = ''
    inputs.year.value = ''
    inputs.fuel.value = ''
    inputs.originalCost.value = ''
    inputs.sellingPrice.value = ''

    let result = createTable(make, model, year, fuel, originalCost, sellingPrice);
    table.appendChild(result);


  }

  function createTable(make, model, year, fuel, originalCost, sellingPrice) {
    let tr = e('tr');
    tr.className = 'row';
    tr.appendChild(e('td', `${make}`));
    tr.appendChild(e('td', `${model}`));
    tr.appendChild(e('td', `${year}`));
    tr.appendChild(e('td', `${fuel}`));
    tr.appendChild(e('td', `${originalCost}`));
    tr.appendChild(e('td', `${sellingPrice}`));

    let editBtn = e('button', 'Edit');
    editBtn.className = 'action-btn edit';
    tr.appendChild(editBtn);
    editBtn.addEventListener('click', () => onEditClick(make, model, year, fuel, originalCost, sellingPrice, tr))

    let sellBtn = e('button', 'Sell');
    sellBtn.className = 'action-btn sell'
    tr.appendChild(sellBtn)
    sellBtn.addEventListener('click', () => onSellClick(make, model, year, fuel, originalCost, sellingPrice, tr))

    return tr
  }

  function onEditClick(make, model, year, fuel, originalCost, sellingPrice, tr) {

    inputs.make.value = make
    inputs.model.value = model
    inputs.year.value = year
    inputs.fuel.value = fuel
    inputs.originalCost.value = originalCost
    inputs.sellingPrice.value = sellingPrice

    tr.remove();
  }

  function onSellClick(make, model, year, fuel, originalCost, sellingPrice, tr) {
    console.log(make, model, year, fuel, originalCost, sellingPrice, tr)

    let result = createSoldList(make, model, year, fuel, originalCost, sellingPrice);
    soldList.appendChild(result);
    tr.remove();
    let currentProfit = (Number(profit.textContent) + (sellingPrice - originalCost)).toFixed(2)
    profit.textContent = currentProfit;
  }

  function createSoldList(make, model, year, fuel, originalCost, sellingPrice) {
    let element = e('li');
    element.className = 'each-list';
    element.appendChild(e('span', `${make} ${model}`));
    element.appendChild(e('span', `${year}`));
    element.appendChild(e('span', `${sellingPrice - originalCost}`));
    return element;
  }

  function e(type, content) {
    let element = document.createElement(type);
    if (content) {
      element.textContent = content;
    }
    return element;
  }
}
