/* 7.1 hmw */
console.log("Hello, World!");
alert("Hello, World!"); /* Выходит всплывающее окно */

/* 7.2 hmw Task 1 */
let a1 = 10;
const b1 = 20;
a1 = 15;
/* b1 = 25; Ошибка, так как b1 объявлена как const */
console.log(a1); 
console.log(b1); 

/*Task 2 
    var может создавать проблемы в циклах, легко меняет значение , имеет область видимости функции
*/

/*Task 3 */
let Num = 30;
let Str = 'Alina';
let Bool = true;
let Undefined = undefined;
let Null = null;
console.log(typeof Num);
console.log(typeof Str);
console.log(typeof Bool);
console.log(typeof Undefined);
console.log(typeof Null); 

/*Task 4 */
let NumberToString = String(123);
let StringToNumber = Number('456');
console.log(Number(Undefined)); // NaN это некорректное числовое значение 
console.log(Number(Null)); // 0 пустое значение
console.log(String(Undefined)); // undefined просто строка
console.log(String(Null)); // null тоже просто строка

/*Task 5 динамическая типизация означает, что тип данных переменной может изменяться во время выполнения программы.
Мысалы в Java или C# не может*/
let value = 100;
console.log(value, typeof value); // 100 number

value = "Alina";
console.log(value, typeof value); // Alina string

/*Task 6 */
let Name = prompt('Enter your name:');
let Age = prompt('Enter your age:');
console.log('Your name: ', Name);
console.log('Your age: ', Age);



/* 7.3 hmw Task 1 */
let a = 10;
let b = 5;
let c = 2;
console.log(a + b + c); 
console.log(a + c - b); 
console.log(a * b / c);
console.log(a % b);

/* Task 2 */
let x = 7;
console.log(x++ + ++x);
console.log(x-- - --x);

/* Task 3 */
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log('The result is: ', String(sum));

/* Task 4 */
console.log(a > b && a > 0 && b > 0);
console.log(c < 10 || c === 2);
console.log(a / c !== 5);

/* Task 5 */
let num5 = 10;
let str5 = '10';
console.log(num5 == str5); // true, так как оператор == выполняет приведение типов
console.log(num5 === str5); // false, так как типы данных разные

/* Task6 */
let y = 
console.log(x % 2 === 0 && x % 3 === 1 && x % 6 !== 0);
console.log(x > 10 || x < 5);

