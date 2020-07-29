import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
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
