
const anchor = document.querySelector('a')!
//!는 특정코드가 null이 아님을 알려줌/ 여기서 !없으면 하단  console.log(anchor.href) 에러남  
if(anchor){
    console.log(anchor.href)
}
// console.log(anchor.href)

//public : 디폴트값, 어디에서나 접근가능. 디폴트라 굳이 안써줘도 됨
//protected : 상속받은 하위클래스만 접근가능.
//private : 선언한 클래스 내에서만 접근가능. 클래스 내에 프라이빗 선언한게 있으면 클래스 밖에서는 호출할수 없음 (콘솔로그 등 안됨)
//readonly : 클래스 내외에서 읽기만 가능하고 바꿀수없음

class Invoice {


    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}
    //detail은 프라이빗이라서 클래스내에서만 호출가능하지만 포맷 메소드는 퍼블릭이라 밖에서도 호출가능
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('mario', 'mario website', 240)
const invTwo = new Invoice('luigi', 'luigi website', 290)


let invoices: Invoice[] = []
// Invoice에 저장된 형식만 오브젝트 형태로 들어감
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.format())
})


const form = document.querySelector('.new-item-form') as HTMLFormElement
console.log(form.children)

const type = document.querySelector('#type') as HTMLInputElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value
    )
})
