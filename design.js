// Function to perform addition
function add() {
    var a = parseFloat(document.getElementById("n1").value);
    var b = parseFloat(document.getElementById("n2").value);
    if (!isNaN(a) && !isNaN(b)) {
        document.getElementById("res").textContent = "Result: " + (a + b);
    } else {
        document.getElementById("res").textContent = "Please enter valid numbers";
    }
}

// Function to perform subtraction
function sub() {
    var a = parseFloat(document.getElementById("n1").value);
    var b = parseFloat(document.getElementById("n2").value);
    if (!isNaN(a) && !isNaN(b)) {
        document.getElementById("res").textContent = "Result: " + (a - b);
    } else {
        document.getElementById("res").textContent = "Please enter valid numbers";
    }
}

// Function to perform multiplication
function mul() {
    var a = parseFloat(document.getElementById("n1").value);
    var b = parseFloat(document.getElementById("n2").value);
    if (!isNaN(a) && !isNaN(b)) {
        document.getElementById("res").textContent = "Result: " + (a * b);
    } else {
        document.getElementById("res").textContent = "Please enter valid numbers";
    }
}

// Function to perform division
function div() {
    var a = parseFloat(document.getElementById("n1").value);
    var b = parseFloat(document.getElementById("n2").value);
    if (!isNaN(a) && !isNaN(b) && b !== 0) {
        document.getElementById("res").textContent = "Result: " + (a / b);
    } else if (b === 0) {
        document.getElementById("res").textContent = "Cannot divide by zero";
    } else {
        document.getElementById("res").textContent = "Please enter valid numbers";
    }
}
