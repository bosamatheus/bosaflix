import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        <Link to="/">
          <img className="Logo" src={Logo} alt="Bosaflix Logo"></img>
        </Link>
        <br />
        Desenvolvido por
        {' '}
        <a href="https://bosamatheus.github.io/">
          Matheus Bosa
        </a>
        .
      </p>
    </FooterBase>
  );
}

export default Footer;
