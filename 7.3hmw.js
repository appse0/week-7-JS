// Task1 
let Number1 = prompt("Enter a number");
if (Number1 > 10) {
    console.log("The number is greater than 10");
} else {
    console.log("The number is less than or equal to 10");
}

// Task2
let UserConfirmed = confirm("Do you want to delete this file?");
if (UserConfirmed) {
    console.log("File deleted.");
} else {
    console.log("Deletion canceled.");
}

// Task3
let UserInput = prompt("Enter your age:");
if (UserInput < 18) {
    console.log("You are a teenager.");
}
else if (UserInput >= 18 && UserInput <= 30){
    console.log("You are a young adult.");
}
else {
    console.log("You are an adult.");
}

// Task4
let Number2 = prompt("Enter another number:");
let isNumber2Even = (Number2 % 2 === 0) ? "The number is even." : "The number is odd.";
console.log(isNumber2Even);

// Task5
let WeekDay = parseInt(prompt("Enter a day of the week:"));
switch (WeekDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day entered.");
}

// Task6
let InputNumber1 = prompt("Enter the first number:");
let InputNumber2 = prompt("Enter the second number:");
if (InputNumber1 === InputNumber2){
    console.log("Numbers are equal");
}
else {
    let ComparedResult = (InputNumber1 > InputNumber2) ? "First number is greater" : "Second number is greater"
    console.log(ComparedResult);

}

// Additional task
let MonthNumber = parseInt(prompt("Enter month number:"));
switch (MonthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid day entered.");
}