"use strict";
let user = {};
user.name = 'Іван';
user.surname = 'Сміт';
console.table(user);
user.name = 'Петро';
console.table(user);
delete user.name;
console.table(user);


//--------------------Сума властивостей об’єкта-----------------
console.log('\n\n--------------Сума властивостей об’єкта----------------');


let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130
}
function howAllSalaries(object) {
   let allSalaries = 0;
   for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
         allSalaries += object[key];
         console.log(object[key]);
      }
   }
   if (allSalaries) {
      return allSalaries
   }
   return allSalaries = 0
}
let sum = howAllSalaries(salaries);
console.log(sum);


//--------------------Створіть калькулятор-----------------
console.log('\n\n--------------Створіть калькулятор----------------');

let calculator = {
   read(a, b) {
      this.a = +a;
      this.b = +b;
   },
   sum() {
      return this.a + this.b
   },
   mul() {
      return this.a * this.b
   }
};

calculator.read(5, 2);
console.log(calculator.sum());
console.log(calculator.mul());


//!-----Опціональний ланцюжок '?.'----
//!---arr.at(i)---

let newObject = new Object()

//--------------------Операції з масивами.-----------------
console.log('\n\n--------------Операції з масивами.----------------');

let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
console.log(styles);
styles[Math.floor(styles.length / 2)] = 'Classics';
console.log(styles.shift());
console.log(styles);
styles.unshift('Rap', 'Reggae');
console.log(styles);


//----Переведіть текст виду border-left-width в borderLeftWidth--------
console.log('\n\n-Переведіть текст виду border-left-width в borderLeftWidth----------------');

function camelize(arrStr) {
   arrStr = arrStr.split('-')
      .map((item, index) => {
         if (index === 0) {
            return item
         }
         return item.split('')
            .map((elem, ind) => {
               if (ind === 0) {
                  return elem.toUpperCase()
               }
               return elem;
            })
            .join('')
      })
      .join('');
   console.log(arrStr);
}
camelize('border-left-width');
camelize("list-style-image");
camelize("-webkit-transition");


//--------------Фільтрація за діапазоном--------
console.log('\n\n--------------Фільтрація за діапазоном----------------');
let arrCount = [1, 2, 3, 4, 5, 6, 7]
function filterRange(arr, a, b) {
   //return 
   arr = arr.filter(item => (item >= a && item <= b))
}
//console.log(filterRange([1, 2, 3, 4, 5, 6, 7], 2, 6)); 
filterRange(arrCount, 2, 6)
console.log(arrCount);


//--------------Сортувати за спаданням--------
console.log('\n\n--------------Сортувати за спаданням----------------');

let sortedArr = [5, 2, 1, -10, 8];
function sortArr(arr) {
   arr.sort((a, b) => a - b).reverse()
}
sortArr(sortedArr);
console.log(sortedArr);


//--------------Створити розширюваний калькулятор--------
console.log('\n\n-------Створити розширюваний калькулятор-----------');

function Calculator() {
   this.operators = {
      '+': (a, b) => +a + +b,
      '-': (a, b) => +a - +b
   }
   this.calculate = function (str) {
      let arr = str.split(' ')
      for (const operator in this.operators) {
         if (Object.hasOwnProperty.call(this.operators, operator)) {
            if (operator == arr[1]) {
               const func = this.operators[operator];
               return func(arr[0], arr[2])
            }
         }
      }
      return 'Ви ввели неправильний вираз'
   }
   this.addMethod = function (operator, func) {
      this.operators[operator] = func
   }
}
let calc = new Calculator;

console.log(calc.calculate("3 - 7"));
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
let result2 = powerCalc.calculate("2 * 3");
console.log(result);
console.log(result2);


//--------------Трансформувати в масив імен--------
console.log('\n\n-------Трансформувати в масив імен-----------');

let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let users = [ivan, petro, mariya];

function getName(arr) {
   return arr.map(item => item.name)
}
let names = getName(users);
console.log(names);
console.log(users);


//--------------Відсортувати користувачів за віком--------
console.log('\n\n-------Відсортувати користувачів за віком---------');

function sortByAge(arr) {
   arr.sort((a, b) => (a.age - b.age))
}
sortByAge(users);
console.log(users);


//--------------Вирахувати середній вік--------
console.log('\n\n-------Вирахувати середній вік---------');

function getAverageAge(arr) {
   return Math.round(arr.reduce((sumAge, item) => sumAge + item.age, 0) / arr.length)
}
console.log(getAverageAge(users));