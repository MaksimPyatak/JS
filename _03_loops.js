//-----WHILE-------
console.log('\n-----WHILE-------\n');

let a = 0
while (a < 3) {
   console.log(a++);
}
console.log('\n');
do {
   console.log(a--);
} while (a);

//-----FOR-------
console.log('\n-----FOR-------\n');
for (let i = 0; i < 3; i++) {
   console.log(`i = ${i}`);
}

//-----bteak, continue-------
console.log('\n-----bteak, continue-------\n');

console.log(`\n`);
let i = 4
for (; i > 3; i++) {
   console.log(i);
   if (i >= 10) {
      break
   }
}

console.log(`\n`);
for (let i = 0; i < 10; i++) {
   if (i % 2 == 0) continue;

   console.log(i);
}

//--Вивести прості числа--
console.log(`\n`);
//let n = 12;
//for (let i = 2; i <= n; i++) {
//   for (let j = 2; j <= i; j++) {
//      if (i % j === 0) {
//         if (i === j) {
//            console.log(i);
//         } else {
//            break
//         }
//      }
//   }
//}

console.log('continue');
let n = 10;
nextPrime:
for (let i = 3; i <= n; i++) {

   for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
   }

   console.log(i);
}

//-----for in-------
console.log('\n-----for in-------\n');
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const key in arr) {
   console.log(key, arr[key]);
}

//-----for of-------
console.log('\n-----for of-------\n');
for (const i of arr) {
   console.log(i);
}