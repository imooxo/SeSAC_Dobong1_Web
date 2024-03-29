import { useState } from "react";

const HandlerEx = () => {
    const [text, setText] = useState("Hello World");

    const changeText = () => {
        setText("Goodbye World");
    };
    return (
        <div>
            <h1>{text}</h1>
            <button onClick={changeText}>클릭</button>
        </div>
    );
};

export default HandlerEx;

