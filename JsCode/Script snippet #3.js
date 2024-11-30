getMilk(11, 3);

function getMilk(money , costPerBottles) {
    console.log("LeaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
 
    console.log("buy " + calcBottles(money, costPerBottles) + " bottles of milk")
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calChange(money, costPerBottles);
    
} 

function calcBottles(startingMoney, costPerBottles) {
    
    var numberOfBottles = Math.floor(startingMoney / costPerBottles);

    return numberOfBottles;
}

function calChange(startingMoney, costPerBottles) {
    var change = startingMoney % costPerBottles;
    return change;
}
