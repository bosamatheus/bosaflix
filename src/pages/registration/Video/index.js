import React from 'react';
import { Link } from 'react-router-dom';
import TemplateDefault from '../../../components/TemplateDefault';

function RegistrationVideo() {
    return (
      <TemplateDefault>
        <h1>Cadastro de vídeo</h1>

        <Link to="/registration/category">
          Cadastrar categoria
        </Link>
      </TemplateDefault>
    );
}
  
export default RegistrationVideo;
