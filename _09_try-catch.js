try {
   lala;
} catch (error) {
   console.log(`Виникла помилка: ${error.name}`);
   console.log(error.message);
   //console.log(error.stack);
}

console.log('\n');
let user = {
   age: 18,
}
let diff;
let start = Date.now();
try {
   if (!user.name) {
      throw new SyntaxError("Відсутне ім\'я користувача")
   }
   console.log(user.name);
} catch (error) {
   console.log(error.name);
   console.log(error.message);
} finally {
   diff = Date.now() - start;
}
console.log(`Виконання тривало ${diff}`);