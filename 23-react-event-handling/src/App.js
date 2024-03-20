import Counter from "./Counter";
import SyntheticEvent from "./SyntheticEvent";
import HandlerEx from "./ex/HandlerEx";
import HandlerEx2 from "./ex/HandlerEx2";
import HandlerEx3 from "./ex/HandlerEx3";
import EntirePractice from "./practice/EntirePractice";


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
      <h2 style={{textAlign:"center"}}>핸들링 실습4</h2>
      <EntirePractice/>
    </div>
  );
}

export default App;
