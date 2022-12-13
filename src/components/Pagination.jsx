import { Box, Chip, Typography } from '@mui/material/';
const Pagination = (props) => {
    const {data} = props,
    current = data.offset / 10 + 1,
    total = Math.ceil(data.total_count / data.count);
    return (
        <Box>
            <Typography>Pagina {isNaN(current) ? 0 : current} de { isNaN(total) ? 0 : total}</Typography>
            <Typography>Total de imagenes: {data.total_count}</Typography>
        </Box>
) }

export default Pagination;