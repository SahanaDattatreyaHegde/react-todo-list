import type { Todo } from "../App";

const ToDoList = ({ todos }: { todos: Todo[] }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li >{todo.text}</li>
            ))}
        </ul>


    )
};

export default ToDoList;