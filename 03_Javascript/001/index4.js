/*
    함수
    - 어떤 작업을 수행하기 위해 "독립적으로" 설계된 코드의 집합
    - 함수를 정의(선언)하고 호출(사용)
    - 선언방식 3가지
        1) 함수 선언문
            - 선언 후 어디에서나 사용 가능
        2) 함수 표현식
            - 선언 이후에만 사용 가능
        3) 화살 함수
            - 화살표 함수와 함수표현식은 변수에 익명함수를 담아둔 모양
            - 화살표 함수와 함수표현식은 동일함(모앙만 다름)
*/ 

// 함수 선언문
helloworld1(); //선언 전에 호출해도 실행됨
function helloworld1(){
    console.log('hello world!!')
}
helloworld1(); //hello world!!

// 함수 표현식
// helloworld2(); 선언 전에 호출하면 에러
const helloworld2 = function(){
    console.log('hello world2!!')
}
helloworld2(); //hello world2!!

// 화살표 함수
// helloworld3(); 선언 전에 호출하면 에러
const helloworld3 = ()=>{
    console.log('hello world3!!!')
}
helloworld3();

// 함수에 인자(parameter) 전달 
function add(num1, num2){
    console.log(num1 + num2);
}
add(1,2) //3
console.log(add(1,1))

/*  return
    - 반환 값으로 함수 내부 코드의 '최종 결과값'을 가지고 있는 것
    - console.log 등으로 출력하는데 그치지 않고
      값을 저장하고 보관하기 위한 키워드
    - return을 만나면 함수 실행 중단
*/
const add1 = function(num1, num2){
    console.log('리턴 전에는 잘 실행돼요')
    return num1 + num2;
    console.log('리턴 이후에는 실행되지 않아요')
}
console.log(add1(3,5)) //8
const result1 = add1(3,5)
const result2 = add(3,2)
console.log(result1) //8
console.log(result2) //undefined

console.log('---------------')

const sayHello=function(name){
    return name;
}
console.log(sayHello('allie'))

const sayHello2=function(text, name){
    return `${text} ${name}`;
}
console.log(sayHello2('hi','allie'))

// 함수 표현식(sayHello3), 화살표 함수'
const sayHello3=(text,name)=>{
    return `${text} ${name}`;
}
console.log(sayHello3('hello1','allie'))

const sayHello4 =(text,name)=>{
    return text + name;
}
console.log(sayHello4('hello2','allie'))

