let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let expression = ""; // Store the current expression
let result = ""; // Store the result of the calculation

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            try {
                result = eval(expression); // Calculate the result of the expression
                input.value = result; // Display the result
                expression = result.toString(); // Update expression with the result
            } catch (err) {
                input.value = "Error"; // In case of invalid expression
            }
        } else if (e.target.innerHTML == "AC") {
            expression = ""; // Clear the expression
            result = ""; // Clear the result
            input.value = ""; // Clear the display
        } else if (e.target.innerHTML == "DEL") {
            expression = expression.substring(0, expression.length - 1); // Remove the last character from the expression
            input.value = expression; // Update the display with the new expression
        } else {
            expression += e.target.innerHTML; // Add the clicked button to the expression
            input.value = expression; // Update the display
        }
    })
})
