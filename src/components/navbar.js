import Icon from './icons';
function NavBar (props){
    return(
    <ul className={props.navType}>{ 
        props.links.map(link => <Icon text={link}/>)            
    }</ul>
) }
export default NavBar;