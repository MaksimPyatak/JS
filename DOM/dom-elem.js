//-------Пошук елементів-----------
console.warn("Пошук елементів");

const body = document.body;

const bodyChaild = body.children;
console.log(bodyChaild);

const main = body.firstElementChild;
console.log(main);

const ul = main.lastElementChild;
console.log(ul);

const bodyElem = main.parentElement;
console.log(bodyElem);

const h1 = ul.previousElementSibling;
console.log(h1);

const next = ul.nextElementSibling;
console.log(next);

const isMain = main.matches("main");
console.log(isMain);

const mainParent = ul.closest("main");
console.log(mainParent);

const contains = main.contains(ul);
console.log(contains);

//-------Властивості-----------
console.warn("Властивості");

console.log(ul.innerHTML);

console.log(ul.nodeName);

console.log(ul.outerHTML);

console.log(main.textContent);

//------------------Attribute---------------
console.warn("Atrribute");

console.log(ul.hasAttributes("class"));

h1.setAttribute("class", "title")

console.log(h1.getAttribute("class"));

h1.removeAttribute("class");
console.log(h1.getAttribute("class"));


//------------------Change document---------------

const zeroLi = document.createElement("li");
zeroLi.innerText = "zero"

//Додає вузли або рядки
ul.before("Subtitle");
ul.prepend("zero");
ul.append("Last item");
ul.after("<b>Text after list</b>");

ul.firstChild.replaceWith(zeroLi);

//
ul.insertAdjacentHTML("beforebegin", "<div><b>Elem befor list</b></div>");
ul.insertAdjacentHTML("afterbegin", "<li><b>Elem befor zero item</b></li>");
ul.insertAdjacentHTML("beforeend", "<li><b>Elem after last item</b></li>");
ul.insertAdjacentHTML("afterend", "<div><b>Elem after list</b></div>");

//ul.nextSibling.remove();
