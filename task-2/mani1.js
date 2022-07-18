function chkNum (num) {
				if (Number.isInteger(num)==false) {
								num = getNum();
								return num()
				}
}


function getNum(numVar){
				let num = parseInt(prompt("Number"));
				chkNum(num);
}

let num = getNum();

console.log(num)

let out;

if(opr == "+"){
    out = num1 + num2;
    console.log(num1+opr+num2+"="+out)
}else if(opr == "-"){
    out = num1 - num2
    console.log(num1+opr+num2+"="+out)
}else if(opr == "*"){
    out = num1 * num2
    console.log(num1+opr+num2+"="+out)
}else if (opr == "/"){
    out = num1 / num2
    console.log(num1+opr+num2+"="+out)
}else{
    console.log("Not valid Input")
}
