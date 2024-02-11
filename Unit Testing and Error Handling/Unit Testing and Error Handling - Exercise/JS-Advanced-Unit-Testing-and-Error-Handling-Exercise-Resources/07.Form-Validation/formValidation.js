function validate() {
    let btnRef = document.getElementById("submit");

    let usernameRef = document.getElementById("username");
    let emailRef = document.getElementById("email");
    let passwordRef = document.getElementById("password");
    let confirmPassRef = document.getElementById("confirm-password");

    let isCompanyRef = document.getElementById("company");
    let companyInfoRef = document.getElementById("companyInfo");
    let companyNumRef = document.getElementById("companyNumber");

    patternUser = /[a-zA-Z0-9]{3,20}/g
    patternPass = /[\w]{5,15}/g
    patternEmail = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/g;
    patternCompanyNum = /[1-9][0-9][0-9][0-9]/g

    isCompanyRef.addEventListener("change", changeHandler);

    function changeHandler(e) {
        if (isCompanyRef.checked) {
            companyInfoRef.style.display = "block";
        } else {
            companyInfoRef.style.display = "none";
        }
    }

    btnRef.addEventListener("click", onClickHandler);

    function onClickHandler(e) {
      e.preventDefault();

        if (patternUser.test(usernameRef.value)) {
            usernameRef.style.borderColor = "none";
            usernameRef.style.border = "none";
        } else {
            usernameRef.style.border = "none";
            usernameRef.style.borderColor = "red";
        }
;
        if (patternPass.test(passwordRef.value) && passwordRef.value == confirmPassRef.value) {
            //passwordRef.removeAttribute("style");
            //confirmPassRef.removeAttribute("style");
            passwordRef.style.borderStyle = "none";
            confirmPassRef.style.borderStyle = "none";
        } else {
            //passwordRef.removeAttribute("style");
           // confirmPassRef.removeAttribute("style");
            passwordRef.style.borderColor = "red";
            confirmPassRef.style.borderColor = "red";
        }

        if (patternEmail.test(emailRef.value)) {
            emailRef.style.borderColor = "none";
            emailRef.style.borderStyle = "none";
        } else {
            
            emailRef.style.borderColor = "red";
        }

        if (isCompanyRef.checked) {
            if (patternCompanyNum.test(companyNumRef.value)) {
                companyNumRef.removeAttribute('style');
                companyNumRef.style.borderStyle = "none";
            } else {
                companyNumRef.removeAttribute(style);
                companyNumRef.style.borderColor = "red";
            }
        }
    }

    let result = document.getElementById("valid")

    if (usernameRef.style.borderStyle == "none" &&
        passwordRef.style.borderStyle == "none" &&
        confirmPassRef.style.borderStyle == "none" &&
        emailRef.style.borderStyle == "none") {
        result.style.display = "block"
        }


}
