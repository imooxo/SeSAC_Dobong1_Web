/* class : 오브젝트를 만들 수 있는 틀! */
//constructor()  생성자 함수

/*
    - 속성
        1) 만들어진 연도 year
        2) 집의 이름 name
        3) 창문의 갯수 window

    - 메소드
        1) 건물의 나이 출력 getAge()
        2) 창문의 개수 출력 getWindow()
*/

class House{ // class 생성
    constructor(year, name, window){
        this.name = name;
        this.year = year;
        this.window = window;
    }

    // 메소드 선언 /함수 이름 작성
    getAge(){
        console.log(`${this.name}은 건축한지 ${2024-this.year}년 퇬어요.`);
    }
    
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    }
}

//const h1 = {
//    name : 'old',
//    year : 1789,
//    window : 1,
//};

const house1 = new House(1789, 'old', 1);  // 위의 주석처리 된 코드와 같은 코드임
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, '자이', 10);
house2.getAge();
house2.getWindow();

console.log('==============상속==================')
/* 상속 */
// extends 키워드를 사용해서 상속
// House 클래스의 함수와 속성을 사용할 수 있음
// House << Apartment
class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        super(year, name, window);
        this.floor=floor;
        this.windowMaker = windowMaker;
    }

    getAptInfo(){
        return `${this.year}년에 지어진 ${this.name}.
        총 층수는 ${this.floor}. 창문의 갯수는 ${this.window}`;
    }

    /* overriding 오버라이딩 (메소드 재정의) */
    //(부모 클래스와 메소드를 똑같이 쓰고 싶지만
    // 내용은 다르게 만들고 싶을 떄 사용
    getWindow() {
        return `${this.name}의 창문은 ${this.windowMaker}에서 만들었고 ${this.window}개 입니다.`;        
    }

    // getAge() << 상속 받아서 사용 가능
}

// year, name, window, floor, windowMaker
const ap1 = new Apartment(2022, 'raemian', 19, 50, 'KCC');
console.log(ap1.getWindow()); // 오버라이딩 함수, 메소드 재정의
console.log('==================================')
console.log(ap1.getAptInfo()); // 새로운 메소드 정의
ap1.getAge(); // 부모 메소드 그대로 상속 받았음
console.log(ap1);

/* 실습1 - Shape 클래스 만들기 */
// Shape(직사각형)클래스의 속성: 가로와 세로
// Shape 클래스와 메소드 getArea() 넓이 반환하는 메소드(가로*세로)
    // let rec1 = new Shape(3,4);
    // console.log(rec1.getArea()); => 12가 나오는지 확인
console.log('================실습1=================')
class Shape {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width*this.height;
    }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea()); // 직사각형 넓이 12

/* 실습2 - 클래스 상속 */
// 1) Rectangle(직사각형) 클래스 만들기
    // shape 클래스 상속
    // 사각형의 넓이 구하는 메소드 getArea()
    // 직사각형의 대각선 길이 구하는 메소드 추가 (Math.sqrt() 이용)
// 2) Triangle(삼각형) 클래스 만들기
    // 넓이 반환하는 메소드 getArea()
// 3) Circle(원) 클래스 만들기
    // Shape 클래스를 상속
    // width, height 이외에 radius 생성자 추가
    // getArea() 메소드는 원의 넓이를 리턴 
console.log('================실습2(1)=================')
class Rectangle extends Shape {
    constructor(width, height){
        super(width, height);
    }
    getDiagonal(){
        return `${Math.sqrt((this.width)*(this.width) + (this.height)*(this.height))}`;
    } // 대각선 길이 구하는 메소드
}
let rec2 = new Rectangle(3,4);
console.log(rec2.getDiagonal()); // 5 / 대각선 길이

console.log('================실습2(2)=================')
class Triangle extends Shape{
    constructor(width, height) {
        super(width, height)
    }
    getArea(){
        return `${this.width * this.height / 2}`;
    }
}
let tri = new Triangle(3,4);
console.log(tri.getArea()); // 삼각형 넓이 6

console.log('================실습2(3)=================')
class Circle extends Shape {
    constructor(width, height, radius){
        super(width, height);
        this.radius = radius;
    }
    getArea() {
        return Number(`${this.radius * this.radius * 3.14}`); 
        //템플릿 리터널을 사용해서 문자열을 만들었으니 Number로 숫자로 반환해야지 오류 안뜸
    }
}
let cir = new Circle(3,4,5);
console.log(cir.getArea()); // 원의 넓이 78.5


