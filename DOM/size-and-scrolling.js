//-------------------Position--------------------------
console.warn("Position");

const firstItem = document.querySelector(".first-item");

console.log(firstItem.offsetParent.nodeName);
console.log(firstItem.offsetLeft);
console.log(firstItem.offsetTop);

//-------------------Size--------------------------
console.warn("Size");

console.log("offsetWidth: " + firstItem.offsetWidth);
console.log("offsetHeight: " + firstItem.offsetHeight);

console.log("clientLeft: " + firstItem.clientLeft);
console.log("clientTop: " + firstItem.clientTop);

console.log("clientWidth: " + firstItem.clientWidth);
console.log("clientHeight: " + firstItem.clientHeight);

console.log("innerWidth" + window.innerWidth);
console.log("clienWidth" + document.documentElement.clientWidth);

console.log("innerHeight" + window.innerHeight);
console.log("clientHeight" + document.documentElement.clientHeight);

//------------------------Прокрутка-----------------------------
console.warn("Прокрутка");

console.log("Поточна прокрутка зверху" + window.scrollX);
console.log("Поточна прокрутка зліва" + window.scrollY);

//----------------Координати------------------
console.warn("Координати");

console.table(firstItem.getBoundingClientRect());


const centerX = document.documentElement.clientWidth / 2;
const centerY = document.documentElement.clientHeight / 2;
console.log(centerX, centerY);

const centerElem = document.elementFromPoint(centerX, centerY);
console.log(centerElem);
//centerElem.style.backgroundColor = "#9a9aff";

