//-----Пошук-------
console.log('\n\n-----Пошук-------');
const tells = "+380969876541 +380969876241 +380969876425 +380969876579"
const arrayResult = tells.match(/380/) //g
console.log(arrayResult);
//console.log(arrayResult.index);
//console.log(arrayResult.input);

//------Заміна збігів------
console.log('\n\n------Заміна збігів-------');
const str = "Люблю HTML"
const chagingStr = str.replace(/HTML/, "$` і JavaScript")
console.log(`${chagingStr}\n\n`);

let strLower = "Upper Case";//"Іван Сірко"

let result = strLower.replace(/(\w+) (\w+)/, (match, name, surname) => `${surname}, ${name}`);

console.log(result); // HTML та CSS

let strGroupRepl = "Upper Case";

let result2 = strGroupRepl.replace(/(?<name>\w+) (?<surname>\w+)/, (...match) => {
   let groups = match.pop();
   //console.log(`match--${groups}`);

   return `${groups.surname}, ${groups.name}`;
});

console.log(`result - ${result2}\n\n`); // Сірко, Іван


//------str.replaceAll------
console.log('\n\n------Заміна збігів str.replaceAll-------');
//const regRepAll = /"/;
const strReplAll = '"ABC", "QWER"';
console.log(`${strReplAll.replaceAll(/"/g, "'")}\n\n`);

//------regexp.exec(str)------
console.log('\n\n------regexp.exec(str)-------');
const strExec = '22 23 34 45 56 23 23 45 23';
const regExec = /23/g;
regExec.lastIndex = 9;
console.log(regExec.exec(strExec));
console.log(regExec.exec(strExec));
console.log(regExec.exec(strExec));



//-------Перевірка: regexp.test ------
console.log('\n\n-----------Перевірка: regexp.test-------------');
const strTest = "Люблю HTML, CSS, JS";
const reg = /js/;//i
const test = reg.test(strTest);
console.log(`${test}\n\n`);


//-------str.split - метод що ділить рядок ------
console.log('\n\n-----------str.split - метод що ділить рядок-------------');
const strSplit = "22, 33, 44,  5 5";
const regSplit = /,\s/;
console.log(strSplit.split(regSplit));


//-------str.search  ------
console.log('\n\n-----------str.search -------------');
const strSearch = "44 22 33  55 22 44";
const regSearch = /44/;
console.log(strSearch.search(regSearch));


//--------Набори та діапазони [...]-------------
console.log('\n\n-----------Набори та діапазони [...]-------------');
const str1 = 'Сніданок о 09:00. Вечеря о 21-30';
const reg1 = /([01]\d|2[0-3])[:-][0-5]\d/g;
console.log(str1.match(reg1));

//--------Квантифікатори-------------
console.log('\n\n-----------Квантифікатори-------------');
const strQuon = "Привіт!... Як справи?.....";
const regQuon = /\.{3,}/g;
console.log(`${strQuon.match(regQuon)}\n\n`);


const strQuon2 = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
const regQuon2 = /\#[A-Z\d]{6}\b/gi
console.log(strQuon2.match(regQuon2));

//-------------Ледачий режим-----------------
console.log('\n\n-----------Ледачий режим-------------');
const strLazy = `... <!-- My -- comment
 test --> ..  <!----> ..
`;
const regLazy = /\<\!\-\-.*?\-\-\>/sg
console.log(`${strLazy.match(regLazy)}\n\n`);

const strLazy2 = '<> <a href="/"> </a> <input type="radio" checked> <b>';
const regLazy2 = /<\/?[a-z].*?>/ig
console.log(strLazy2.match(regLazy2));

//------------Групи захоплення Метод matchAll---------------
console.log('\n\n-----------Групи захоплення-------------');
const strIter = "Hello, my name is John. John likes to code. John`s";
const regIter = /(?<name>Joh)?n(\`s)?/g;
const iterObj = strIter.matchAll(regIter);
console.log(iterObj);
//console.log(Array.from(iterObj));
for (const rez of iterObj) {
   console.log(rez);
   let { name } = rez.groups
   console.log(name);
}

//------------Альтернація---------------
//------------Знайдіть пари ВВ-тегів---------------
console.log('\n\n-----------Альтернація-------------');
console.log('\n\n--Знайдіть пари ВВ-тегів----');
const strAlter = "..[url]http://google.com[/url]..[url][b]http://google.com[/b][/url].."
const regAlter = /\[((url|b|quote)\]).*?\[\/\1/gs;
console.log(strAlter.match(regAlter));
