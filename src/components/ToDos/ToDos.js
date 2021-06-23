import ToDoItem from "../ToDoItem/ToDoItem";

export default function ToDos = ({ todos, clickHandler }) {
    if (!todos.length) {
        return <p>No Items</p>;
    }
    return (
        <ul>
            {todos.map((item, idx) => {
                return (
                    <ToDoItem
                        item={item}
                        idx={idx}
                        clickHandler={clickHandler}
                        key={`${idx}-${item.title}`}
                    />
                )
            })}
        </ul>
    )
}