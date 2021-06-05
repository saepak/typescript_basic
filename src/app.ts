
const anchor = document.querySelector('a')!
//!는 특정코드가 null이 아님을 알려줌/ 여기서 !없으면 하단  console.log(anchor.href) 에러남  
if(anchor){
    console.log(anchor.href)
}
// console.log(anchor.href)


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
