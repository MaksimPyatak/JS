function makeIterator(arr) {
   let nextIndex = 0;

   return {
      next: function () {
         return nextIndex < arr.length
            ? { value: arr[nextIndex++], done: false }
            : { done: true }
      }
   }
}

const iterArr = makeIterator([1, 'by', 3, 4, 5]);

console.log(iterArr.next().value);
console.log(iterArr.next().value);
console.log(iterArr.next().value);
console.log(iterArr.next().value);
console.log(iterArr.next().value);
console.log(iterArr.next().value);

console.log('\n-------Generator-----------\n');


function* generate() {
   yield 1;
   yield 2;
   yield 3;
}

const generator = generate();

for (const value of generator) {
   console.log(value);
}

console.log("-------------Ітерований об'єкт------------------");

const iterObj = {
   from: 1,
   to: 5,

   [Symbol.iterator]: function* () {
      for (let value = this.from; value <= this.to; value++) {
         yield value
      }
   }
}

console.log([...iterObj]);