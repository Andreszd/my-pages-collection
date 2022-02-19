import { useState, createContext } from 'react';
export const FormContext = createContext();

export default function Form({ initialValues, className, onSubmit, children }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (errors !== null && checkFields()) {
      onSubmit(values);
    }
  };

  const checkFields = () => {
    const values = Object.values(errors);
    return values.every((value) => value === null);
  };

  const setField = (name, value) => {
    if (name in values) {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const addError = (name, error) => {
    if (name in values) {
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const removeError = (name) => {
    if (name in values) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  return (
    <FormContext.Provider value={{ addError, setField, removeError }}>
      <form onSubmit={handleSubmit} className={className}>
        {children(errors)}
      </form>
    </FormContext.Provider>
  );
}
