window.addEventListener('load', solve);

function solve() {

    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onClickNext);

    let inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        dateIn: document.getElementById('date-in'),
        dateOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count'),
    };

    let infoList = document.querySelector(".info-list");
    let confirmList = document.querySelector(".confirm-list");
    let reservationList = document.getElementById('verification');


    function onClickNext(event) {
        event.preventDefault();

        let firstName = inputs.firstName.value;
        let lastName = inputs.lastName.value;
        let dateIn = inputs.dateIn.value;
        let dateOut = inputs.dateOut.value;
        let peopleCount = Number(inputs.peopleCount.value);

        if (inputs.firstName.value == '' ||
            inputs.lastName.value == '' ||
            inputs.dateIn.value == '' ||
            inputs.dateOut.value == '' ||
            inputs.peopleCount.value == '') {
            return;
        };

        if ((new Date(dateIn)).getTime() >= (new Date(dateOut)).getTime()) {
            return;
        };

        nextBtn.parentElement.reset();

        nextBtn.disabled = true;

        let result = createPreviewElements(firstName, lastName, dateIn, dateOut, peopleCount);
        infoList.appendChild(result);
    };

    function createPreviewElements(firstName, lastName, dateIn, dateOut, peopleCount) {

        let element = e('li');
        element.className = "reservation-content";

        let article = e('article');
        article.appendChild(e('h3', `Name: ${firstName} ${lastName}`));
        article.appendChild(e('p', `From date: ${dateIn}`));
        article.appendChild(e('p', `To date: ${dateOut}`));
        article.appendChild(e('p', `For ${peopleCount} people`));

        element.appendChild(article);

        let editBtn = e('button', 'Edit');
        editBtn.className = 'edit-btn';
        element.appendChild(editBtn);
        editBtn.addEventListener('click', () => onEditClick(firstName, lastName, dateIn, dateOut, peopleCount));

        let continueBtn = e('button', 'Continue');
        continueBtn.className = 'continue-btn';
        element.appendChild(continueBtn);
        continueBtn.addEventListener('click', () => onContinueClick(firstName, lastName, dateIn, dateOut, peopleCount));

        return element;
    };

    function onEditClick(firstName, lastName, dateIn, dateOut, peopleCount) {

        inputs.firstName.value = firstName;
        inputs.lastName.value = lastName;
        inputs.dateIn.value = dateIn;
        inputs.dateOut.value = dateOut;
        inputs.peopleCount.value = peopleCount;

        nextBtn.disabled = false;

        infoList.textContent = '';

    }

    function onContinueClick(firstName, lastName, dateIn, dateOut, peopleCount) {
        let result = createConfirmElements(firstName, lastName, dateIn, dateOut, peopleCount);
        confirmList.appendChild(result);
        infoList.textContent = '';
    }

    function createConfirmElements(firstName, lastName, dateIn, dateOut, peopleCount) {
        let element = e('li');
        element.className = "reservation-content";

        let article = e('article');
        article.appendChild(e('h3', `Name: ${firstName} ${lastName}`));
        article.appendChild(e('p', `From date: ${dateIn}`));
        article.appendChild(e('p', `To date: ${dateOut}`));
        article.appendChild(e('p', `For ${peopleCount} people`));

        element.appendChild(article);

        let confirmBtn = e('button', 'Confirm');
        confirmBtn.className = 'confirm-btn';
        element.appendChild(confirmBtn);
        confirmBtn.addEventListener('click', onFinish.bind(null,true));

        let cancelBtn = e('button', 'Cancel');
        cancelBtn.className = 'cancel-btn';
        element.appendChild(cancelBtn);
        cancelBtn.addEventListener('click', onFinish.bind(null,false));

        return element;
    };

    function onFinish(confirmed){
        
        let className = confirmed ? 'reservation-confirmed' : 'reservation-cancelled';
        let text = confirmed ? 'Confirmed.' : 'Cancelled.';

        reservationList.className = className;
        reservationList.textContent = text;

        confirmList.textContent = '';
        nextBtn.disabled = false;
    }


    function e(type, content) {
        let element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }
        return element;
    };


}





