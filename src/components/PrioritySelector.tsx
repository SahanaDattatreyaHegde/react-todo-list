export const PRIORITYLIST = ["low", "medium", "high"];

const PrioritySelector = ({ priority, setSelectedPriority }: PrioritySelectorProps) => {

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