let expression = "";
let result = 0;
let operands = [];
let operators = [];
let display = document.querySelector(".display");
let clear = document.querySelector(".clear");
let Delete = document.querySelector(".delete");
let keys = document.querySelectorAll(".key");


clear.addEventListener("click", () => {display.textContent = ""; expression = "";})
Delete.addEventListener("click", () => {expression = expression.slice(0, -1); display.textContent = expression})

function calculate(operands, operators = null) {
    if (operands.includes("*") || operands.includes("/")) {
        operators = operands.match(/[*/]/g);
        operands = operands.split(/[*/]/);
    }
    for (i = 0; i < operators.length; i++) {
        if (!(operands[i] && operands[i+1])) return NaN;
        switch (operators[i]) {
        case "+":
            result = +operands[i] + +operands[i+1];
            operands[i+1] = result;
            break;
        case "-":
            result = +operands[i] - +operands[i+1];
            operands[i+1] = result;
            break;
        case "*":
            result = +operands[i] * +operands[i+1];
            operands[i+1] = result;
            break;
        case "/":
            result = +operands[i] / +operands[i+1];
            operands[i+1] = result;
        }
    }
    return result;
}

function operate() {
    operands = expression.split(/[+-]/);
    operands.join() == expression? operands = operands.join():
    operands = operands.map(operand => (operand.includes("*") || operand.includes("/"))? calculate(operand): operand);
    operators = expression.match(/[+-]/g);
    display.textContent = calculate(operands, operators);
}

keys.forEach(key => key.addEventListener("click", e => {
    !key.getAttribute("data-num")? operate():
    display.textContent = (expression = expression.concat(key.getAttribute("data-num")))
}));