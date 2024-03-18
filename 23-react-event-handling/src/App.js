import Counter from "./Counter";
import SyntheticEvent from "./SyntheticEvent";
import HandlerEx from "./ex/HandlerEx";
import HandlerEx2 from "./ex/HandlerEx2";
import HandlerEx3 from "./ex/HandlerEx3";


function App() {
  return (
    <div className="App">
      <h2>합성 이벤트</h2>
      <SyntheticEvent/>
      <Counter/>
      <hr/>

      <h2>핸들링 실습1</h2>
      <HandlerEx/>
      <hr/>
      <h2>핸들링 실습2</h2>
      <HandlerEx2/>
      <hr/>
      <h2>핸들링 실습3</h2>
      <HandlerEx3/>
      <hr/>
    </div>
  );
}

export default App;
