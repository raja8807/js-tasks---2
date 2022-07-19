function getNum(varName) {
	let num = parseInt(prompt("Enter " + varName))
	while (Number.isInteger(num) == false) {
		num = parseInt(prompt("Please Enter a Valid " + varName))
	}
	return num;
}

let range = getNum("Range");
let sum = 0;

for (let i = 1; i <= range; i++) {
	if (i % 3 == 0 || i % 5 == 0) {
		sum = sum + i;
	}
}

console.log("The Sum is :", sum);
