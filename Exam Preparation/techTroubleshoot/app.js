window.addEventListener('load', solution);

function solution() {



  let addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', onAddClick);

  let inputs = {
    employee: document.getElementById('employee'),
    category: document.getElementById('category'),
    urgency: document.getElementById('urgency'),
    team: document.getElementById('team'),
    description: document.getElementById('description')
  };

  let previewList = document.querySelector('.preview-list');
  let pendingList = document.querySelector('.pending-list');
  let resolvedList = document.querySelector('.resolved-list');


  function onAddClick(event) {
    event.preventDefault();

    let employee = inputs.employee.value;
    let category = inputs.category.value;
    let urgency = inputs.urgency.value;
    let team = inputs.team.value;
    let description = inputs.description.value;

    if (employee == '' || category == '' || urgency == '' || team == '' || description == '') {
      return
    };

    addBtn.parentElement.reset();
    addBtn.disabled = true;

    let result = createPreviewElements(employee, category, urgency, team, description);
    previewList.appendChild(result);

  };

  function createPreviewElements(employee, category, urgency, team, description) {

    let element = e('li');
    element.className = 'problem-content';
    element.style.display = "flex"
    let article = e('article');
    article.style.display = "flex"
    article.appendChild(e('p', `From ${employee}`));
    article.appendChild(e('p', `Category: ${category}`));
    article.appendChild(e('p', `Urgency: ${urgency}`));
    article.appendChild(e('p', `Assigned to: ${team}`));
    article.appendChild(e('p', `Description: ${description}`));
    element.appendChild(article);

    let editBtn = e('button', 'Edit');
    editBtn.className = 'edit-btn';
    element.appendChild(editBtn);
    editBtn.addEventListener('click', () => onEditClick(employee, category, urgency, team, description));

    let continueBtn = e('button', 'Continue');
    continueBtn.className = 'continue-btn';
    element.appendChild(continueBtn);
    continueBtn.addEventListener('click', () => onContinueClick(employee, category, urgency, team, description));

    return element;
  };

  function onContinueClick(employee, category, urgency, team, description) {

    let result = createPendingElements(employee, category, urgency, team, description);
    pendingList.appendChild(result);

    previewList.textContent = '';

  };

  function createPendingElements(employee, category, urgency, team, description) {
    let element = e('li');
    element.className = 'problem-content';
    element.style.display = "flex"
    let article = e('article');
    article.style.display = "flex"
    article.appendChild(e('p', `From ${employee}`));
    article.appendChild(e('p', `Category: ${category}`));
    article.appendChild(e('p', `Urgency: ${urgency}`));
    article.appendChild(e('p', `Assigned to: ${team}`));
    article.appendChild(e('p', `Description: ${description}`));
    element.appendChild(article);

    let resolveBtn = e('button', 'Resolved');
    resolveBtn.className = 'resolve-btn';
    element.appendChild(resolveBtn);
    resolveBtn.addEventListener('click', () => onResolvedClick(employee, category, urgency, team, description));

    return element;
  };

  function onResolvedClick(employee, category, urgency, team, description) {

    let result = createResolvedElements(employee, category, urgency, team, description);
    resolvedList.appendChild(result);

    pendingList.textContent = '';
  };

  function createResolvedElements(employee, category, urgency, team, description) {

    let element = e('li');
    element.className = 'problem-content';
    element.style.display = "flex"
    let article = e('article');
    article.style.display = "flex"
    article.appendChild(e('p', `From ${employee}`));
    article.appendChild(e('p', `Category: ${category}`));
    article.appendChild(e('p', `Urgency: ${urgency}`));
    article.appendChild(e('p', `Assigned to: ${team}`));
    article.appendChild(e('p', `Description: ${description}`));
    element.appendChild(article);

    let clearBtn = e('button', 'Clear');
    clearBtn.className = 'clear-btn';
    element.appendChild(clearBtn);
    clearBtn.addEventListener('click', onClearClick);

    return element;

  };

  function onClearClick(event) {
    resolvedList.textContent = '';
    addBtn.disabled = false;
  };

  function onEditClick(employee, category, urgency, team, description) {

    inputs.employee.value = employee;
    inputs.category.value = category;
    inputs.urgency.value = urgency;
    inputs.team.value = team;
    inputs.description.value = description;

    previewList.textContent = '';
    addBtn.disabled = false;

  };

  function e(type, content) {
    let element = document.createElement(type);
    if (content) {
      element.textContent = content;
    }
    return element;
  };

};




