function getNum(varName) {
				let num = parseInt(prompt("Enter the "+varName));
				while (Number.isInteger(num)==false){
								num = parseInt(prompt("Please Enter a Valid "+varName));
				}
				return num;
}


function numToWord(num) {
    let word;
    if (num == 0) {
        word = "Zero";
    } else if (num == 1) {
        word = "One";
    }else if(num==2){
        word = "Two";
    }else if(num==3){
        word = "Three";
    }else if(num==4){
        word = "Four";
    }else if(num==5){
        word = "Five";
    }else if(num==6){
        word = "Six";
    }else if(num==7){
        word = "Seven";
    }else if(num==8){
        word = "Eight";
    }else if(num==9){
        word = "Nine";
    }
    return word;
}

let input = getNum("Number");

let temp = input;
let x = "";

while(temp!=0){
    let lastDigit = temp%10;
    x = x+" "+numToWord(lastDigit);
    temp = (temp - lastDigit)/10;
}

console.log(x);
