window.addEventListener('load', solve);

function solve() {

    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNextClick);

    let inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        fromDate: document.getElementById('from-date'),
        days: document.getElementById('days-count')
    }

    let infoList = document.querySelector(".ticket-info-list");
    let confirmList = document.querySelector(".confirm-ticket");
    let mainEl = document.getElementById('main');
    let bodyEl = document.getElementById('body');


    function onNextClick(event) {

        event.preventDefault();

        if (inputs.firstName.value == '' ||
            inputs.lastName.value == '' ||
            inputs.peopleCount.value == '' ||
            inputs.fromDate.value == '' ||
            inputs.days.value == '') {
            return
        }

        let firstName = inputs.firstName.value;
        let lastName = inputs.lastName.value;
        let peopleCount = inputs.peopleCount.value;
        let fromDate = inputs.fromDate.value;
        let days = inputs.days.value;

        nextBtn.disabled = true;
        nextBtn.parentElement.reset();

        let result = createPreviewList (firstName, lastName, peopleCount, fromDate, days);
        infoList.appendChild(result);
    }

    function createPreviewList (firstName, lastName, peopleCount, fromDate, days) {

        let element = el("li");
        element.className = "ticket";
        let article = el("article");
        article.appendChild(el('h3', `Name: ${firstName} ${lastName}`));
        article.appendChild(el('p', `From date: ${fromDate}`));
        article.appendChild(el('p', `For ${days} days`));
        article.appendChild(el('p', `For ${peopleCount} people`));

        element.appendChild(article);

        let editBtn = el('button', 'Edit');
        editBtn.className = 'edit-btn';
        element.appendChild(editBtn);
        editBtn.addEventListener('click', () => onEditClick(firstName, lastName, peopleCount, fromDate, days))

        let continueBtn = el('button', 'Continue');
        continueBtn.className = "continue-btn";
        element.appendChild(continueBtn);
        continueBtn.addEventListener('click', () => onContinueClick(firstName, lastName, peopleCount, fromDate, days))

        return element;
    };

    function onEditClick(firstName, lastName, peopleCount, fromDate, days) {

        inputs.firstName.value = firstName;
        inputs.lastName.value = lastName;
        inputs.peopleCount.value = peopleCount;
        inputs.fromDate.value = fromDate;
        inputs.days.value = days;

        nextBtn.disabled = false;
        infoList.textContent = '';

    }

    function onContinueClick(firstName, lastName, peopleCount, fromDate, days) {

        let result = createConfirmList (firstName, lastName, peopleCount, fromDate, days);
        confirmList.appendChild(result);

        infoList.textContent = '';
    }

    function createConfirmList (firstName, lastName, peopleCount, fromDate, days) {

        let element = el("li");
        element.className = "ticket";
        let article = el("article");
        article.appendChild(el('h3', `Name: ${firstName} ${lastName}`));
        article.appendChild(el('p', `From date: ${fromDate}`));
        article.appendChild(el('p', `For ${days} days`));
        article.appendChild(el('p', `For ${peopleCount} people`));

        element.appendChild(article);

        let confirmBtn = el('button', 'Confirm');
        confirmBtn.className = 'confirm-btn';
        element.appendChild(confirmBtn);
        confirmBtn.addEventListener('click', onConfirmClick);

        let cancelBtn = el('button', 'Cancel');
        cancelBtn.className = "cancel-btn";
        element.appendChild(cancelBtn);
        cancelBtn.addEventListener('click', onCancelClick);

        return element;
    };


    function el(type, content) {

        let element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }

        return element;
    };

    function onConfirmClick(event){
        
        bodyEl.textContent = '';

        let element = el('h1', 'Thank you, have a nice day!');
        element.setAttribute("id", "thank-you");
        bodyEl.appendChild(element);

        let backBtn = el('button', 'Back');
        backBtn.setAttribute("id", "back-btn");
        bodyEl.appendChild(backBtn);
        backBtn.addEventListener('click', onBackClick);  

    };

    function onCancelClick(event) {
        confirmList.textContent = '';
        nextBtn.disabled = false;
    };

    function onBackClick(event) {
        bodyEl.textContent = '';
        bodyEl.appendChild(mainEl);
        confirmList.textContent = '';
        nextBtn.disabled = false;
    };

};




