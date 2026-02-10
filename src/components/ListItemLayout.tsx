import type { Todo } from "../App"
import { Button } from "./Buttons/Button"
import ToDoList from "./ToDoList"

interface ListItemLayoutProps {
    todos: Todo[],
    handleToggle: (id: number) => void,
    handleDelete: (id: number) => void
}

export const ListItemLayout = ({ todos, handleToggle, handleDelete }: ListItemLayoutProps) => {
    return (
        <table style={{ border: '1px solid black', width: '100%', textAlign: 'center' }}>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.id}>
                        <ToDoList todo={todo} handleToggle={(id) => { handleToggle(id) }} />
                        <td>
                            <Button buttonLabel="Delete" clickHandler={() => { handleDelete(todo.id) }}></Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}