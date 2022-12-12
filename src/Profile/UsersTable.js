import TableHead from  './TableHead.js';
import TableBody from './TableBody.js';
function UsersTable(props) {
    const getTitle = (object) => Object.keys(object).map( key => key )
    let titles = getTitle(props.users[0]);
    const renderChilds = (object, key) => {
        let data, titles;
        if (String(object[key]) === '[object Object]'){
            titles = getTitle(object[key]);
            data = <ul>
                { titles.map( (property,i) => 
                <li key={"li_"+i}>
                    <strong>{property}</strong> { 
                        String(object[key][property]) === '[object Object]' ?
                        renderChilds(object[key], property) : object[key][property]
                } </li> ) }
            </ul>
        }
        else {
            data = object[key]
        }
        return data
    }

    return ( 
        <table className="table table-striped table-dark">
            <TableHead titles={ titles }/>
            <TableBody 
                titles={ titles } 
                users={props.users} 
                action={ renderChilds }/>
        </table>
    );
}

export default UsersTable;