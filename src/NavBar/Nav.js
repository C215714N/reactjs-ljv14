import { NavLink } from 'react-router-dom';

const Nav = (props) => 
    <ul>
        { props.links.map( link => 
            <li key={link.id}><NavLink to={link.to}>{link.text}</NavLink></li> 
        ) }
    </ul>
export default Nav;