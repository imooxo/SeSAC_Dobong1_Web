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