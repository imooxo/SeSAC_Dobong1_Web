import { useReducer, useState } from "react";
const reducer = (prevState, action) => {
    // action : (state를 어떻게 바꿀지에 대한) 요구
    // dispatch : action을 담아 reducer로 전달을 해줌
    console.log("dispatch가 호출되면 reducer 동작");
    console.log(action);

    switch(action.type){
        case "deposit":
            return prevState + action.payload;
        case "withdraw":
            return prevState - action.payload;
    }
};
export default function UseReducer(){
    const [number, setNumber] = useState(0);

    // 인자를 2개 받음 첫번째 인자는 리듀서, 두번쨰 인자는 스테이트의 초기값
    // const [스테이트, 디스패치] = useReducer(리듀서, 스테이트의 초기값);
    // reducer(리듀서): 실제로 스테이르를 바꿔주는 함수

    const [money, dispatch] = useReducer(reducer, 0);
    return(
        <>
        <h3>useReducer 사용</h3>
        <p>잔고: {money}원</p>
        <input
         type="number"
         value={number}
         onChange={(e)=>setNumber(Number(e.target.value))}
         step={1000}   
        />

        <button onClick={() => dispatch({ type:"deposit", payload: number })}>
            예금
        </button>
        <button onClick={() => dispatch({ type:"withdraw", payload:number })}>
            출금
        </button>
        </>
    )
}