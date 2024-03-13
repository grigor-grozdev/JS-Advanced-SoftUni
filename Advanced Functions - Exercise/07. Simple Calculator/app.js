function calculator() {
    return {
        init('selector1', 'selector2', 'resultSelector'){
            return {
            let num1 = document.querySelector('selector1'),
            let num2 = document.querySelector('selector2'),
            let result = document.querySelector('resultSelector')
            }
        },
        add(){
            result.textContent = num1.value + num2.value;
        },
        subtract() {
            result.textContent = num1.value - num2.value;
        }
    };
};




const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
