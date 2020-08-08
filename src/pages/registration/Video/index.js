import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TemplateDefault from '../../../components/TemplateDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function RegistrationVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { values, handleChange } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoriesRepository.getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const categoryFound = categories.find((category) => {
      return category.title === values.categories;
    });

    videosRepository.create({
      categoryId: categoryFound.id,
      title: values.title,
      url: values.url,
    })
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Vídeo cadastrado com sucesso!');
        history.push('/');
      });
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
          suggestions={categoryTitles}
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
