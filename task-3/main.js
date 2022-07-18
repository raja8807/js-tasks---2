let year=parseInt(prompt("Enter the year"));

if (year%4 === 0){
    out = year+" is a leap Year"
}else{
    out = year+" is not a leap Year"
}

console.log(out)