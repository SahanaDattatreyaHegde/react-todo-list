import { Button } from "./Buttons/Button";

const TodoForm = ({ input, setInput, handleSubmit }: { input: string; setInput: any; handleSubmit: (e: React.FormEvent) => void }) => {
    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="add to do task"
                className="todo-input"
            />
            <Button buttonLabel="Add to Todo" className="add-button" />
        </form>
    )
};

export default TodoForm;