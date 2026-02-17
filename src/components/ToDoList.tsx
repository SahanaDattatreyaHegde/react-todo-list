import { COLORS } from "../enum/general";

const ToDoList = (props: ToDoListProps) => {
    const { todo, handleToggle } = props;

    return (
        <td style={{ padding: "20px", display: "flex", gap: "20px" }}>
            <input
                type="checkbox"
                checked={todo.isChecked || false}
                onChange={() => handleToggle(todo.id)}
            />
            <span style={{ marginLeft: "10px", textDecoration: todo.isChecked ? "line-through" : "none" }}>
                {todo.text}
            </span>
            <span>
                {todo.taskDate ? new Date(todo.taskDate).toLocaleDateString() : ""}
            </span>
            <span className="priority" style={{ color: COLORS[todo.taskPriority as keyof typeof COLORS] }}>
                {todo.taskPriority}
            </span>
        </td>
    )
};

export default ToDoList;