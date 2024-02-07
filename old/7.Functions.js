// Функції можуть бути оголошені за допомогою ключового слова function(Function Declaration)
// Оголошені Declaration функції можна викликати до того, як вони визначені у коді, через "hoisting".
// Викликається до визначення (під час "hoisting").

function sayHello() {
  console.log("Hello!");
}

sayHello();

// Функції можуть приймати параметри, які вказуються у круглих дужках. Аргументи передаються при виклику функції.

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John");

// Функціям можна задавати значення параметрів по замовчуванню.

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();

// Функцію можна присвоїти змінній.(Function Expression)
// Функції вирази не можна викликати до їх визначення через "hoisting".
// Може бути викликана тільки після присвоєння.

const add = function (a, b) {
  return a + b;
};

const result = add(3, 5);

// Синтаксис стрілкових функцій дозволяє коротше визначення функцій.(Arrow Function)
// Стрілкові функції мають кілька відмінностей, таких як відсутність власного this (вони беруть його з контексту) та коротший синтаксис для однострокових функцій.
// Не може бути викликана до визначення (не має "hoisting").
// Не має свого власного this, вона бере його з контексту, в якому була створена.

const multiply = (a, b) => a * b;

// Функції, які приймають інші функції як аргументи або повертають функції. (Higher-Order Function)

const operate = (a, b, operation) => operation(a, b);

const add2 = (a, b) => a + b;
const multiply2 = (a, b) => a * b;

operate(3, 5, add2);
operate(3, 5, multiply2);

// Функція-конструктор для створення об'єктів

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.displayInfo = function () {
    console.log(`Person: ${this.name} ${this.age}`);
  };
}

const person1 = new Person("John", 25);
person1.displayInfo();

// Для оптимізації та ефективного використання пам'яті функції-конструктори використовують прототипи

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greet = function () {
  console.log(`User: ${this.name} ${this.age}`);
};

const user1 = new User("John", 25);

user1.greet();
