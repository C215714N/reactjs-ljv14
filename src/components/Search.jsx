import {TextField} from '@mui/material';

const Search = (props) => {
    const {setSearch } = props
    return ( 
        <TextField 
            type="search" 
            onInput={ (e) => setSearch(e.target.value)} />
) }

export default Search;