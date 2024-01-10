/* 1. for문 */
/*
for(변수 선언과 초기값 할당; 조건식(어디까지 증가?감소?);증감식){
    반복할 코드;
}
*/
for(let i = 0; i<10; i++){
    console.log('안녕',i)
}

for(let i = 0; i < 10; i+=2){
    console.log(`안녕하세요 ${i}`);
}

// 1부터 5까지 증감 출력하는 방법
for(let i = 1; i <= 5; i++ ){
    console.log(i)
}
for(let i = 1; i < 6; i++ ){
    console.log(i)
}
for(let i = 1; i < 5; i++ ){
    console.log(i+1)
}

// 5부터 1까지 감소 출력하는 방법
for(let i=5; i>0; i--){
    console.log(i)
}

// 1부터 n까지의 덧셈
let n = 11;

let sum1 = 0;
console.log('===1부터 n까지의 덧셈===')
//sum1 = 0+'1+2+3... + n(11)'
for(let i = 1; i < n; i++){
    console.log(i);
    //sum1 = 0 + 1
    //sum1 = 0 + 1 + 2
    //sum1 = 0 + 1 + 2 + 3..+ n
    //sum1 = sum1 + i;
    sum1 += i;
}
console.log(sum1); //55

console.log('===배열과 함께 사용하는 for문===')
/* 배열과 함께 사용하는 for문 */
let fruits = ['사과', '망고', '오렌지', '망고스틴'];
console.log(fruits.length) // 배열의 길이 확인
//fruits[0]
//fruits[1]
//fruits[2]
for(let i = 0; i < fruits.length; i++){
    console.log('i like',fruits[i])
}

console.log('===배열 요소의 합 구하기===')
// 배열 오소의 합 구하기
let numsArr = [99,99,98,85,77];
let sum2 = 0;
for(let i = 0; i < numsArr.length; i++){
    sum2 += numsArr[i]
}
console.log(sum2) //458

/* 2. while 문 */
/*
초기화식;
while(조건식){
    조건이 참일 때 실행할 문장;
    증감식;
}
*/
console.log('===while문 초기화식 증감식===')
let n2 = 1; // while의 초기화 식
while(n2 <= 5){ // 조건식
    console.log(n2); // 실행문
    n2++; //증감식
}

console.log('===while문 초기화식 감소식===')
n2 = 10;
while(n2 > 4){
    console.log(n2);
    n2--;
}

console.log('===while문 1~10에서 짝수만 출력===')
// 1 ~ 10 짝수만 출력 > while문 이용
n2 = 1;
while(n2 <= 10){
    if(n2 % 2 === 0){ //짝수 일 때
        console.log(n2);
    }
    n2++;
}

console.log('===while문 10~1에서 홀수만 출력===')
// 10부터 1까지 감소하는데 홀수만 출력
n2 = 10;
while(n2>=1){
    if(n2 % 2 === 1){
        console.log(n2);
    }
    n2--;
}

console.log('===while문과 break(반복문을 멈추고 밖으로 빠져 나감)===')
let b = 0;
while(true){
    console.log(b);
    b++;
    if(b>10) break;
}

console.log('===while문과 continue(반복문을 한 번만 멈추고 다음으로 진행)===')
let sum3 = 0;
for(let i = 0; i < 10; i++){
    if(i%2===0) continue;
    // i % 2 === 0 일때 반복하지 않고 다음 반복으로 넘김
    sum3 += i;
}
console.log(sum3) // 25

console.log('===while문과 confirm===')
let n3 = 0;
while(confirm('계속 진행할까요?')){
    n3++;
    alert(`${n3}번째 alert 창`)
}
