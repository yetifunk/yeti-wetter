export default function ToDoItem = ({ item, idx, clickHandler }) {
    return (
        <li>
            <span className={item.completed && 'complete'}>{item.title}</span>
            {item.completed ? (
                <button onClick={() => clickHandler(item.title)}>Remove</button>
            ) : (
                <button onClick={() => clickHandler(item.title)}>Complete</button>
            )}
        </li>
    )
}