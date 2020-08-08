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
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    categoriesRepository
      .create({
        ...values,
      })
      .then((categoryFromServer) => {
        setCategories([...categories, categoryFromServer]);
        clearForm();

        // eslint-disable-next-line no-alert
        alert('Categoria cadastrada com sucesso.');
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Ocorreu um erro ao cadastrar a categoria. Tente novamente.');
      });
  }

  return (
    <TemplateDefault>
      <h1>Cadastro de categoria</h1>

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

      <br />
      <Link to="/registration/video">
        <Button>
          Voltar
        </Button>
      </Link>
      <br />
      <br />
    </TemplateDefault>
  );
}

export default RegistrationCategory;
