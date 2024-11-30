var num = [];
var output = 1;

function fizzBuzz() {
    if(output % 3 === 0 && output % 5 === 0) {
        num.push("FizzBuzz");
    } else if(output % 3 === 0){
        num.push("Fizz");
    } else if(output % 5 === 0) {
        num.push("Buzz");
    } else {
        num.push(output);
    } 
    
    console.log(num);
    output++;
}