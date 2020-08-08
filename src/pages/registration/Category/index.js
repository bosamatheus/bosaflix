import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplateDefault from '../../../components/TemplateDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

function RegistrationCategory() {
  const defaultValues = {
    title: '',
    description: '',
    color: '#000000',
  };
  const { values, handleChange, clearForm } = useForm(defaultValues);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepository.getAll()
      .then((categoriesFromServer) => {
        setCategories([
          ...categoriesFromServer,
        ]);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    categoriesRepository.create({
      title: values.title,
      description: values.description,
      color: values.color,
    })
      .then((categoryFromServer) => {
        // eslint-disable-next-line no-console
        console.log('categoryFromServer', categoryFromServer);
        // eslint-disable-next-line no-alert
        alert('Categoria cadastrada com sucesso!');
        clearForm();
      });

    clearForm();
  }

  return (
    <TemplateDefault>
      <h1>
        Cadastro de categoria:
        {' '}
        {values.title}
      </h1>

      <form style={{ backgroundColor: values.color }} onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.title}`}>
            {category.title}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </TemplateDefault>
  );
}

export default RegistrationCategory;
