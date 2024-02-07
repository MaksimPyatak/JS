let arr2 = new Object([1, 2, 3, 3, 4, 4, 5, 5])
console.log(arr2);
arr2 = new Object(false)
console.log(arr2);
arr2 = false;
console.log(arr2);
let arr1 = new Object({
   John: 100,
   Ann: 160,
   Pete: 130
})
console.log(arr1);

let arrLit = {
   John: 100,
   Ann: 160,
   Pete: 130
}
console.log(arrLit);


let company = {
   companyName: "Healthy Candy",
   activity: "food manufacturing",
   address: {
      street: "2nd street",
      number: "123",
      zipcode: "33116",
      city: "Miami",
      state: "Florida"
   },
   yearOfEstablishment: 2021
};

console.log(company);
let address = 'address'
let city = 'city'
let compCity = company[address][city]
console.log('\n\n' + compCity + ',' + company.address.state);

const testObj = {
   ad: {
      value: '1',
      //writable: true,
      enumerable: true,
      //configurable: true,
   }
}

const newCompany = Object.create(company, testObj);
console.log('newCompany: ');
console.log(newCompany);

for (const key in newCompany) {
   console.log(newCompany[key]);
   //if (Object.hasOwnProperty.call(newCompany, key)) {
   //   const element = newCompany[key];

   //   console.log(newCompany[key]);
   //}
}

const a = Symbol('a');

const object1 = {
   [a]: {
      value: 1,
      enumerable: false,
   },
   b: 2,
   c: 3,
};

console.log(Object.getOwnPropertyNames(object1));
// Expected output: Array ["a", "b", "c"]