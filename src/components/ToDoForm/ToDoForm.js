export default function ToDoForm ({ handleSubmit, handleChange, newToDo }) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">New Item</label>
            <input
                type="text"
                id="title"
                name="title"
                value={newToDo.title}
                onChange={handleChange}
            />
        </form>
    )
}