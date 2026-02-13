import { useMemo } from "react"
import type { Todo } from "../App"
import { Button } from "./Buttons/Button"
import ToDoList from "./ToDoList"

interface ListItemLayoutProps {
    todos: Todo[],
    handleToggle: (id: number) => void,
    handleDelete: (id: number) => void,
    filterBy: string
}

export const ListItemLayout = ({ todos, handleToggle, handleDelete, filterBy }: ListItemLayoutProps) => {

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