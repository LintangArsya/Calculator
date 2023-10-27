let valeu1 = parseInt(prompt("Angka Ke-1"));
let valeu2 = parseInt(prompt("Angka Ke-2"));
let operator = prompt("Operator (must be +, -, *, /, %, ^");
let result;

if (operator == "+") {
    result = valeu1 + valeu2;
} else if (operator == "-") {
    result = valeu1 - valeu2;
} else if (operator == "*") {
    result = valeu1 * valeu2;
} else if (operator == "/") {
    result = valeu1 / valeu2;
} else if (operator == "%") {
    result = valeu1 % valeu2;
} else if (operator == "^") {
    result = valeu1 ^ valeu2;
}else{
    result = "Invalid operator or number!";
}

document.write(result)