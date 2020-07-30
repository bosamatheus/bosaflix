import React from 'react';
import { Link } from 'react-router-dom';
import TemplateDefault from '../../../components/TemplateDefault';

function RegistrationCategory() {
    return (
      <TemplateDefault>
        <h1>Cadastro de categoria</h1>

        <form>
          <label>
            Nome da Categoria:
            <input
              type="text"
            />
          </label>

          <button>
            Cadastrar
          </button>
        </form>

        <Link to="/">
          Ir para home
        </Link>
      </TemplateDefault>
    );
}

export default RegistrationCategory;
