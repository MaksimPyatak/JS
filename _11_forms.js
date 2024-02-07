//let form = document.querySelector('form');
//let form = document.forms[0];
let form = document.forms.first;

form.elements.text.addEventListener('change', () => {
   let label = document.querySelector('#text-label');
   label.innerHTML = form.text.value;
})

form.email.addEventListener('input', (e) => {
   let label = document.querySelector('#email-label');
   label.innerHTML = e.target.value
})


const divForRadio = document.querySelector('.for-studying');
let radioBtns = form.elements.studying;
form.elements.fieldset.addEventListener('click', (e) => {
   let radioBtn = e.target.closest('input[name="studying"]');
   if (!radioBtn) {
      return
   }
   divForRadio.getElementsByTagName('span')[0].innerHTML = radioBtn.value;
   console.log(divForRadio.getElementsByTagName('span')[0]);
})

let studyingBtn = document.querySelector('.for-studying-btn');
studyingBtn.addEventListener('click', () => {
   radioBtns[0].checked
})

let selectLang = form.elements.lang;
selectLang.addEventListener('change', () => {
   let langDiv = document.querySelector('.for-lang').getElementsByTagName('span')[0];
   langDiv.innerHTML = selectLang.value;
})

let btnSelect = document.querySelector('.for-select');
btnSelect.addEventListener('click', () => {
   selectLang.value = 'css';
   console.log(selectLang.value);
   const changeEvent = new Event('change');
   selectLang.dispatchEvent(changeEvent);
})
form.addEventListener('submit', (e) => {
   e.preventDefault();
   let message = document.querySelector('.message');
   message.innerHTML = 'Форму відправлено без перезавантаження сторінки'
   console.dir(form);
})