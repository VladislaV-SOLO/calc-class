

// function userinfo(firstName,secondName, i ){
//     switch(i) {
//         case '+':
//             console.log(firstName + secondName)
//             break
//         case '-':
//             console.log(firstName - secondName)
//             break
//         case '/':
//             console.log(firstName / secondName)
//             break
//         case '*':
//             console.log(firstName * secondName)
//             break
//         default:
//             console.log('Введите (+, -, /, *)');
//     }
// }
// userinfo(7, 5, '+')


// function userinfo(first,second){
//     console.log(first, second)}
// (4, 7)


// let isShowPassword = true
// let email = '321321'
// const correctEmail = 'user@mail.ru'
// const inCorrectEmail = email
// let errormassage = null
// const validateEmail1 = function(param = 'default', secondparam = 'default2') {
//     console.log('первая функция', param, secondparam)
// }
// const validateEmail2 = function foo(a) {
//     console.log('вторая функция foo')
//     let c = a
//     console.log('c', c)
//     c++
//     if (c === 10) return;
//     foo(c)
// }
// validateEmail2(1)

// // const validateEmail3 = () => {
// //     return correctEmail === email ? 'входи' : 'попробуй ещё'
// // }
// // const validateEmail3 = () => correctEmail === email ? 'входи' : 'попробуй ещё'

// const validateEmail3 = () => {
//     console.log('Стрелочная функция')
// }
// function validateEmail4() {
//     console.log('четвертая функция')
// }

// const validateEmail = (userEmail) => {
//     let error = correctEmail === userEmail ? null : `обязательно напишите ${correctEmail}`
//     console.log(error);
//     // switch(error) {
//     //     case `обязательно напишите ${correctEmail}`:
//     //         alert(error);
//     //         break
//     //     default:
//     //     confirm('вы успешно вошли. продолжить')
//     // }

//     // if (!!error) {
//     //     alert(error);
//     // } else {
//     //     confirm('вы успешно вошли. продолжить')
//     // }

//     !!error ? alert(error) : confirm('вы успешно вошли. продолжить')
// }

// validateEmail(email)



// let str = 'strola'
// let str2 = ''
// let str3 = String('')
// let num = 2
// let bool = false

// let name = 'vlad'

// let user1 = {
//     name:'vlad',
//     age: 21,
//     hasJob: true,
//     salary: 100,
//     isMarried: true,
//     emptyValue: null,
//     emptyValue2: undefined,
//     sayhello: function () {
//         console.log('привет я ', user1.name);
        
//     }
// }

// let user2 = {
//     name:'dima',
//     age: 36,
//     hasJob: true,
//     salary: 100,
//     isMarried: true,
//     emptyValue: null,
//     emptyValue2: undefined,
//     sayhello: function () {
//         console.log('привет я ', user2.name);
//         console.log('привет мне ', user2.age);
        
//     }
// }

// let user3 = {
//     name:'sveta',
//     age: 18,
//     hasJob: true,
//     salary: 1000,
//     isMarried: true,
//     emptyValue: null,
//     emptyValue2: undefined,
//     sayhello: function () {
//         console.log('привет я ', user3.name);
//         console.log('привет мне ', user3.age);
        
//     }
// }
// console.log(user.name);
// console.log(user.age);
// console.log(user.sayhello());

// let user4 = {
//     name:'vlad',
//     age: 21,
//     hasJob: true,
//     salary: 100,
//     isMarried: true,
//     emptyValue: null,
//     emptyValue2: undefined,
//     sayhello: function () {
//         console.log('привет я ', user4.name);
//         console.log('привет мне ', user4.age);
//     },
//     pet: {
//         cat: {
//             petName:'tosya',
//             age:10,
//         },
//         dog: {
//             petname: 'rex',
//             age: 20,
//         }
//     }
// }

// console.log(user4.age);
// console.log(user4);

// user4.age = 25
// delete user4.emptyValue

// let someObject = function user(name, age, job) 
// let user = {
//     name: 'Vlad',
//     age: 21,
//     job: driver,
// }

// ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ
// const user = (user1) => {}

// let age = function(name) {}

// function omg() {}
// ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ




// const user1 = {
//     name: 'Vlad',
//     salary: null,
//     departament: 'бухгалтерия'
// }
// const user2 = {
//     name: 'Maks',
//     salary: 100,
//     departament: 'бухгалтерия'
// }
// const user3 = {
//     name: 'Oleg',
//     salary: 50,
//     departament: 'бухгалтерия',
//     age: undefined
// }

// console.log('age' in user3);

// for (let key in user3) {
//     console.log('key', key);
//     console.log('value', user3[key]);
// }

// const minSalary = 50;
// const maxSalary = 100
// 1 sposob
// const setSalary = (obj) => {
//     if(!obj.salary && obj.salary !== 0) {
//         obj.salary = 50
//     }
//     console.log(obj);
// }

// 2 sposob
// const setSalary = (obj) => {
//     for (let key in obj) {
//         if (key === 'salary' && (!obj[key] && obj[key] !== 0)) {
//             obj.salary = minSalary
//         }
//     }
//     console.log(obj);
// }

// 3 sposob
// const setSalary = (obj) => {
//     if ('salary' in obj) {
//         console.log('есть такое поле');
//         if (!obj['salary'] && obj.salary !== 0) {
//             obj.salary = minSalary
//         }
//     } console.log(obj);
// }

// setSalary(user1)
// // salary 50
// setSalary(user2)
// //salary 50
// setSalary(user3)
// // salary 100

//задача задача задача задача задача
// const price = {
//     car: 100,
//     home: 1000,
//     furniture: 20,
//     products: 7,
//     books: 5
// }

// const updatePrice = (obj) => {
//     for (const key in obj) {
//         const extraPrice = obj[key] * 0.13
//         obj[key] = obj[key] + extraPrice
//     }
//     console.log(obj);
// }
//  updatePrice(price)
// // МАСИВЫ МАСИВЫ МАСИВЫ МАСИВЫ МАСИВЫ

// const myArr = []

// const testObj = {
//     foo() {
//         console.log('hello from method in testobj');
//     },
//     age: 27
// }

// testObj.foo()

// console.log(myArr.length)









































