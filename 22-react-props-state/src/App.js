import { ClassProps, ClassProps2 } from "./components/ClassProps";
import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";

function App() {
  return (
    <div className="App">
      <h1>hello, props</h1>
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

    </div>
  );
}

export default App;