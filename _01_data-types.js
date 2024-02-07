//!--------------Примітивні типи даних------------------
//---------------String-----------------
const str = "12";
console.log(`str = "12"  is ${typeof str}\n\n`);

//Літерал шаблону 
const boolean = false;
console.log(`str = ${str}  is ${typeof `${str}`}\n\n`);

console.log("String" + typeof String([12, 13, 14]) + "\n\n");



//---------------Number ±(2^53 - 1)-----------------
const num = 12;
console.log(`const num = 12 is ${typeof num} type`);
const numInf = 1 / 0;
console.log(`1/0=${numInf} is ${typeof numInf} type`);
const numNaN = 'ups' * 2;
console.log(`'ups'*2=${numNaN} is ${typeof numNaN} type\n\n`);


//---------------BigInt -----------------
const bigInt = 1234567890123456781234567890n;
console.log(`bigInt = 1234567890123456781234567890n is ${typeof bigInt} type\n\n`);

//---------------Boolean -----------------
const bool = 4 < 1;
console.log(`bool = 4<1 = ${bool}  is ${typeof bool} type\n\n`);

//---------------undefined -----------------
let how;
console.log(`how is ${typeof how} type`);
console.log(`und is ${typeof und} type\n`);

//---------------null -----------------
let who = null;
console.log(`who is ${typeof who} type\n\n`);

//---------------Symbol -----------------

let sym = Symbol("It is symbol")
console.log(`sym is ${typeof sym} type\n\n`);


let obj = {

}