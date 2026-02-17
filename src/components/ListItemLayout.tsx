import { useMemo } from "react"
import { Button } from "./Buttons/Button"
import ToDoList from "./ToDoList"

export const ListItemLayout = (props: ListItemLayoutProps) => {
    const { todos, handleToggle, handleDelete, filterBy } = props;

    const filteredTodos = useMemo(() => {
        return filterBy === 'all'
            ? todos
            : todos.filter(todo => todo.taskPriority === filterBy);
    }, [todos, filterBy]);

    return (
        <table style={{ border: '1px solid black', width: '100%', textAlign: 'center' }}>
            <tbody>
                {filteredTodos.map(todo => (
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