import { Button } from "./Buttons/Button";
import PrioritySelector from "./PrioritySelector";

const TodoForm = ({ input, setInput, priority, setSelectedPriority, handleSubmit }: ToDoFormProps) => {
    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="add to do task"
                className="todo-input"
            />
            <PrioritySelector priority={priority} setSelectedPriority={setSelectedPriority}>

            </PrioritySelector>
            <Button buttonLabel="Add to Todo" className="add-button" />
        </form>
    )
};

export default TodoForm;