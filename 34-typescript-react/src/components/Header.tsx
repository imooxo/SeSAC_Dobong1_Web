import { Link } from "react-router-dom";

export default function HeaderMenu(){
    return(
        <>
        <Link to={"/"}>홈으로</Link> <br/>
        <Link to={"/lecture"}>수업 코드</Link> <br/>
        <Link to={"/practice"}>실습 코드</Link> <br/>
        </>
    )
}