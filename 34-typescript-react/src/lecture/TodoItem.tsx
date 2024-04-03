interface Todo {
    id: number;
    text: string;
    done: boolean;
}

interface Props {
    todo: Todo;
}

export default function TodoItem({todo}: Props){
    return(
        <li>
            <label>
                <input type="checkbox"/>
                {todo.text}
            </label>
        </li>
    )
}