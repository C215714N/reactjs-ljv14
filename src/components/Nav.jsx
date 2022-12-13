import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Nav = (props) => 
    <AppBar position="fixed">
        <Toolbar>
            <NavLink className="link" to="/about">Acerca de</NavLink>
            <NavLink className="link" to="/search">Buscar</NavLink>
        </Toolbar>
    </AppBar>

export default Nav;