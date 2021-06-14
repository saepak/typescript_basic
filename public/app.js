import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplates.js';
import { Payment } from './classes/Payment.js';
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
// console.log(me)
const greetPerson = (person) => {
    // console.log('hello', person.name)
};
greetPerson(me);
const invOne = new Invoice('mario', 'mario website', 240);
const invTwo = new Invoice('luigi', 'luigi website', 290);
let invoices = [];
// Invoice에 저장된 형식만 오브젝트 형태로 들어감
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    // console.log(inv.format())
});
const form = document.querySelector('.new-item-form');
// console.log(form.children)
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
// ! 없으면 에러남
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc; // 결과를 스트링으로 나오게 해줌?
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(doc)
    list.render(doc, type.value, 'end');
});
//Generic
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
//T로 감싸줘서 이 안에 있는 모든 펑션을 캡쳐함 그래서 ,docOne.name에 접근할수잇음
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.name);
//T를 넣으면 어떤 데이터 타입이든 패스할수잇음, 더 유연하게 데이터 저장가능
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
const docFour = {
    uid: 1,
    resourceName: 'shopping list',
    data: ['bread', 'milk']
};
