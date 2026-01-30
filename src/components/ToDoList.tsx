import type { Todo } from "../App";

const ToDoList = ({ todo, handleToggle }: { todo: Todo, handleToggle: (id: number) => void }) => {
    return (
        <td style={{ padding: "20px" }}>
            <input
                type="checkbox"
                checked={todo.isChecked || false}
                onChange={() => handleToggle(todo.id)}
            />
            <span style={{ marginLeft: "10px", textDecoration: todo.isChecked ? "line-through" : "none" }}>
                {todo.text}
            </span>
        </td>
    )
};

export default ToDoList;