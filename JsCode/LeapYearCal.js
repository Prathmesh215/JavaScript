var year = 2100;

/* if(year%4 === 0) {
    if(year%100 === 0) {
        if(year%400 === 0){
            console.log("Leap year.");
        } else {
            console.log("Not leap year.");
        }
    } else {
        console.log("Leap year.");
    }
} else {
    console.log("Not leap year.");
} */

if( (year%4 === 0 && year%100 !== 0) || year%400 === 0 ) {
    console.log("Leap year.");
} else {
    console.log("Not leap year.");
}