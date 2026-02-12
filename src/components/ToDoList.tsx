import type { Todo } from "../App";

interface ToDoListProps {
    todo: Todo,
    handleToggle: (id: number) => void
}

const colors = {
    low: "green",
    medium: "orange",
    high: "red"
}

const ToDoList = ({ todo, handleToggle }: ToDoListProps) => {
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
            <span className="priority" style={{ color: colors[todo.taskPriority as keyof typeof colors] }}>
                {todo.taskPriority}
            </span>
        </td>
    )
};

export default ToDoList;