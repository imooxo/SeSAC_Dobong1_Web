/* Date 객체 
    - 현재 시간, 날짜에 대한 정보를 얻기 위해 사용
    - 원하는 값으로 초기화 가능
*/
console.log('===== Date =====')
let now = new Date()
console.log(now) // Wed Jan 10 2024 16:11:42 GMT+0900 (한국 표준시)
// new Date('날짜 문자열')
console.log(new Date('September 30, 2000 13:00:00'))
console.log(new Date(2023,5,1,2,2,10)) //Thu Jun 01 2023 02:02:10 GMT+0900 (한국 표준시)

console.log(now.getFullYear(),'년'); //2024 '년'
console.log(now.getMonth(),'월') //0 '월' / 0~11
console.log(now.getDate(),'일') //10 '일' / 며칠
console.log(now.getHours(),'시') // 16 '시' / 시간(0~23)
console.log(now.getMinutes(),'분') // 16 '분' / 분(0~59)
console.log(now.getSeconds(),'초') // 29 '초' / 초(0~59)
console.log(now.getMilliseconds(),'밀리초') // 575 '밀리초' / 초(0~999 1000이 1초)
console.log(now.getDay(),'요일') // 3 '요일' / (0~6) 0=일요일,1=월요일 ... 



/* Math 객체 */
console.log('===== Math =====')
console.log(Math.PI); // 파이 / 3.141592653589793
console.log(Math.E); // 자연로그 e / 2.718281828459045
console.log(Math.SQRT2); // 루트 2 / 1.4142135623730951

/* Math 객체의 Method */
console.log('===== Math.Method =====')
console.log(Math.min(1,2,3,4,5,6,7,8,9, -5, -7.5)); // 가장 작은 수 /-7.5
console.log(Math.max(2,5,7,10,11,14,5)); // 가장 큰 수 / 14
console.log(Math.ceil(5.155)); // 올림 / 6
console.log(Math.floor(5.155)); // 내림 / 5
console.log(Math.round(5.4)); // 반올림 / 5
// 0 <= x < 1
console.log(Math.random()); // 새로고침 할때 마다 랜덤 수 / 0.7610348781982617

// 0 <= x < 3
console.log(Math.random()*3); // 3은 포함되지 않은 랜덤 수 / 2.287179703043351
console.log(Math.floor(Math.random()*3)); // 1

// 0 <= x < 45
// 1 <= x < 46
console.log(Math.floor(Math.random()*45)+1); // 1~45 랜덤 수 / 25


/* Object 관련 객체 */
console.log('===== Object =====')
const areaNum ={
    Seoul:'02',
    Incheon:'032',
    Busan:'051',
    Ulsan:'052',
    Gwangju:'062',
    Jeju:'064'
}
// 각각 key와 value를 뽑아서 배열로 반환하는 객체의 메소드
const area = Object.keys(areaNum); 
const number = Object.values(areaNum);

console.log(area); // (6) ['Seoul', 'Incheon', 'Busan', 'Ulsan', 'Gwangju', 'Jeju']
console.log(number); // (6) ['02', '032', '051', '052', '062', '064']

// 다른 방법
const obj = new Object({
    a:'10',
    b:'55'
})
console.log(obj); // {a: '10', b: '55'}