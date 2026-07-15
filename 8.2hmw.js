// Task1
let person = {
    name: "Alina",
    age: 17,
    city: "Almaty",
};

console.log(person);

// Task2
console.log(person.name, person.age);
person.city = "Astana"; 
console.log(person);

// Task3
function greet() {
    console.log("Привет, меня зовут " + person.name + ", мне " + person.age + " лет!");
}
greet();

// Task4
let obj1 = { a: 10, b: 20 };
let obj2 = { a: 10, b: 20 };
console.log(obj1 == obj2); // они всегда уникальные
console.log(obj1 === obj2);

// Task5
let book = {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    details: {
    year: 1987,
    pages: 297
}
};


copyBook = Object.assign({}, book);
book.details.year = 1990;
console.log(book);
console.log(copyBook);  //меняется тоже так как это поверхностное копирование

// Task6
let calculator = {a: 8, b: 9,
    sum() {return this.a + this.b;},
    multiply() {return this.a * this.b;}
};


console.log(calculator.sum());
console.log(calculator.multiply());

// Task7
const car = {brand: 'tayota', model: 'camry'};
car.model = 'corolla';
console.log(car); // это происходит из-за того что с const нельзя изменить в целом переменную, но ее objects можно
//const car = {a: 10, b: 20};
//console.log(car); уже ошибка