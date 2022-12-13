import { useState } from "react";
// Material-UI (Card)
import {
    Card, 
    CardMedia, 
    CardContent, 
    Typography
} from '@mui/material/';

const Image = (props) => {
    const { data } = props
    const [select, setSelect] = useState(false);
    const imgSRC = select ? data.images.original.url : data.images.downsized_still.url
    return (
        <Card sx={{flex: '1 0 min(100%, 240px)', m: 1}} variant="outlined">
            <CardMedia
                component="img"
                image={ imgSRC } 
                alt={data.title} 
                onClick={ () => setSelect(!select) }/>
            <CardContent>
                <Typography variant="h6">{data.title}</Typography>
                <Typography variant="caption">
                    <strong>Author:</strong> 
                    {data.username}
                </Typography>
            </CardContent>
        </Card>
) }

export default Image;