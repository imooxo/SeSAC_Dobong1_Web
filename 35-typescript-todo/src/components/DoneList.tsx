import { useSelector } from "react-redux";
import { RootState } from "../interface";

export default function DoneList() {
  const lists = useSelector((state: RootState) => state.todo.list);
  const doneList = lists.filter((list) => {
    return list.done === true;
  });
  return (
    <section className="DoneList">
      <h2>Done List</h2>
      <ul>
        {doneList.map((el) => {
          return (
            <li key={el.id}>
              <span>{el.text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}