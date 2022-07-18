function getNum(varName) {
				let num = parseInt(prompt("Enter "+varName))
				while (Number.isInteger(num)==false){
								num = parseInt(prompt("Please Enter a Valid "+varName))
				}
				return num;
}

let year=getNum("Year")

if (year%100 === 0) {
				if (year%400 === 0) {
								out = year+" is a leap Year"
				}else{
								out = year+" is not a leap Year"
				}
}else if(year%4 === 0){
				out = year+" is a leap Year"
}else{
				out = year+" is not a leap Year"
}

console.log(out)


