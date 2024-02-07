const ulBlock = document.querySelector("ul");
const header = document.getElementsByTagName("h1")[0];

//-------------------Class--------------------------
console.warn("Class,");

header.classList.toggle("title");
console.log(header.className);

header.classList.add("title_color_red", "title_type_header");

header.classList.remove("title");
console.log(header.className);

console.log(header.classList.contains("title"));
console.log(header.classList);

//------------------- Style--------------------------
console.warn(" Style");

ulBlock.style.color = "green";

main.style.display = "flex";
main.style.display = "";

main.style.background = "yellow";
main.style.removeProperty("background");

console.log(getComputedStyle(header).color);