import HeaderMenu from "../components/Header";
import Container from "../lecture/Container";
import EventObj from "../lecture/EventObj";
import { Props1, Props2, Props3 } from "../lecture/Props";
import Text from "../lecture/Text";
import TodoList from "../lecture/TodoList";

export default function Lecture(){
    return (
        <>
        <HeaderMenu/>
        <h2>수업코드</h2>
        <Container>
            {/* <Props1 name="jade"/>
            <Props2 width="100px" height="100px" color="pink"/>
            <Props3 width={100} height={100} text="hello" color="yellow"/>
        <Text/>
        <EventObj/> */}
        <TodoList/>
        </Container>
        </>
    )
}