const Pagination = (props) => {
    const {data} = props,
    current = data.offset / 10 + 1,
    total = Math.ceil(data.total_count / data.count);
    return (  
    <footer>
        <ul>
            <li>Pagina {isNaN(current) ? 0 : current} de { isNaN(total) ? 0 : total}</li>
            <li>Total de imagenes: {data.total_count}</li>
        </ul>
    </footer>
) }

export default Pagination;