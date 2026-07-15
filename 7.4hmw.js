// Task1
function greet() {
    console.log("Hello, world!");
}
greet();

// Task2
function sayHello(name) {
    console.log("Hello, " + name + "!");
}
sayHello("Aruzhan(●'◡'●)");
sayHello("Alina");

// Task3
function sum(a, b){
    return a + b;
}
console.log("Sum of num1 and num2: ", sum(2, 5));

// Task4
const isEven = function(number){
    if (number % 2 === 0){return true;}
    else {return false;}
}
let number = 90;

if (isEven(number)) {console.log("The number is even");}
else {console.log("The number is odd");}

// Task5
function max(a, b) {
    if (a > b){console.log(a);}
    else if (a == b){console.log("The numbers are equal");}
    else {console.log(b);}
}

max(99, 7);
max(8, 8);

// Task6
function getInitials(name, surname) {
    console.log(name[0] + "." + surname[0]);
}
getInitials("Alina", "Almatay")
getInitials("Jennifer", "Lopez")

// Task7
function square(number) {
    return number * number;
}
function cube(number){
    return square(number) * number;
}

console.log("Squared number: ", square(3))
console.log("Cubed number: ", cube(2))

// Task8
const sum2 = (a, b) => a + b;
console.log("Sum of num1 and num2: ", sum2(6, 7));

// Additional task
function getFactorial(number) {
    if (number === 0 || number === 1){return 1; }
    return number*getFactorial(number - 1);
}

console.log(getFactorial(3));


