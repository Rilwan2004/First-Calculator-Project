var displayNumber = $(".display-input");
var currentNumber = '';
var previousNumber = '';
var operator = '';
var displayContent = ''

$(".digit").on("click", function () {
    var value = $(this).val()
    currentNumber += value
    displayContent += value
    displayNumber.val(displayContent)
})

$(".operator").on("click", function () {
    var value = $(this).val()
    if (value === "=") {
        previousNumber = calculate(previousNumber, operator, currentNumber)
        displayNumber.val(previousNumber)
        currentNumber = '';
        operator = '';
        displayContent= previousNumber
    } else {
        if (currentNumber !== '') {
            if (previousNumber === '') {
                previousNumber = currentNumber;
            } else {
                previousNumber = calculate(previousNumber, operator, currentNumber);
            }
            operator = value;
            currentNumber = '';
            displayContent = previousNumber + operator
            displayNumber.val(displayContent)
        }
    }
})
function calculate(x, operator, y) {
    x = parseFloat(x);
    y = parseFloat(y);

    switch (operator) {
        case '+':
            return (x + y).toString();
        case '-':
            return (x - y).toString();
        case '*':
            return (x * y).toString();
        case '/':
            return (x / y).toString();
        default:
            return y;
    }
}
