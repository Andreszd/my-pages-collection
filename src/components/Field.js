import { useContext } from 'react';
import { FormContext } from './Form';

export default function Field({
  type,
  className,
  placeholder,
  validate,
  name,
}) {
  const { setField, addError, removeError } = useContext(FormContext);

  const handleChange = (e) => {
    setField(e.target.name, e.target.value);
  };

  const handleFocus = (e) => {
    const error = validate(e.target.value);
    if (error) {
      addError(e.target.name, error);
    } else {
      removeError(e.target.name);
    }
  };

  return (
    <input
      name={name}
      onChange={handleChange}
      onBlur={handleFocus}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
}
