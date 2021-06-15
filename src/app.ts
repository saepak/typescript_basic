import {Invoice} from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplates.js'
import {Payment} from './classes/Payment.js'
import {HasFormatter} from './interfaces/HasFormatter.js'

// const anchor = document.querySelector('a')!
// //!는 특정코드가 null이 아님을 알려줌/ 여기서 !없으면 하단  console.log(anchor.href) 에러남  
// if(anchor){
//     console.log(anchor.href)
// }
// // console.log(anchor.href)
//================================

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)

// console.log('docs : ',docs)


interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void{
        console.log(text)
    },
    spend(amount: number): number{
        console.log('I spent', amount)
        return amount
    }
}

// console.log(me)

const greetPerson = (person: IsPerson) => {
    // console.log('hello', person.name)
}

greetPerson(me)

const invOne = new Invoice('mario', 'mario website', 240)
const invTwo = new Invoice('luigi', 'luigi website', 290)


let invoices: Invoice[] = []
// Invoice에 저장된 형식만 오브젝트 형태로 들어감
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    // console.log(inv.format())
})


const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

const type = document.querySelector('#type') as HTMLInputElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

//list template instance
const ul = document.querySelector('ul')!
// ! 없으면 에러남
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter // 결과를 스트링으로 나오게 해줌?

    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    // console.log(doc)
    list.render(doc, type.value, 'end')
})

////////////////////////////////// Generic & ENUMS ///////////////////////////////

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}
//T로 감싸줘서 이 안에 있는 모든 펑션을 캡쳐함 그래서 ,docOne.name에 접근할수잇음

let docOne = addUID({name:'yoshi', age: 40})

console.log(docOne.name)

// with interfaces

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
    uid: number
    resourceType: ResourceType
    data: T
}
//T를 넣으면 어떤 데이터 타입이든 패스할수잇음, 더 유연하게 데이터 저장가능

const docThree: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: {name : 'shaun'}
}

const docFour: Resource<string[]> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: ['bread', 'milk']
}




