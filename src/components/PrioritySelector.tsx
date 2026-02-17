import { PRIORITYLIST } from "../enum/general";

const PrioritySelector = (props: PrioritySelectorProps) => {
    const { priority, setSelectedPriority } = props;

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