import type { Todo } from "../App";
import { Button } from "./Buttons/Button";

const ToDoList = ({ todos, handleToggle }: { todos: Todo[], handleToggle: (id: number) => void }) => {
    return (
        <table style={{ border: '1px solid black', width: '100%', textAlign: 'center' }}>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.id}>
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
                        <Button buttonLabel="Delete"></Button>
                    </tr>
                ))}

            </tbody>
        </table>
    )
};

export default ToDoList;