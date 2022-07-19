function getNum(varName) {
	let num = parseInt(prompt("Enter the" + varName))
	while (Number.isInteger(num) == false) {
		num = parseInt(prompt("Please Enter a Valid" + varName))
	}
	return num;
}

function getOpr() {
	let opr = prompt("Select The Operator (+, -, *, /)")
	while (opr != "+" && opr != "-" && opr != "*" && opr != "/") {
		opr = prompt("Please Select a valid Operator from +, -, *, /")
	}
	return opr;
}

let num1 = getNum(" 1st Number");
let opr = getOpr();
let num2 = getNum(" 2nd Number")

let out;

if (opr == "+") {
	out = num1 + num2;
} else if (opr == "-") {
	out = num1 - num2
} else if (opr == "*") {
	out = num1 * num2
} else if (opr == "/") {
	out = num1 / num2
}

console.log(num1 + opr + num2 + "=" + out)




