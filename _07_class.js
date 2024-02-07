class RegCompany {
   constructor(companyName) {
      this.companyName = companyName;
   }
}
class Company extends RegCompany {
   #address = {};
   constructor(
      companyName,
      activity,
      yearOfEstablishment
   ) {
      super(companyName);
      this.activity = activity;
      this.yearOfEstablishment = yearOfEstablishment;
   }
   set street(str) {
      this.#address.street = str;
   }
   get street() {
      return this.#address.street
   }
   set city(city) {
      this.#address.city = city
   }
   get city() {
      return this.#address.city
   }
   get address() {
      return `city ${this.#address.city}, street ${this.#address.street}`
   }
   static whoIsOlder(companyA, companyB) {
      let yearsCompA = new Date(companyA.yearOfEstablishment);
      let yearsCompB = new Date(companyB.yearOfEstablishment);
      if (yearsCompA - yearsCompB == 0) {
         return 'equal'
      } if ((yearsCompA - yearsCompB) > 0) {
         return companyA.companyName
      } else {
         return companyB.companyName
      }
   }
}

let company = new Company('New Sky', 'airplane', 2020);
console.log(company);
company.street = '10 OGHB';
company.city = 'Malin';
console.log(company.street);
console.log(company.address);
//console.log(company.#address);
let companyB = new Company('Old Sky', 'airplane', 2020);
console.log(Company.whoIsOlder(company, companyB))


//------------Задача-----------------
class Button {
   constructor(value) {
      this.value = value;
   }
   click = () => {
      console.log(this.value);
   }
}
class Button2 {
   constructor(value) {
      this.value = value;
   }
   click = () => {
      console.log(this.value);
   }
}

let btn = document.getElementById('btn');
//setTimeout(button.click, 1000);

let isTrye = true;
let className = isTrye ? 'Button' : 'Button2'
let classMap = {
   'Button': Button,
   'Button2': Button2
};

let newBtn = new classMap[className]('Hello!');
let button = new Button("привіт");
btn.addEventListener('click', newBtn.click);

