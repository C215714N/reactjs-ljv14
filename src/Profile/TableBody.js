import { useState } from "react";

const TableBody = (props) =>{
    const {users, titles, action} = props
    const [userId, setUserId] = useState(0)
    return (
        <tbody>
            { users.map((object,i) => 
            <tr key={"row_" + i}> { titles.map( (key,i) => <td key={"td_" + i}>{ action(object, key) }</td> ) }
            <td><button onClick={() => setUserId(object.id)}>ver Perfil</button></td>
            </tr> ) } 
        </tbody>
    )
}
export default TableBody;