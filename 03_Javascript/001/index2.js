// 1. string(문자열)
/*  - 텍스트 정보
    - 숫자, 특수문자도 따옴표 안에 있으면 문자열
    - 따옴표 안에 따옴표가 있다면..?
        => "안에 '작은 따옴표'가 있어요"
        => '안에 "큰 따옴표가"가 있어요'
*/
let myname = "진형"
let number1 = '128'
console.log(myname)
console.log(number1)

// 2. number(숫자)
let number2 = 128;
let opacity = 0.7
console.log(number2)
console.log(opacity)

// NaN (not a number)
console.log('apple' - 3)

// 3. boolean(참,거짓)
/* true나 false */
let checkde = true;
let isShow = false;
console.log(checkde, isShow)

// 4. undefined
/* 값도 없고 타입도 지정되어 있지 않은 상태 */
let undef;
console.log(undef)

let empty = null;
console.log(empty)

// 5. 배열(array)
// []
let fruits = ["orange","pineapple","strawberry"]
console.log(fruits[2])
console.log(fruits[0])

let data = [22, '22', false]
console.log(data[0])
console.log(data[2])

// 2차원 배열
const korean = [
    ["가","나","다"],
    ["라","마","바"],
    ["사","아","자"]
]
console.log(korean[0]) //배열 ['가','나','다']
console.log(korean[0][1]) // '나'

const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];
console.log(letters[3][0]) // 아
console.log(letters[1][3]) // 이
console.log(letters[0][1]) // 스
console.log(letters[0][3]) // 크
console.log(letters[2][2]) // 림

// 3차원 배열
const nums =[
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
]
// 8뽑기
console.log(nums[1][0][1]) // 8


/* object */
// {}
// 배열은 순서가 있는 반면, object는 키-값 형태로 저장
// 데이터에 접근 시 key 이름을 이용해서 접근
// {키 이름 : value, 키이름2:vlaue2}

let cat = {
    name:'나비', //key이름:value
    age:2,
    isCute:true,
    mew: function(){
        return"냐옹"
    }
}

// 1) 점 표기법
console.log(cat.name) //나비
console.log(cat.age) //2
console.log(cat.isCute) //true
console.log(cat.mew()) //냐옹
/* 추가 */
cat.like = 'tuna'
/* 변경 */
cat.age = 3
console.log(cat)

// 2) 대괄호 표기법
let dog = {
    name: 'coco',
    isPoodle: true,
    age: 3,
    sibling:['max','lucy']
}
console.log(dog.name) //coco
console.log(dog['name']) //coco
console.log(dog['age']) //3
console.log(dog['sibling'][1]) //lucy

let mathScore = prompt("수학 점수를 입력 하세요"); //'50'
let engScore = prompt("영어 점수를 입력 하세요"); //'50
/* 명시적 형변환 */
let mathNumber = Number(mathScore)
let engNumber = Number(engScore)

let avg = (mathNumber + engNumber) /2 // '50'
console.log(avg);

// typeof 데이터의 타입을 확인 가능
console.log(typeof '문자') //string
console.log(typeof mathScore) //string
console.log(typeof mathNumber) //number
console.log('===============')
console.log(typeof true) //boolean
console.log(typeof []) //object
console.log(typeof {}) //object
console.log(typeof NaN) //number
console.log(typeof null) //object
console.log(typeof undefined) //undefined

// 형변환
console.log('=================================')
let str1 = true; //boolean
let str2 = 123; // number
let str3 = null; //null, object

console.log(String(str1)) //true
console.log(String(str2)) //123
console.log(String(str3)) //null
console.log(typeof String(str1)) //string
console.log(typeof String(str2)) //string
console.log(typeof String(str3)) //string

// 2. ? >> number
let n1 = true; //true -> 1
let n2 = false; //false -> 0
let n3 = 123; 
let n4 = '123.9'; 

console.log(Number(n1)) // 1
console.log(Number(n2)) // 0
console.log(Number(n3)) // 123
console.log(Number(n4)) // 123.9
console.log(typeof Number(n4)) //number
console.log(parseInt(n4)) // 123, 소수점은 버리고 정수형으로 변경됨


