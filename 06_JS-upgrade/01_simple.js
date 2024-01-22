/* 구조 분해 할당 */
/* 1. 배열의 구조분해 할당 */
const arr = ['tomato','kiwi','banana'];
console.log(arr[2]); // banana
const [to, ki, ba] = arr;
console.log(ki); // kiwi

const arr2 = ['빨','주','노','초'];
const [red, orange, , green] = arr2;
console.log(red,green); // 빨 초


/* 값 변경하기 */
let x = 'first';
let y = 'second';
[x, y] = [y, x];

console.log(x,y); // second first (값이 서로 바뀜)

let x2 = 'first';
let y2 = 'second';
let temp; // temp = 임시변수
temp = x2 
x2 = y2;
y2 = temp;



/* 2. 객체의 구조분해 할당 */
const obj = {
    title: '제목',
    content: '내용',
    number: 0,
};
console.log(obj.title); // 제목

const {title:t2 , content , number} = obj;
//console.log(title); // 제목
console.log(t2); // 제목


/* ...연산자 */
/* 1. 전개구문...(spread) */
const arr3 = [1,2,3,4,5];
const arr4 = ['a','b','c'];

console.log(arr3); // [1,2,3,4,5]
console.log(arr4); // ['a','b',c']


for(let el of arr3){
    console.log(el); // 1 2 3 4 5
}

console.log(...arr3); // 12345

// [1,2,3,4,5,'a','b','c']
const arr5 = arr3.concat(arr4);
const arr6 = [...arr3, ...arr4]; //전개연산자 방식
console.log('=================================')
console.log(arr5); // [1,2,3,4,5,'a','b','c']
console.log(arr6); // [1,2,3,4,5,'a','b','c']


/*문자열을 배열로 변경하기 */
const str = "hijade";
let strToArr = [...str]; // 전개연산자 방식
let strToArr2 = str.split('') // 메소드+split 사용
console.log(strToArr); // [ 'h', 'i', 'j', 'a', 'd', 'e' ]
console.log(strToArr2); // [ 'h', 'i', 'j', 'a', 'd', 'e' ]

const me1 = {
    name: "jade",
    height: 161,
    friend: null,
    married: false
};

const me2 = {
    name: '시연',
    like:['코딩하기','게임하기'],
    greeting:function(){
        console.log(`안녕하세요, 제 이름은 ${this.name}이고요, 키는 ${this.height} 입니다.`);
    },
};

let me = {...me1, ...me2}; // 전개연산자 방식
console.log(me);
me.greeting();
/*
{
    name: '시연',
    height: 161,
    friend: null,
    married: false,
    like: [ '코딩하기', '게임하기' ],
    greeting: [Function: greeting]
  }
*/ // name이 jade,시연(me1, me2)두개였는데 나중에 들어온 데이터 시연(= me2)이 출력됨



/* 실습1 - Spread 연산자 사용하기 (전개 연산자 방식) */
// 방법 1
const word1 = "abc";
const word2 = "xyz";
const wordArr = [...word1, ...word2]; // 전개 연산자 방식
console.log(wordArr); // [ 'a', 'b', 'c', 'x', 'y', 'z' ]

// 방법 2
const wordArr2 = (word1 + word2).split('');
console.log(wordArr2); // [ 'a', 'b', 'c', 'x', 'y', 'z' ]

// 방법 3
const wordArr3 = word1.split('').concat(word2.split(''));
console.log(wordArr3); // [ 'a', 'b', 'c', 'x', 'y', 'z' ]

console.log('=================================')
/* 2. rest 파라미터 */
const obj2 = {
    title: "제목",
    content: "내용",
    num: 0,
    key4:'value4',
    key5:'value5',
};

const {title:a, content:b, num:c, ...obj3}  = obj2; //key3, key4는 obj3에 새로운 오브젝트로 들어감
console.log(obj3);

function test(...valuee){
    console.log(valuee); // [ 1, 2, 3, 4, 5, 6 ]
    const [a,b, ...rest] = valuee;
    console.log(a); // 1
    console.log(b); // 2
    console.log(rest); // [ 3, 4, 5, 6 ]
}
test(1,2,3,4,5,6);
console.log(test); // [Function: test]
console.log('=================================')
// 실습2
// 매개변수가 몇개로 들어오든 합산해주는 함수 addNumber()
// 즉 배열의 원수의 합을 구하기
function addNumber(...rest){
    //console.log(rest); // 배열
    // rest = [1,2,3,4,5];
    let sum = 0;
    rest.forEach((el)=>{
        sum += el;
    })
    return sum;
}
// addNumber(1,2,3,4,5);
let result = addNumber(1,2,3,4,5,6,7); 
console.log(result); // 28

