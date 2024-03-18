import { useState } from "react";

const HandlerEx3 = () => {
    const [text, toggleText] = useState("안녕하세요");
    function toggleBtn(){
        if (text === "") {
            toggleText("안녕하세요");
        }else{
            toggleText("");
        }
    }
  return (
    <div>
        <button onClick={toggleBtn}>{`${text}` ? "사라져라" : "보여라"}</button>    
        <div>{text}</div>
    </div>
  );
};

export default HandlerEx3;