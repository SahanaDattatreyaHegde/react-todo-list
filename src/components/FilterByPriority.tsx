import { PRIORITYLIST } from "./PrioritySelector";

const FilterByPriority = ({ filterValue, setFilter }: FilterByPriorityProps) => {
    return (
        <div>
            <p>Filter By priority</p>
            <select name="filter"
                value={filterValue}
                onChange={e => setFilter(e.target.value)}
            >
                <option value={"all"}>{"all"}</option>

                {PRIORITYLIST.map(priority => (
                    <option value={priority}>{priority}</option>
                ))};
            </select>
        </div>
    )
}

export default FilterByPriority;