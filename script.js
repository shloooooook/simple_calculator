let firstNumber = "";
let operator = "";
let secondNumber = "";

function appendNumber(number) {
    document.getElementById("result").value += number;
}

function selectOperator(op) {
    if (operator === "") {
        firstNumber = document.getElementById("result").value;
        operator = op;
        document.getElementById("result").value += ` ${op} `;
    } else {
        let currentValue = document.getElementById("result").value;
        document.getElementById("result").value = currentValue.slice(0, -2) + ` ${op} `;
        operator = op;
    }
}
function clearResult() {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    document.getElementById("result").value = "";
}

function calculate() {
    const currentValue = document.getElementById("result").value;
    if (operator === "") return;

    const parts = currentValue.split(` ${operator} `);
    if (parts.length !== 2) return;

    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[1]);

    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed!");
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById("result").value = result;
    firstNumber = result;  
    operator = "";
    secondNumber = "";
}