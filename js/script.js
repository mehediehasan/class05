var numA = 10;
var numB = 20;
var numC = -10;

var addition = numA + numB;

console.log(addition);
console.log(addition + numC);


console.log("***** Checking negative / positive number *******");
if (numC < 0 ) {
    console.log("numC is a negative number");
} else {
    console.log("numC is a positive number");
}


if (numB < 0 ) {
    console.log("numB is a negative number");
} else {
    console.log("numB is a positive number");
}


console.log("***** Checking large / small number *******");

if (numA > numB) {
    console.log("numA is grater than numB");
} else {
    console.log("numB is grater than numA");
}

var numA = 50;
var numB = 20;

console.log("***** Again *******");

if (numA > numB) {
    console.log("numA is grater than numB");
} else {
    console.log("numB is grater than numA");
}