const About = (props) => {
    const {autor, colaboracion, fecha } = props.data
    return ( 
        <>
            <h2>{autor}</h2>
            <p>
                {colaboracion}
            </p>
            <footer>
                <address>
                    
                </address>
                <p>{fecha}</p>
            </footer>
        </>
    );
}

export default About;