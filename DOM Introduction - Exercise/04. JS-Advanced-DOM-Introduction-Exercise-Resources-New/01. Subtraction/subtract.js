function subtract() {
    let num1Ref = document.getElementById("firstNumber");
    let num2Ref = document.getElementById("secondNumber");
    let resultRef = document.getElementById("result");

    let num1 = Number(num1Ref.value);
    let num2 = Number(num2Ref.value);

    resultRef.textContent = num1 - num2;
}