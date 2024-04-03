function print(a: number, b:number, c:number): void {
    console.log(a);
    console.log(b);
    console.log(c);
}
print(1,2,3);
// print(1,2,3,4) // err
// print(1,2) // err

function print2(a: number, b: number, c?:number): void{
    console.log(a);
    console.log(b);
    console.log(c);
}
print2(1,2,3);
print2(1,2)


// void type
function sayHello(): void{
    console.log("hello");
}

sayHello();

// string return
function concatStr(a: string, b: number): string {
    return a + b;
}
console.log(concatStr("안녕", 2)); // 안녕2

// 원의 넓이를 구하는 함수
function circleArea(r: number): number{
    return r * r * Math.PI;
}
console.log(circleArea(5)); // 78.53981633974483


// 함수 표현식으로
const triangleArea = (w:number, h:number): number => (w * h) / 2;
console.log("삼각형의 넓이", triangleArea(2, 4)); // 삼각형의 넓이 4

interface Greet {
    name: string;
    hi(): string;
    bye(a: number): string;
}

const jh: Greet = {
    name: "jade",
    hi(){
        return "안녕 내 이름은" + this.name + "야";
    },
    bye(a: number){
        return `작별인사를 ${a}번 했습니다.`;
    },
};

console.log(jh.hi()); // 안녕 내 이름은jade야
console.log(jh.bye(5)); // 작별인사를 5번 했습니다.


// never type
// 항상 함수의 끝에 절대 도달하지 않는 경우에만 never 타입 할당 가능
function goingOn(a:number): never {
    while (true){
        console.log("끝나지 않는 함수입니다.");
        // if (a > 10)break; // 특정 조건일 때 빠져나올 수 있음 >> never type x
    }
}
// goingOn();


// 숫자가 오면 더하기
// 문자가 오면 문자 이어쥑
/* function addSomting(x: string | number, y:string | number): string | number {
    return x + y;
} */

// 오버로딩, 오버라이딩
/*
    - 오버라이딩: 클래스에서 상속을 했을 때, 메소드 재정의
    - 오버로딩: 함수에서 매개변수의 개수, 타입 함수의 타입이 다를 때
                같은 이름으로 매개변수의 종류와 개수를 다르게 선언할 수 있음.
                함수의 이름을 똑같이 사용하기 때문에 비슷한 기능일 때만 사용할 수 있음 
*/
// 오버로딩
function addSomting(x: string, y: string): string;
function addSomting(x: number, y: number): number;
function addSomting(x:any , y: any){
    return x + y;
}

addSomting(1, 1); // 2
addSomting("안녕","하세요"); // "안녕하세요"
console.log(addSomting(1, 1)); // 2
console.log(addSomting("안녕","하세요")); // "안녕하세요"

// addSomthing(1,"2"); // err

// 실습문제1
function sum1(x: number, y:number):void{
    console.log(x + y);
}
sum1(5,11);


// 실습문제2 (전개연산자 이용)
function sum2 (...num: number[]):number{
    let result: number = 0;
    for(let i of num){
        result += i;
    }
    return result;
}
console.log(sum2(1,2,3,4,10)); // 20
console.log(sum2(1,2,3)); // 6


// 실습문제2 해설
function sum3 (...a: number[]){
    //  console.log(a) // [1,2,3,4,5]
    let sum = 0
    a.forEach((number) => (sum += number));
    return sum;
}
sum3(1,2,3,4,5);
console.log(sum3(1,2,3,4,5)); // 15