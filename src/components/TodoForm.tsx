const TodoForm = ({ input, setInput, handleSubmit }: { input: string; setInput: any ; handleSubmit: () => void }) => {
    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={input}
                placeholder="add to do task"
                className="todo-input"
            />
            <button type="submit" className="add-button">
                Add to Todo
            </button>
        </form>
    )
};

export default TodoForm;