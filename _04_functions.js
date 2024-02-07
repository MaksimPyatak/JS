//--------------------Function Declaration-----------------
console.log('\n\n--------------Function Declaration----------------');
let name = 'Bob';
function doDialogue(name, text = createGreeting()) {
   name = name + ",";
   return name + text
}

function createGreeting() {
   return 'hello!'
}
function createFarwell() {
   return 'Goodbye'
}
console.log(doDialogue('Sem'));
console.log(doDialogue('Ben', createFarwell()));

//--------------------Function Expression-----------------
console.log('\n\n--------------Function Expression----------------');
let greeting = function doGreeting(name, phrase) {
   name = name + ",";
   return name + phrase
};
console.log(`${greeting(name, 'hi!')}\n\n`);

let age = 19;

//! welcome();  !!!Помилка!!!
let welcome = (age < 18) ?
   function () { console.log("Пртвіт!"); } :
   () => console.log("Доброго здоров'я!");        //Стрілкова функція
welcome();

//--------------------Функція конструктор-------------
//--------------------Створіть Accumulator------------
console.log('\n\n--------------Створіть Accumulator----------------');
function Accumulator(startingValue) {
   this.value = startingValue;
   this.read = function () {
      this.value += +prompt('Введіть значення:', 0)
   }
}

let accumulator = new Accumulator(1); // 

accumulator.read();
accumulator.read();
console.log(accumulator);
console.log(typeof accumulator);
alert(accumulator.value);


//--------------------fun.call-----------------
console.log('\n\n--------------fun.call----------------');
let worker = {
   someMethod() {
      return 1;
   },

   slow(x) {            //slow: function slow(x)
      console.log("Викликана з " + x);
      return x * this.someMethod(); // (*)
   }
};
console.table(worker);
console.log(worker.slow);

function cachingDecorator(func) {
   let cache = new Map();
   return function (x) {
      if (cache.has(x)) {
         return cache.get(x);
      }
      let result = func.call(this, x);
      cache.set(x, result);
      return result;
   };
}

worker.slow = cachingDecorator(worker.slow); // тепер зробимо цьому методу кешування

console.log(worker.slow(2)); // працює
console.log(worker.slow(2)); // працює, не викликаючи оригінальну функцію (кешується)
console.log(worker.slow);
console.table(worker);


//-----------------------------------------------
//Створіть декоратор spy(func), який повинен повернути обгортку, яка зберігає всі виклики функції у властивості calls.
console.log(`\n\n---Створіть декоратор spy(func), який повинен повернути обгортку, яка зберігає всі виклики функції у властивості calls.`);

function work(a, b) {
   console.log(a + b);
}

function spy(func) {

   function wrapper(...args) {
      wrapper.calls.push(args);
      console.log(wrapper);
      return func.apply(this, args);
   }

   wrapper.calls = [];

   return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
   console.log('виклик:' + args.join());
}

function calculator(a, b) {
   return (a + b) / 10
}


//----------------Часткове застосування для логіну-----------------
console.log(`\n\n----------------Часткове застосування для логіну-----------------`);

//function askPassword(ok, fail) {
//   let password = prompt("Пароль?", '');
//   if (password == "rockstar") ok();
//   else fail();
//}

//let user = {
//   name: 'Іван',

//   login(result) {
//      console.log(this.name + (result ? ' увійшов' : ' виконав невдалу спробу входу'));
//   }
//};

//let loginFalse = user.login

//askPassword(user.login.bind(user, true), loginFalse.bind(user, false)); // ?