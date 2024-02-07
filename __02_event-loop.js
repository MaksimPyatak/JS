let btn = document.querySelector('#btn');
console.log('Start');
setTimeout(function timeout() {
   console.log('timeout- - - - 1');

}, 0);
//setTimeout(() => {
Promise.resolve().then(() => {
   console.log('promis setTimeout2');
})
//}, 0)
console.log(btn + '- - - - - 3');
btn.addEventListener('click', () => {
   setTimeout(() => {
      console.log('Click!- - - -4');
   }, 2000)
})
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');
console.log('Waiting!');