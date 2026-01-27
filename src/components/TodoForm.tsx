const TodoForm = ({ input, setInput, handleSubmit }: { input: string; setInput: any ; handleSubmit: (e: React.FormEvent) => void }) => {
    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
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