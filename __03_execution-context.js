"use strict";
console.log(this);

const obj = {
   self: this,

   meth: function () {
      console.log('in obj: meth');
      console.log(this);
   },

   methCallBack: function (func) {
      console.log('in obj:');
      func();
   },

   arrowMeth: () => {
      console.log('Вкладена стрілкова функція');
      console.log(this)
   },

   arrowMethObj: {
      innerArrowFunc: () => {
         console.log('Двічі вкладена стрілкова функція');
         console.log(this)
      }
   },

   arrowMeth2: function () {
      console.log(this);
   },
}

function test() {
   console.log('func test');
   console.log(this);
}

console.warn('Функція з привязкою до глобального об`єкту та без');
console.log('with window');
window.test();
console.log('without window');
test();

//-------------------------------------------

console.warn('Функція з привязкою до об`єкту та без');
obj.meth();

obj.methCallBack(test);

const objMeth = obj.meth;
objMeth();

//----------------------------------------

console.warn('Контекст в стрілковій функції')

const arrowF = () => console.log(this);

arrowF();

obj.arrowMeth();

obj.arrowMethObj.innerArrowFunc();

//----------------------------------------


const testObj23 = {
   meth: function () {
      console.log(3);
      console.log(this);
   }
}

function test2() {
   console.log(1);
   console.log(this);
}
window.test2()

function test22() {
   console.log(2);
   console.log(this);
   testObj23.meth()
}