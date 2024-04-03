function printSome<T>(x:T, y:T): T{
    console.log(x);
    console.log(y);
    return y;
}
printSome<number>(1,2);
printSome<string>("hi", "hello");


function printSome2<T, K>(x: T, y: K): void{
    console.log(x);
    console.log(y);
}
printSome2<number, string>(1, "안녕하세요");


function arrLength(arr: any[]){
    return arr.length;
}

function getValue1(value: any): any{
    return value;
}


// generic으로 만들어보기
function arrLength2<T>(arr: T[]): number {
    return arr.length;
}

function getValue2<T>(value: T): T{
    return value;
}
console.log(arrLength2<number>([1,2,3,4,5,6,7,8])); // 8
console.log(getValue2<number[]>([1,2,3,4,5,6,7,8])); // [ 1,2,3,4,5,6,7,8]


// 실습문제 (제네릭)
/* 배열과 인텍스 번호를 매개변수로 받고 Arr[index]에 대한 요소를 리턴하는 함수 만들기 함수의 리턴 타입까지 작성, 
    첫번째 인자로 들어간 배열의 길이보다 큰 index 수 (두번째 인자)가 전달된다면 return false 시키기 */
// false값이 나와야하니 boolean을 사용했다 헷갈리지 말자
function arrElement<T>(arr: T[], index:number):T|boolean{
    if(index >= arr.length){
        return false;
    }
    return arr[index];
}
console.log(arrElement<string>(["a"],1)); // false

// ##### interface & generic ######
interface Phone<T> {
    company : string;
    createAt: Date;
    option: T;
}

// T 타입으로 string을 사용
const iphone15: Phone<string> = {
    company : "apple",
    createAt: new Date("2023-10-13"),
    option: "black",
};

// T 타입으로 객체타입을 사용
type iphoneOption = {
    color: string;
    storage: number;
};

const iphone16: Phone<iphoneOption> = {
    company : "apple",
    createAt: new Date("2024-10-06"),
    option: {
        color: "black",
        storage: 256,
    },
};
console.log("=============");
console.log(iphone15); // {company: 'apple', createAt: 2023-10-13T00:00:00.000Z, option: 'black'}
console.log(iphone16); // {company: 'apple', createAt: 2024-10-06T00:00:00.000Z, option: { color: 'black', storage: 256 } }


// 타임스크립트는 초기화된 값을 바탕으로 타입을 자동추론함
let aa = 1;
let bb = "string";
let cc = true;

// aa = "안녕하세요"; // 불가능(aa가 number형으로 자동추론됨)