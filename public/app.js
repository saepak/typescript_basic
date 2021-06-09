import { Invoice } from './classes/Invoice.js';
// const anchor = document.querySelector('a')!
// //!는 특정코드가 null이 아님을 알려줌/ 여기서 !없으면 하단  console.log(anchor.href) 에러남  
// if(anchor){
//     console.log(anchor.href)
// }
// // console.log(anchor.href)
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
