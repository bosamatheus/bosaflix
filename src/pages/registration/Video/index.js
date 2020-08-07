import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TemplateDefault from '../../../components/TemplateDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

function RegistrationVideo() {
  const history = useHistory();
  const { values, handleChange } = useForm({
    title: 'Dedo de la Chica',
    url: 'https://www.youtube.com/watch?v=UakUv3qy3Y8',
    category: 'Pesadelo na Cozinha',
  });
  const [videos, setVideos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setVideos([
      ...videos,
      values,
    ]);

    // eslint-disable-next-line no-alert
    alert('Vídeo cadastrado com sucesso!');
    history.push('/');
  }

  return (
    <TemplateDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/registration/category">
        Cadastrar categoria
      </Link>
    </TemplateDefault>
  );
}

export default RegistrationVideo;
