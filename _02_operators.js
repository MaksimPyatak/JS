//-----OR-------
//класичне використання
console.log('\n-----OR-------');
console.log(`false || true = ${false || true}`);
console.log(`false || false = ${false || false}`);

//повертає перше правдиве значення або останнє, 
//якщо правдивого значення не знайдено.
let name = "";
let lastName = "";
let nickName = "";
console.log(`Who are you? ${name || lastName || nickName || 'Anonym'}`);
let anonym = false
console.log(`Who are you? ${name || lastName || nickName || anonym}`);
console.log(`Who are you? ${name || lastName || anonym || nickName}`);

false || console.log('Bingo');
true || console.log('Oops');

//-----Оператор об’єднання з null ??-------
console.log('\n\n-----??-------');
let user = 'Max';
console.log(user ?? 'Анонім');
let nickName2;
console.log(nickName2 ?? 'Анонім');

//-----&&-------
console.log('\n\n-----&&-------');
console.log(1 && 2);
let b = 1 && 2
console.log(b);

//повертає перше хибне значення, або останнє значення, 
//якщо жодного хибного не було знайдено.
name = "Max";
lastName = "Piatak";
nickName = "maksim_piatak";
anonym = false
console.log(`Who are you? ${name && lastName && nickName && 'Anonym'}`);
console.log(`Who are you? ${name && lastName && nickName && anonym}`);
console.log(`Who are you? ${name && lastName && anonym && nickName}`);

//-----! (НЕ)-------
console.log('\n\n-----! (НЕ)-------');
console.log(!0);
console.log(!!0);



//-----if else-------
console.log('\n\n-----if else-------');

let a = '2' + 2;
if (a === 4) {
   console.log('Правильно!');
} else if (a > 4) {
   console.log(`Ви не вмієте рахувати?`);
} else if (a < 4) {
   console.log(`Ви не вмієте рахувати?`);
} else {
   console.log(`OOPS!!!`);
}


//-----Умовний оператор ‘?’-------
console.log('\n\n-----Умовний оператор ‘?’-------');

console.log(`a = ${a}`);
let strIf = (a === 4) ? `Правильно` :
   (a > 4) ? `Ви не вмієте рахувати?` :
      (a < 4) ? `Ви не вмієте рахувати?` :
         `OOPS!!!`
console.log(strIf);


//-----Конструкція "switch"-------
//перевіряється на строгу рівність
//a = 4
console.log('\n\n-----Конструкція "switch"-------');
switch (a) {
   case 4:
      console.log('Правильно!');
      break;//
   case 3:
   case 5:
      console.log(`Ви не вмієте рахувати?`);
      break;

   default:
      console.log(`OOPS!!!`);
      break;
}