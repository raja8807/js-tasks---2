let range = parseInt(prompt("Enter The Range"));
let sum = 0;

for(let i=1; i<=range; i++){
    if(i%3==0 || i%5==0){
        sum = sum + i;
    }
}

console.log("The Sum is :",sum);