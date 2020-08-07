import { useState } from 'react';

function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValue(name, value);
  }

  function clearForm() {
    setValues(defaultValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
