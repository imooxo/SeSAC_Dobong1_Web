// 문자열에서 사용 가능한 속성/메소드
/*
- length
- toUpperCase, trim, indexOf, 
  slice, replace, replaceAll, split
*/

let str1 = "Strawbery Moon";
let str2 = "    Strawbery Moon  ";

// 문자열 인덱싱
console.log(str1[5]); // b 
console.log(str1[5]+str1[0]+str1[8]);// bsy

console.log('str1의 문자열 길이', str1.length) // str1의 문자열 길이 14
console.log('str2의 문자열 길이', str2.length) // str2의 문자열 길이 20

let msg = 'Happy Birthday~';
let userId = "    user123    "
console.log(msg.toLowerCase()); //전부다 소문자로 변환 / happy birthday~
console.log(msg.toUpperCase()); //전부다 대문자로 변환 / HAPPY BIRTHDAY~
console.log(str2.trim().length); // 14
console.log(userId.trim()); // user123

/* indexOf */
let mango = 'applemango';
console.log(mango.indexOf('apple')); // 0
console.log(mango.indexOf('mango')); // 5
console.log(mango.indexOf('e')); // 4

// 문자열에 포함되지 않는 문자열이 매개변수로 들어가면
// -1 반환
console.log(mango.indexOf('x')); //-1


/* slice */
console.log(mango.slice(5)); //mango 
// => 5번째 문자 m부터 시작한 끝까지 추출

console.log(mango.slice(3,6)); // lem / 포함관계,불포함관계
// => 3번째 문자부터 6번째 문자까지만 추출 
console.log(mango.slice(-1)); // o
console.log(mango.slice(-4)); // ango
console.log(mango) // applemango

let msg2 = "Wow It is so amazing!!!"
console.log(msg2.replace("Wow", "Hey")) // Hey It is to amazing!!!
console.log(msg2.replaceAll('o','O')) // WOw It is sO amazing!!!

let date = '2024.1.10';
console.log(date.replaceAll('.','-')) // 2024-1-10
date=date.replaceAll('.','-') // 값 대입
console.log(date) // 2024-1-10

console.log("abc".repeat(10)); //abcabcabcabcabcabcabcabcabcabc

console.log(date.split('-')); // (3) ['2024', '1', '10']
console.log(date.split('')) // (9) ['2', '0', '2', '4', '-', '1', '-', '1', '0']



