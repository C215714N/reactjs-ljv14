const Search = (props) => {
    const {setSearch } = props
    return ( 
        <input type="search" onInput={ (e) => setSearch(e.target.value)} />
) }

export default Search;