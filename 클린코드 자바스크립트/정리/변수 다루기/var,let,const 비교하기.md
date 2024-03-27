<!-- @format -->

# Var

```js
var name = "이름";
var name = "이름2";
var name = "이름3";
var name = "이름4";
```

값을 다른데 변수명은 같아도 에러가 없다?
호출하면 마지막에 할당 된 변수가 나온다
선언하지 않고 호출해도 undefined가 나옴
재할당 재선언이 자유롭다
우리가 작성하는 코드라인이 많아진다면? 1,000줄? 10,000줄?

# Let

```js
let name;
name = "이름1";
name = "이름2";
name = "이름3";
```

let은 재할당만 가능

# const

```js
const name;
name= '이름1'
name= '이름2'
name= '이름3'

```

const는 재선언 재할당 모두 불가능

# scope 차이

전역변수 사용하지말자

```js
var global = '전역'
if(global === '전역'){
    var global = '지역'
    console.log(global); => 지역
}
// if문 scpoe를 벗엇났는데도?
console.log(global); => 지역
```

if문 때문 var는 함수 단위 스코프
if문은 함수가 아니기 때문에 블럭단위스코프로 바뀌지 않는 이상 이런 불안요소 발생

하지만 let or const로 바꾸면 ㄱㅊ 블록스코프이기때문에

이러한 불안요소 제거를 위해 let or const쓰자

근데 그 중에서도 const가 나음

```js
// 객체
const person{
    name:"jin",
    age:12
}
person.name="djf" 가능 person을 재할당한게 아니기 때문 배열도 마찬가지

본연의 객체 배열 같은 레퍼런스 객체 조장
```
