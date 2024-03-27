arr = [1, 2, 3, 4, 5]

// // forEach 메소드를 사용해서 각 요소에 세제곱을 한 값을 출력해라!
// arr.forEach(val => {
//     console.log(val ** 3);
// });

// // 익명함수
// arr.forEach(function (val){
//     console.log(val ** 3);
// });

// // 함수 선언식
// function cubed(val){
//     console.log(val ** 3);
// }

// // 표현식
// const cubed2 = function(val){
//     console.log(val ** 3);
// }

// // arr.forEach(cubed)
// arr.forEach(cubed2)

// map : 해당 콜백함수를 각 요소에 실행,
// 그의 결괏값을 반환해서 새로운 리스트를 생성

arr2 = arr.map(val => val ** 2);
console.log(arr2)

// filter : 해당 콜백함수의 반환값이 참인 값만 요소로 새로운 배열을 만듦
arr3 = arr.filter(val => val >= 3) // [3,4,5]
console.log(arr3)


const products = [
    {name: 'cucumber', type:'vegetable'},
    {name: 'banana', type:'fruit'},
    {name: 'carrot', type:'vegetable'},
    {name: 'apple', type:'fruit'},
]

// 필터를 사용해서 야채만 남기겠다.
console.log(
    products
        .filter((product) => product.type === 'vegetable')
    );

// 필터를 사용해서 야채만 남기는데,
// 해당 야채의 이름만 배열에 남겨라
console.log(
    products
        .filter((product) => product.type === 'vegetable')
        .map((product) => product.name)
);

// 'fruit'의 타입을 가지고 있는 객체의 갯수를 세어봐라.
console.log(
    products.filter((product) => product.type === 'fruit').length
);
console.log(
    products.map((product) => product.type)
        .reduce((count, type) => {
            return count + ((type === 'fruit')? 1 : 0)
        }, 0)
)
console.log(
    products.reduce((count, product) => {
        return count + ((product.type === 'fruit')? 1 : 0);
    }, 0)
);

// find 메서드

console.log(
    arr.find((x) => x > 2)
);



// 속성명 축약
const books1 = ['book_a', 'book_b', 'book_c']
const shop1 = {
    books1, // books : books
}
console.log(shop1)
console.log()



// 계산된 속성
subject = "math"

const math_obj1 = {
    [subject] : 100
}

math_obj1.math
// math_obj.subject



// 구조 분해 할당
// const person = {
//     name: "홍길동",
//     age: "20",
//     id: '10000000'
// }

// let name = person.name;
// let age = person.age;
// let id = person.id;
let {name2, age2, id2} = person2;


// 객체 -> JSON(문자열)
const person2 = {
    name2: "홍길동",
    age2: "20",
    id2: '10000000'
}
console.log(person2);
console.log(typeof person2);

text = JSON.stringify(person2);
console.log(text);
console.log(typeof text)

obj2 = JSON.parse(text)
console.log(obj2)
console.log(typeof obj2)