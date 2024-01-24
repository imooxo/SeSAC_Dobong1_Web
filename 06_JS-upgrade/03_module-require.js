/* 모듈을 불러서 사용 */
// 따로 부르기
// 가지고 오고 싶은 함수/변수만 구조분해할당을 이용해서 가져올 수 있음
const {sayName} = require('./03_exports1.js')

// 한번에 부르기(객체로 불러오기)
const exports1 = require('./03_exports1.js')
const { sayHi2, sayHi3 } = require('./03_exports2.js')

//sayName('jade')
console.log(exports1);
exports1.sayName('jade');

const{sayHi2,sayHi3} = require('./03_exports2.js')
sayHi2();
sayHi3('안녕하세요');