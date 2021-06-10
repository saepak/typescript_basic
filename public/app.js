import { Invoice } from './classes/Invoice.js';
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
const invOne = new Invoice('mario', 'mario website', 240);
const invTwo = new Invoice('luigi', 'luigi website', 290);
let invoices = [];
// Invoice에 저장된 형식만 오브젝트 형태로 들어감
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.format());
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
