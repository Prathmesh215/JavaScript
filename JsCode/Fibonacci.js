var n = 3;
var f = fibonacciGenerator (n);

function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    if(n === 1) {
        return [0];
    }
    
    var fibonacci = [];
    var a = 0;
    var b = 1;
    for(var i = 0; i < n; i++) {
        fibonacci.push[a];
        var c = a + b ;
        a = b;
        b = c;
    }
    
    
    return "[" + fibonacci + "]"; 
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

console.log(f);