import CheckBox from "./Checkbox";

export default function List({ items, changeStatus }) {
    return (
        <ul>
            {items.map((item) => {
                return (
                    <li key={item.id}>
                        <label>
                            <CheckBox
                                status={item.status}
                                onChange={() => changeStatus(item)}
                            />
                            {item.label}
                        </label>
                        <List items={item.items} changeStatus={changeStatus} />
                    </li>
                );
            })}
        </ul>
    );
}
