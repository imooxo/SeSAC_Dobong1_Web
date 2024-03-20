import { ClassProps, ClassProps2 } from "./components/ClassProps";
import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";

import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";

import PracticeProps from "./practice/PracticeProps";
import PracticeProps2 from "./practice/PracticeProps2";
import PracticeProps3 from "./practice/PracticeProps3";


import PracticeState from "./practice/PracticeState";
import PororoObj from "./practice/PororoObj";
import PropsMap from "./practice/PropsMap";

function App() {
  const dataArr = [
    {name:"peach", number:5, price:5000},
    {name:"banana", number:1, price:3000},
    {name:"apple", number:10, price:7000},
    {name:"grape", number:2, price:8500},

  ]
  return (
    <div className="App">
      {/*<h1>hello, props</h1>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치" />
      <ClassProps2 
      name="포비" 
      color="beige" 
      nickname="곰" 
      //bgColor="black" 
      />
      <FunctionProps name="사과" number={5} price={1000}/>
      <FunctionProps2 price={50000}/>
      <FunctionProps2 price={10000} name="딸기">
        여기가 children props라고 합니다.
        <section style = {{backgroundColor: "yellow"}}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2>

      <h1>hello, state</h1>
      <ClassState/>
      <FunctionState/>

      <h1>Props 실습</h1>
      <PracticeProps/>
      <PracticeProps2 title="별을 따라" author="엄경희" price="13,500원" type="시집"/>
      <PracticeProps3/>

      
      <h1>State 실습(함수형 컴포넌트)</h1>
      <PracticeState/>
  <PororoObj/> */}

      <h1>map과 filter 사용</h1>
      <PropsMap arr = {dataArr}/>      <PropsMap arr = {dataArr}/>


    </div>
  );

}

export default App;