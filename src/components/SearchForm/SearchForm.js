export default function SearchForm ({ handleSubmit, handleChange, searchString }) {
    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input 
                placeholder="Search" 
                type="text" 
                name="searchString" 
                required onChange={handleChange} 
                value={searchString} 
            />
            <button type="submit">Search</button>
        </form>
    )
}