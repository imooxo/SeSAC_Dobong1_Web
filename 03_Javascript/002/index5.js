/* 1. if문 */
/* if(조건식) { //조건이 참일 때 실행할 문장 } */

if(5 > 3) console.log('5가 3보다 커요');

//let number = prompt('숫자 입력');
//number = Number(number);
//console.log(typeof number)


let number = 88;
/* if ~ else */
if(number > 10){
    console.log('숫자가 10보다 큽니다.')
}else{
    alert('10보다 작거나 같아요')
}

/* if ~ else if ~ else */
if(number > 10){
    console.log('10보다 큽니다.')
}else if(number === 10){
    console.log('10입니다.')
}else{
    console.log('10보다 작습니다')
}
