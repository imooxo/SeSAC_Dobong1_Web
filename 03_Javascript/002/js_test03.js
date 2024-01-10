console.log('if문을 이용해서 console창에 연령대별 단어 출력')
let age = 27;
if(age >= 20){
    console.log('20 이상 성인 입니다.')
}else if(age >= 17){
    console.log('17 이상 고등학생 입니다.')
}else if(age >= 14){
    console.log('14 이상 중학생 입니다.')
}else if(age >= 8){
    console.log('8 이상 초등학생 입니다.')
}else{
    console.log('0 이상은 유아 입니다.')
}

console.log('for문을 이용해서 1000까지의 숫자 중에서 13의 배수면서 홀수인 숫자를 찾기, (+)prompt')
//for문과 if문을 이용
for (let num = 1; num <= 1000; num++) {
    if (num % 13 === 0 && num % 2 === 1) {
        console.log(num);
    }
}

console.log('이중 for문을 이용해서 구구단 만들어보기')
for (let i = 2; i <= 9; i++) {
    console.log(`${i}단`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(); 
}

console.log('while문 0~100의 숫자 중에서 2 또는 5의 배수 총합 구하기')
let number = 0;
let sum = 0;

while (number <= 100) {
    if (number % 2 === 0 || number % 5 === 0) {
        sum += number;
    }
    number++;
}
console.log(`총합: ${sum}`);