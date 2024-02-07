const firstObject = {
   name: "Максим",
   birthDate: new Date(Date.UTC(1986, 0, 24)),
   child: null
};

const secondObject = {
   name: "Ігор",
   age: 30,
   parent: firstObject
};

firstObject.friend = secondObject;

//!___TEST
//const jsonElem = JSON.stringify(   firstObject)  

const jsonWithReplacer = JSON.stringify(
   firstObject,
   function replacer(key, value) {
      return (key == 'parent') ? undefined : value
   }
)

const jsonWithReplacerAndSpace = JSON.stringify(
   firstObject,
   function replacer(key, value) {
      return (key == 'parent') ? undefined : value
   },
   3
)


//console.log(jsonElem);
console.log('\n' + jsonWithReplacer);
console.log('\n' + jsonWithReplacerAndSpace);


const parsedObj = JSON.parse(
   `{
      "name": "Максим",
      "birthDate": "1986-01-24T00:00:00.000Z",
      "friend": {
         "name": "Ігор",
         "age": 30
      }
   }`,
   function (key, value) {
      if (key == "birthDate") {
         return new Date(value)
      }
      return value
   })

console.log(parsedObj);
console.log(parsedObj.birthDate.getDate());



const parsedObjWithoutFunc = JSON.parse(
   `{
      "name": "Максим",
      "birthDate": "1986-01-24T00:00:00.000Z",
      "friend": {
         "name": "Ігор",
         "age": 30
      }
   }`)

console.log(parsedObjWithoutFunc);
//console.log(parsedObjWithoutFunc.birthDate.getDate());

