const screen = document.querySelector(".calculator-screen")
const numbers = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equal")
const clrBtn = document.querySelector('.all-clear')
const decimal = document.querySelector(".decimal")

let prevNumber = ''
let calculationOperation = ''
let currentNumber = '0'

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)

    });
});

operator.forEach((operator) => {
    operator.addEventListener("click", () =>{
        inputOperator(event.target.value)
    })
});
const inputOperator = (operator) => {
    if(calculationOperation === ''){
        prevNumber = currentNumber
    }
    calculationOperation = operator
    currentNumber = '0'
}

const clearAll = () => {
    prevNumber = ''
    calculationOperation = ''
    currentNumber = '0'
}

const updateScreen = (number) => {
    screen.value = number
}

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number
    } else {
        currentNumber += number
    }
}

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

clrBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperation) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        default:
            break;
    }
    currentNumber = result
    calculationOperation = ''
}

