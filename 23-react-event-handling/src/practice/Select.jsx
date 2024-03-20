export default function select(props){
    //구조분해할당
    const { setData } = props;
    // const [data, setData] = useState({
    //     fruit: "apple",
    //     background: "black",
    //     color: "white",
    //     content: "text",
    // });
    return (
        <>
          과일 :
          <select onChange={(e) => {
            //console.log(e.currentTarget);
            console.log(e.target.value);
            setData((prevState)=>{
                return {...prevState, fruit:e.target.value}; 
            })
          }}>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="peach">포도</option>
            <option value="grape">복숭아</option>
          </select>
          
          배경색 :
          <select onChange={(e) => {
            setData((prevState)=>{
                return {...prevState, background:e.target.value}; 
            })
          }}>
            <option value="black">검정</option>
            <option value="white">하양</option>
            <option value="red">빨강</option>
            <option value="orange">주황</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <option value="blue">파랑</option>
            <option value="purple">보라</option>
            <option value="pink">분홍</option>
          </select>

          글자색 :
          <select onChange={(e) => {
            setData((prevState)=>{
                return {...prevState, color:e.target.value}; 
            })
          }}>
            <option value="black">검정</option>
            <option value="white">하양</option>
            <option value="red">빨강</option>
            <option value="orange">주황</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <option value="blue">파랑</option>
            <option value="purple">보라</option>
            <option value="pink">분홍</option>
          </select>
        </>
    );
}