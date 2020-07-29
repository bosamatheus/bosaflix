import React from 'react';
import Logo from '../../assets/images/Logo.png';
import ButtonLink from './components/ButtonLink';
import Button from '../Button';

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Bosaflix Logo"></img>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;
