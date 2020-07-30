import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Bosaflix Logo"></img>
            </Link>
            <Button as={Link} className="ButtonLink" to="/registration/video">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;
