import {
    Card, 
    CardHeader, 
    CardContent, 
    Typography 
} from "@mui/material";

const About = (props) => {
    const {autor, colaboracion, fecha } = props.data
    return ( 
        <Card variant="outlined" sx={{ m: '1rem auto', maxWidth: 768 }}>
            <CardHeader title={ autor } />
            <CardContent>
                <Typography variant="subtitle1">{ colaboracion }</Typography>
                <Typography>{ fecha }</Typography>
            </CardContent>
        </Card>
) }

export default About;