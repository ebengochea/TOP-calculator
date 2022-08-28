const buttons = document.querySelectorAll(".button");
const displayResult = document.querySelector(".result");
const displayCurrent = document.querySelector(".current");

let num1 = "";
let num2 = "";
let num3 = "";
let operation = "";
let operation2 = "";
let result = "";

function add(x, y) {
  	result = x + y;
	return Math.round((result + Number.EPSILON) * 1000000000000) / 1000000000000;
}

function substract(x, y) {
  	result = x - y;
	return Math.round((result + Number.EPSILON) * 1000000000000) / 1000000000000;
}

function multiply(x, y) {
  	result = x * y;
	return Math.round((result + Number.EPSILON) * 1000000000000) / 1000000000000;
}

function divide(x, y) {
	if (x != 0 && y != 0) {
		result = x / y;
		return Math.round((result + Number.EPSILON) * 1000000000000) / 1000000000000;
	} else {
		return "ERROR"
	}
}

function percentage(x, y) {
	result = y * (x / 100);
	return Math.round((result + Number.EPSILON) * 1000000000000) / 1000000000000;
}


function operate(x, y, operation) {
	if (operation === "+") {
		result = add(x, y);
	} else if (operation === "-") {
		result = substract(x, y);
	} else if (operation === "X") {
		result = multiply(x, y);
	} else if (operation === "/") {
		result = divide(x, y);
	} else if (operation === "%") {
		result = percentage(x, y);
	}
	displayResult.textContent = result;
}

buttons.forEach(button => {
	button.addEventListener("click", function() {
		if (button.value === "+" || 
			button.value === "-" || 
			button.value === "X" || 
			button.value === "/" ||
			button.value === "%") {	
				if (operation === "" && operation2 ==="") {
					operation = button.value;
					displayCurrent.textContent = operation;
					console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
				} else if (operation !== "" && num3 == "" && result == "") {
					operate(parseFloat(num1), parseFloat(num2), operation);
					operation2 = button.value;
					displayCurrent.textContent = operation2;
					console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
				} else if (operation2 !== "" && num3 !== "") {
					operate(parseFloat(result), parseFloat(num3), operation2);
					operation = button.value;
					displayCurrent.textContent = operation2;
					console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
				} else if (operation !== "" && num2 === "" && result !== "") {
					operate(parseFloat(result), parseFloat(num1), operation);
					operation2 = button.value;
					reset()
					displayCurrent.textContent = operation2;
					console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
				} else if (result != "" && (operation2 === "" && num3 === "")) {
					operation2 = button.value;
					displayCurrent.textContent = operation2;
					console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
				}
		} else if (button.value === "=") {
			if (result === "" && (operation === "" || num2 === "")) {
				displayResult.textContent = 0;
				console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
			} else if (result === "") {
				operate(parseFloat(num1), parseFloat(num2), operation);
				displayResult.textContent = result;
				reset();
				console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
			} else if (result !== "" && (operation2 !== "" && num3 !== "")) {
				operate(parseFloat(result), parseFloat(num3), operation2);
				reset();
				displayResult.textContent = result;
				console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
			} else if (result !== "" && operation !== "" && num2 === "") {
				operate(parseFloat(result), parseFloat(num1), operation);
				reset();
				displayResult.textContent = result;
				console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
			}  
		} else if (button.value === "C") {
			clearAll();
			console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
		} else {
			if ((result === "" && operation === "") || 
				(result !== "" && operation !== "" && num2 === "" && operation2 !== "") || 
				(result !== "" && operation !== "" && num2 === "" && operation2 == "" && num3 == "")) {
					num1 += button.value;
					displayCurrent.textContent = num1;
					reset2();
					console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
			} else if (result === "" && operation !== "") { 
				num2 += button.value;
				displayCurrent.textContent = num2;
				console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
			} else if (operation2 !== "" ) {
				num3 += button.value;
				displayCurrent.textContent = num3;
				reset();
				console.log(`You pressed ${button.value}, Number 1 is ${num1}, Operation is ${operation}, Number2 is ${num2}, Operation 2 is ${operation2}, Number 3 is ${num3}, and result is ${result}.`);
			}
		}
	})  
});


function reset() {
	num1 = "";
	num2 = "";
	operation = "";
}

function reset2() {
	num3 = "";
	operation2 = "";
}

function clearAll() {
	num1 = "";
	num2 = "";
	num3 = "";
	operation = "";
	operation2 = "";
	result = "";
	displayCurrent.textContent = 0;
	displayResult.textContent = 0;
}


/*
Extra Credit
Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)

Add a “backspace” button, so the user can undo if they click the wrong number.

Add keyboard support!
*/