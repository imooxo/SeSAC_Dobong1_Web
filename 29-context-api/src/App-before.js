import { ThemeContext } from "./contexts/ThemeContext";
import Box from "./components/Box";
import { AgeContext } from "./contexts/AgeContext";
import { UserContext } from "./contexts/UserContext";
import Profile from "./components/Profile";
import { useState } from "react";


function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(20);
  return (
    <div className="App">
      <h1>상태관리1 React Context-api</h1>

      {/* state가 아닌 값을 context에 저장 */}
      <ThemeContext.Provider value={"dark"}>
        <Box/>
      </ThemeContext.Provider>

      {/* state 저장해보기 */}
      <AgeContext.Provider value = {{age, setAge}}>
        <UserContext.Provider value = {{name, setName}}>
          <Profile/>
        </UserContext.Provider>
      </AgeContext.Provider>
      <Profile/>
    </div>
  );
}

export default App;
