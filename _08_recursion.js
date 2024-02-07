//--------------------Розрахувати факторіал-----------------
console.log('\n\n--------------Розрахувати факторіал----------------');
function factorial(count) {
   if (count === 2) {
      return 2
   }
   return count * factorial(count - 1)
}
console.log(factorial(5));

//--------------------Вивести однозв’язаний список-----------------
console.log('\n\n--------------Вивести однозв’язаний список----------------');

let list = {
   value: 1,
   next: {
      value: 2,
      next: {
         value: 3,
         next: {
            value: 4,
            next: null
         }
      }
   }
};

function printList(list) {
   console.log(list.value);
   if (!list.next) {
      return
   }
   printList(list.next)
}

//function printList(list) {
//   let tmp = list;
//   do {
//      console.log(list.value);
//      list = list.next
//   } while (list);
//}
printList(list)