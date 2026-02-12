interface PrioritySelectorProps {
    priority: string,
    setSelectedPriority: any
}

const PrioritySelector = ({ priority, setSelectedPriority }: PrioritySelectorProps) => {
    const PRIORITYLIST = ["low", "medium", "high"];

    return (

        <select name="selectPriority"
            value={priority}
            onChange={e => setSelectedPriority(e.target.value)}
        >
            {PRIORITYLIST.map(priority => (
                <option value={priority}>{priority}</option>
            ))};
        </select>
    )
}

export default PrioritySelector;