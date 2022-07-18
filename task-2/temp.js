function getNum(varName) {
				let num = parseInt(prompt("Enter "+varName))
				while (Number.isInteger(num)==false){
								num = parseInt(prompt("Please Enter a Valid "+varName))
				}
				return num;
}

function getOpr() {
				let opr = prompt("Select a Operator (+, -, *, /)")
				while(opr != "+" && opr != "-" && opr != "*" && opr != "/"){
								opr = prompt("Please Select a valid Operator from +, -, *, /")
				}
				return opr;
}

let num1 = getNum("The 1st Number");
let opr = getOpr()
let num2 = getNum("The 2nd Number")

console.log(num1)
console.log(opr)
console.log(num2)
