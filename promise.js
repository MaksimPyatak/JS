//Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через ms мілісекунд, так щоб ми могли додати до нього .then

function delay(ms) {
   return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)
   })
}

delay(3000).then(() => console.log('виконалось через 3 секунди'));
delay(5000).then(() => console.log('oops'))

let promise = new Promise(function (resolve, reject) {
   //resolve(1);

   setTimeout(() => resolve("Щось повернув Проміс"), 1000);
});

promise.then((arg) => console.log(arg));

//Робота асинхронної функції в середині Promise
//Як зловити помилку в  промісі в асинхронній функції
new Promise(function (resolve, reject) {
   setTimeout(() => {
      try {
         console.log('What');
         throw new Error('Whoops!');
         resolve('Whoops!');
      } catch (error) {
         reject(error);
      }
   }, 1000);
}).then((value) => console.log(value), (error) => console.log('"Помилка" ' + error));
