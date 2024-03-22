import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunc";
import { RefClass, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunction";

function App() {
    return (
        <div className="App">
            {/* <h1>ref</h1>
            <RefClass/>
            <RefClass2/>
            <RefFunc1/>
            <RefFunc2/> */}

            <h1>life cycle</h1>
            {/* <LifeCycleClass/> */}
            <LifeCycleFunc/>
        </div>
    );
}

export default App;