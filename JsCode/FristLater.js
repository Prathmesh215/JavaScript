// make frist char to toUpperCase

var name = prompt("Enter your name");
var fristChar = name.slice(0,1).toUpperCase();
var remainingString = name.slice(1,name.length).toLowerCase();

alert(fristChar + remainingString);