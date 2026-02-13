interface Todo {
    id: number;
    text: string;
    isChecked: boolean;
    taskPriority: string;
    taskDate: Date;
}

interface ToDoFormProps {
    input: string,
    setInput: any,
    priority: string,
    setSelectedPriority: any,
    handleSubmit: (e: React.FormEvent) => void
}

interface FilterByPriorityProps {
    filterValue: string,
    setFilter: any
}

interface ListItemLayoutProps {
    todos: Todo[],
    handleToggle: (id: number) => void,
    handleDelete: (id: number) => void,
    filterBy: string
}

interface ToDoListProps {
    todo: Todo,
    handleToggle: (id: number) => void
}

interface ButtonProps {
    buttonLabel: string,
    className?: string,
    clickHandler?: () => void
}

interface PrioritySelectorProps {
    priority: string,
    setSelectedPriority: any
}