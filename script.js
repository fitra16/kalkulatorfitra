const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equal-sign")
const clearBtn = document.querySelector(".all-clear")
const decimal = document.querySelector(".decimal")
const calculatorScreen = document.querySelector(".calculator-screen")

let prevNumber = '';
let operation = '';
let currentNumber = '0';

const updateScreen = (number) => {
    calculatorScreen.value = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (e) =>{
        inputNumber(e.target.value)
        updateScreen(currentNumber)
    })
})

operators.forEach((operator) =>{
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value)
    })
})

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }  
}

const inputOperator = (operator) =>{
    if(operation === ''){
        prevNumber = currentNumber
    }
    operation = operator
    currentNumber = '0'
}

const calculate = () => {
    let result = ''
    switch (operation) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        case "%":
            result = parseFloat(prevNumber) / 100
            break;
        default:
            return;
    }
    currentNumber = result
    operation = ''
}

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = '';
    operation = '';
    currentNumber = '0';
}

decimal.addEventListener("click", (e) => {
    inputDecimal(e.target.value)
    updateScreen(currentNumber)
})

const inputDecimal = (dot) => {
    currentNumber += dot
}
