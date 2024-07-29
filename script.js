var displayNumber = $(".display-input");
var currentNumber = '';
var previousNumber = '';
var operator = '';

$(".digit").on("click", function () {
    var value = $(this).val()
    currentNumber += value
    displayNumber.val(currentNumber)
})
