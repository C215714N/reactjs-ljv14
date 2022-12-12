const TableHead = (props) => 
    <thead>
        <tr>
            { props.titles.map( (h,i) => <th key={"h_" + i}>{h}</th>) }
            <td>Actions</td>
        </tr>
    </thead>
export default TableHead;