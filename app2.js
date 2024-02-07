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


const newUser = users.reduce((acc, user, index) => {
   if (index != 0) {
      let cityArr = null;
      acc.forEach((item, indexAcc) => {
         if (item[0].city == user.city) {
            acc[indexAcc].push(user)
         } else {
            cityArr++
         }
      })

      if (cityArr === acc.length) {
         acc.push([user]);
      }
   } else {
      acc[0].push(user);
   }
   return acc
}, [[]])

//console.log(newUser)

const sortUsersObj = users.reduce((acc, user) => {
   if (!acc[user.city]) {
      acc[user.city] = [user];
      return acc
   }
   acc[user.city].push(user);
   return acc
}, {})
const sortUsersArr = Object.values(sortUsersObj);
//console.log(sortUsersArr);




const newUsersArr = users.reduce((acc, user, index) => {
   if (index != 0) {
      const indexArr = acc.findIndex((arr) => {
         return (arr[0].city === user.city) ? true : false
      });

      if (indexArr >= 0) {
         acc[indexArr].push(user);
         return acc
      }
      acc.push([user]);
   } else {
      acc[0].push(user);
   }
   return acc
}, [[]])

console.log(newUsersArr)