"use strict";
// const character = 'mario';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//   console.log(input);
// });
////////////////////////---------LESSON1,2---------////////////////////////
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;
// // character = 20;
// character = 'luigi';
// // age = 'yoshi';
// age = 40;
// // isBlackBelt = 'yes';
// isBlackBelt = true;
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// // console.log(area('hello'));
// console.log(circ(7.5));
////////////////////////---------LESSON3---------////////////////////////
// let names = ['luigi', 'mario', 'yoshi'];
// names.push('toad');
// // names.push(3);
// // names[1] = 3;
// let numbers = [10, 20, 12, 15];
// numbers.push(25);
// // numbers.push('shaun');
// // numbers[0] = 'shaun';
// let mixed = ['ken', 4, 'chun-li', 8, 9];
// mixed.push('ryu');
// mixed.push(10);
// mixed[0] = 3;
// // objects
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// };
// ninja.age = 40;
// ninja.name = 'ryu';
// // ninja.age = '30';
// // ninja.skills = ['fighting', 'sneaking']
// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
//   age: 40,
//   // skills: ['running'],
// };
////////////////////////---------LESSON4---------////////////////////////
// let character: string = 'mario';
// let age: number;
// let isLoggedIn: boolean;
// age = 30;
// isLoggedIn = true;
// // 위에 타입을 정했기 때문에 그 타입외의 것을 할당하면 에러남 age='string' 안됨
// // arrays
// let ninjas: string[] = [];
// ninjas.push('ryu');
// ninjas.push('chun-li');
// console.log(ninjas);
// // union types
// let mixed: (string|number|boolean)[] = [];
// mixed.push('hello');
// mixed.push(false);
// mixed.push(20);
// console.log(mixed);
// //어레이 안에 스트링,숫자,불린이 들어갈 수 있다고 지정해줘야됨
// let uid: string|number;
// //union type(두개이상의 타입지정)일 때는 뒤에 []없어도 됨
// // objects
// let ninjaOne: object;
// ninjaOne = { name: 'yoshi', age: 30 };
// let ninjaTwo: {
//   name: string,
//   age: number,
//   beltColour: string
// };
// ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
// //오브젝트는 오브젝트로만 지정할 수도 있고 밑에처럼 오브젝트에 들어가는 내용 하나하나 타입 지정해 줄수도 잇음
////////////////////////---------LESSON5---------////////////////////////
// let age: any = 25;
// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = { name: 'luigi' };
// console.log(age);
// //any로 지정하면 아무 타입이나 다 올 수 있음
// let mixed: any[] = []; // 1
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);
// let ninja: { name: any, age: any }; // 2
// ninja = { name: 'yoshi', age: 25 };
// console.log(ninja);
// ninja = { name: 25, age: 'yoshi' };
// console.log(ninja);
// //오브젝트를 any로 지정하는데는 두가지 방법이 잇음. 1이나 2처럼 하면 됨
////////////////////////---------LESSON6---------////////////////////////
// console.log("changed config")
////////////////////////---------LESSON7---------////////////////////////
// let greet: Function
// greet = () => {
//     console.log('hello, again')
// }
// const add = (a: number, b: number, c: number | string = 10): void => {
//     console.log(a + b)
//     console.log(c)
// }
// //void : null/undefined 만 값으로 가질 수 있는 타입이며, 아무 값도 return 하지 않는 함수의 반환 타입을 표시할 때 사용한다.
// add(5,10,'20')
////////////////////////---------LESSON8---------////////////////////////
// type StringOrNum = string | number
// type obgWithName = {name: string, uid: StringOrNum}
// //uid의 유니온 타입을 이렇게 지정하면 나중에 쓰기 편함
// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }
// const greet = (user: obgWithName) => {
//     console.log(`${user.name} says hello`)
// }
// const greetAgain = (user: obgWithName) => {
//     console.log(`${user.name} says hello`)
// }
////////////////////////---------LESSON9---------////////////////////////
//<<example1>>
let greet;
// ()안에 있는건 전부 parameter임 그래서 바뀔수있음 (타입만 매치하면됨)
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//<<example2>>
let calc;
//parameter에는 string이 있지만 반환은 항상 숫자로 하는 경우
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//<<example3>>
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
////////////////////////---------LESSON10---------////////////////////////
