import logo from '../logo.svg'
import {useState} from 'react'
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    const [menuState, setMenuState] = useState(false);
    return (
    <nav className='navbar navbar-dark bg-dark bg-gradient navbar-expand-md | py-0 px-3 sticky-top'>
        <a className='navbar-brand col-sm-2'>
            <img className='w-100 App-logo' src={logo} />
        </a>
        <button className='navbar-toggler navbar-toggler-icon border-0'
            onClick={() => setMenuState(!menuState)}></button>
        <ul className={'navbar-nav pb-2 navbar-collapse ' + ( menuState ? 'collapse' : '' ) }>
        { props.links.map( link => 
            <li key={link.id} className="nav-item"><NavLink className="nav-link" to={link.to}>{link.text}</NavLink></li> 
        ) }
        </ul>
    </nav>
    ) }
export default Nav;