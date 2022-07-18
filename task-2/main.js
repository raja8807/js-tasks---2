let num1 = parseInt(prompt("Enter The 1st Number"));
let num2 = parseInt(prompt("Enter The 2nd Number"));
let opr = prompt("Enter The Operator");
let out;

if(opr == "+"){
    out = num1 + num2;
    console.log(num1+opr+num2+"+"+out)
}else if(opr == "-"){
    out = num1 - num2
    console.log(num1+opr+num2+"+"+out)
}else if(opr == "*"){
    out = num1 * num2
    console.log(num1+opr+num2+"+"+out)
}else if (opr == "/"){
    out = num1 / num2
    console.log(num1+opr+num2+"+"+out)
}else{
    console.log("Not valid Input")
}





