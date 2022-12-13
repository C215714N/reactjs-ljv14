import Image from './Image';
import {
    Grid, 
    Typography, 
    ThemeProvider, 
    createTheme 
} from '@mui/material/';

const Results = (props) => {
    const { data, word } = props 
    const darkTheme = createTheme({
        palette: { mode: 'dark' }
    });
    return(
        <ThemeProvider theme={darkTheme}>
            <Typography variant="h4">
                { word.length >= 3 ? 
                'Resultados de ' + word : 
                'Gifs Mas Populares' }
            </Typography>
            <Grid container>
            { data.length >= 1 ? data.map(image =>
                <Image key={ image.id } data={ image } /> ) : '' }
            </Grid>
        </ThemeProvider>
) }

export default Results;