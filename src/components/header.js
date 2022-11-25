function Header(props) {
    return ( 
        <header>
            <img 
                src={props.src} 
                className={props.className} />
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </header>
    )
}

export default Header;