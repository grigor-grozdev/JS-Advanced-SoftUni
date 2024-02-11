function solve() {
    let formRef = document.querySelector("form");
    let [addTask, openTask, inProgress, complete] = document.querySelectorAll("section");

    btnHandlerEnum = {
        start: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            currentArticle.innerHTML += createBtns({ classes: "red", text: "Delete" }, { classes: "orange", text: "Finish" })
            let btns = currentArticle.querySelectorAll("button");
            addEventListenerToBtns(btns);
            inProgress.children[1].appendChild(currentArticle);
        },
        finish: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            complete.children[1].appendChild(currentArticle);
        },
        delete: function (e) {
            e.target.parentElement.parentElement.remove();
        }
    }

    formRef.addEventListener("submit", onSubmitHandler);


    function onSubmitHandler(e) {
        e.preventDefault();
        let formElements = e.target.elements;
        let task = formElements[0].value;
        let desc = formElements[1].value;
        let date = formElements[2].value;

        if (!task || !desc || !date) {
            return
        }

        createArticle(task, desc, date);
        clearForm(formElements);
    }

    function clearForm(formElements) {
        formElements[0].value = '';
        formElements[1].value = '';
        formElements[2].value = '';
    }

    function createArticle(task, desc, date) {
        let newArticle = document.createElement("article");
        newArticle.innerHTML = getArticleTemp(task, desc, date);
        openTask.children[1].appendChild(newArticle);
        let btns = newArticle.querySelectorAll("button");
        addEventListenerToBtns(btns);
    }

    function clickHandler(e) {
        let currentAction = e.target.innerText.toLowerCase();
        btnHandlerEnum[currentAction](e);
    }

    function addEventListenerToBtns(btns) {
        Array.from(btns).forEach(btn => btn.addEventListener("click", clickHandler));
    }


    function getArticleTemp(task, desc, date) {
        return `<h3>${task}</h3>` +
            `<p>Description: ${desc}</p>` +
            `<p>Due Date: ${date}</p>` +
            createBtns({ classes: "green", text: "Start" }, { classes: "red", text: "Delete" });
    }

    function createBtns(btn1, btn2) {
        return `<div class="flex">` +
            `<button class="${btn1.classes}">${btn1.text}</button>` +
            `<button class="${btn2.classes}">${btn2.text}</button>` +
            `</div>`
    }

    function removeBtn(target) {
        target.remove();
    }


}