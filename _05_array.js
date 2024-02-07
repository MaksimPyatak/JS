const simpleArr = [1, 2, 3, 4, 5, 4, 4, 4,];

const secondArr = new Array(1, 2, 3, 'df', false);
console.log(secondArr);

const thirdArr = new Array(5);  //!
console.log(thirdArr);

for (let i = 0; i < secondArr.length; i++) {
   const element = secondArr[i];
   console.log(element);
}





const workers = ['Andrew', 'Dima', 'Oleksandr', 'Vlada', 'Sviatoslav', 'Artem', 'Denis', 'Max', 'Vlad'];
const winers = workers.filter(worker => {
   if (worker.toLowerCase().includes('v')) {
      return worker
   }
}).reduce((accum, worker) => {
   if (worker.toLowerCase().includes('d')) {
      accum.push(worker)
   }
   return accum
}, []);

let i = 0;
const win = [];
do {

   if (winers[i].length == 4) {
      win.push(winers[i])
   }
   i++
} while (winers.length != i);
let winer = win[0].split('').reverse();
let av = '';
for (let index = 0; index < winer.length; index++) {
   const element = winer[index];
   if ((index + 1) % 2 == 0) {
      av += element
   }

}
console.log(av);
//console.log(winers);