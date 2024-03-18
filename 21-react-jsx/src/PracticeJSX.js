// JSX 실습
// 함수형 컴포넌트로 진행
import './PracticeJSX.css';
export function PracticeJSX() {
    /* 실습1_name과 animal이라는 변수를 선언 */
    let name = "백금";
    let animal = "강아지";

    return(
        <div>
            <h2>제가 반려{animal}를 키운다면 이름은 {name}으로 지어줄거예요</h2>
            <h2>제 반려 동물의 이름은 {name}입니다.</h2>
            <h2>{name}이는 {animal}입니다.</h2>
        </div>
    );
}

/* 실습2_삼황 연산자를 사용해서 3+5 === 8이란 수식을 맞으면 "정답입니다." 
틀리면 "오답입니다!"를 출력 */
export function PracticeJSX2() {
    return <div>{3 + 5 === 8 ? "정답입니다" : "오답입니다!"}</div>
};


/* 실습3_a라는 변수와 b라는 변수를 만들고 각각에 숫자(정수)를 넣어주세요, 
&&연산자를 이용하여 a가 b보다 크다면 "a가 b보다 큽니다"를 출력하도록 해주세요. */
const a = 5;
const b = 3;
export function PracticeJSX3(){
    return(
        <div>{a > b &&  "a가 b보다 큽니다"}</div>
    )
};

/* 실습4_App.css 를 만들어서 아래와 같이 적용되도록, css를 작성해주세요., 
App.js 컴포넌트에 title 이라는 변수를 만들고 원하는 제목을 넣어주세요. Ex) Hello World,
div, input 태그를 이용하여 다음 결과물처럼 만들어주세요. */
export function PracticeJSX4(){
    return(
        <div className="container">
            <h1 className="title">Hello World</h1>
            <div>아이디: <input/> </div> <br/>
            <div>비밀번호: <input/> </div>
        </div>
    )
};
