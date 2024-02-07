//Спочатку контекст виконання

function inBetween(a, b) {
   return (x) => {
      return x >= a && x <= b;
   };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6


let worker = {
   someMethod() {
      return 1;
   },

   slow(x) {
      // страшно тяжке для процесора завдання тут
      console.log("Called with " + x);
      return x * this.someMethod(); // (*)
   }
};

function someMethod() {
   return 1;
};
function slow(x) {
   console.log("Called with " + x);
   return x * someMethod(); // (*)
};


// той же код, як і раніше
function cachingDecorator(func, obj) {
   let cache = new Map();
   return function (x) {
      //console.log('cach:');
      //console.log(this);
      if (cache.has(x)) {
         return cache.get(x);
      }
      let result = func.call(obj, x); // (**)
      cache.set(x, result);
      return result;
   };
}

console.log(worker.slow(1)); // оригінальний метод працює

worker.slow = cachingDecorator(worker.slow, worker); // тепер зробимо йому кешування

console.log(worker.slow(2)); // Ой! Помилка: Cannot read property 'someMethod' of undefined (*)

const slow2 = cachingDecorator(slow); // тепер зробимо йому кешування

console.log(slow2(3));

