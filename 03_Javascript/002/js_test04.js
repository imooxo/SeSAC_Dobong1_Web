console.log('=== 배열과 반복문 ===')
console.log('1~100까지의 배열을 for문 사용해서 만들기, 해당 배열의 합을 for문, for of문 forEach문을 사용하기')
console.log('1) for문')
let array1 = [];
let sumFor1 = 0;

for (let i = 1; i <= 100; i++) {
    array1.push(i);
    sumFor1 += i;
}
console.log("for문을 사용한 배열:", array1);
console.log("for문을 사용한 배열의 합:", sumFor1);

console.log('2) for of문')
let array2 = [];
let sumForOf2 = 0;

for (let i = 1; i <= 100; i++) {
    array2.push(i);
}
for (let num of array2) {
    sumForOf2 += num;
}

console.log("for of문을 사용한 배열:", array2);
console.log("for of문을 사용한 배열의 합:", sumForOf2);

console.log('3) forEach문')
let array3 = [];
let sumForEach3 = 0;

for (let i = 1; i <= 100; i++) {
    array3.push(i);
}

array3.forEach(function(num) {
    sumForEach3 += num;
});

console.log("forEach문을 사용한 배열:", array3);
console.log("forEach문을 사용한 배열의 합:", sumForEach3);

console.log('====================')
console.log('=== 내장 메소드 실습 ===')
let fruits1 = ["사과","딸기","파인애플","수박","참외","오렌지","자두","망고"];
let fruits2 = ["수박","사과","참외","오렌지","파인애플","망고"];

console.log('두 배열에서 동일한 요소만을 가지는 배열 same만들기,')
// 동일한 요소만을 가지는 배열 same 만들기
let same = fruits1.filter(fruit => fruits2.includes(fruit));

console.log('서로 다른 요소만을 가지는 배열 diff 만들기')
// 서로 다른 요소만을 가지는 배열 diff 만들기
let diff = [...fruits1.filter(fruit => !fruits2.includes(fruit)), ...fruits2.filter(fruit => !fruits1.includes(fruit))];

console.log("동일한 요소만을 가지는 배열 same:", same);
console.log("서로 다른 요소만을 가지는 배열 diff:", diff);


console.log('====================')
console.log('=== 내장 객체 Date ===')
console.log('오늘이 평일,주말인지 콘솔창에 출력') 
//if, switch, 삼항연산자 중 선택

//if문
let today = new Date();
if (today === 0 || today === 6){
    console.log('주말입니다1')
}
else {
    console.log('평일입니다1')
}

//swith문
let today2 = new Date();
switch (today2.getDay()) {
  case 0: //일요일
  case 6: //토요일
    console.log('주말입니다2.');
    break;
  default:
    console.log('평일입니다2.');
    break;
}

//삼항연산자
let today3 = new Date();
let isWeekend = (today3.getDay() === 0 || today3.getDay() === 6) ? '주말입니다3.' : '평일입니다3.';
console.log(isWeekend);

console.log('====================')
console.log('=== 내장 객체 random 난수 생성 ===')
console.log('내장객체 Math를 사용하여 0~10 사이의 랜덤한 숫자를 출력')
console.log(Math.floor(Math.random() * 11));