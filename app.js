const users = [
   {
      id: 1,
      name: 'Святослав',
      age: 25,
      email: 'svyatoslav@example.com',
      city: 'Київ'
   },
   {
      id: 2,
      name: 'Влада',
      age: 32,
      email: 'vlada@example.com',
      city: 'Київ'
   },
   {
      id: 3,
      name: 'Дима',
      age: 28,
      email: 'dima@example.com',
      city: 'Київ'
   },
   {
      id: 4,
      name: 'Максим',
      age: 35,
      email: 'maxim@example.com',
      city: 'Харків'
   },
   {
      id: 5,
      name: 'Влад',
      age: 29,
      email: 'vlad@example.com',
      city: 'Харків'
   },
   {
      id: 6,
      name: 'Артём',
      age: 41,
      email: 'artem@example.com',
      city: 'Харків'
   },
   {
      id: 7,
      name: 'Андрей',
      age: 36,
      email: 'andrey@example.com',
      city: 'Херсон'
   },
   {
      id: 8,
      name: 'Денис',
      age: 45,
      email: 'denis@example.com',
      city: 'Херсон'
   },
   {
      id: 9,
      name: 'Іван',
      age: 27,
      email: 'ivan@example.com',
      city: 'Херсон'
   },
   {
      id: 10,
      name: 'Марія',
      age: 31,
      email: 'maria@example.com',
      city: 'Рівне'
   }
];

const obj = {
   a: {
      b: {
         c: 1,
         d: 2
      },
      e: 3
   },
   f: 4
};

function flatAnObject(obj) {
   let flatObj = [];
   function recursFunction(object) {
      for (const key in object) {
         if (typeof object[key] === "object") {

         }
      }
   }
}

function flatAnObject(obj) {
   const newObj = {};
   let arr = [];
   arr.push({ obj, prefix: '' });
   let a = 1;
   while (arr.length) {
      const { obj, prefix } = arr.pop();
      for (let key in obj) {
         let value = obj[key];
         let newPrefix = prefix + key;
         if (value !== null && typeof value === 'object') {
            arr.push({ obj: value, prefix: newPrefix });
         } else {
            newObj[newPrefix] = value;
         }
      }
   }

   return newObj;
}
console.log(flatAnObject(obj));