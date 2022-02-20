const errors = {
  EMAIL: 'its not valid email',
  EMPTY: 'the field should not be empty',
  CHARACTERES_AMOUNT_INVALID: 'the field must have a  content min characters',
};

export const isEmail = (value) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};

export const isEmpty = (value) => {
  return value?.trim().length === 0;
};

export const isGreater = (value, amount) => {
  return value.trim().length >= amount;
};

export const emailValidation = (email) => {
  if (isEmpty(email)) return errors.EMPTY;
  if (!isEmail(email)) return errors.EMAIL;
  return null;
};

export const passwordValidation = (password) => {
  if (isEmpty(password)) return errors.EMPTY;
  if (!isGreater(password, 8)) return errors.CHARACTERES_AMOUNT_INVALID;
  return null;
};

export const basicValidation = (value) => {
  if (isEmpty(value)) return errors.EMPTY;
  if (!isGreater(value, 8)) return errors.CHARACTERES_AMOUNT_INVALID;
  return null;
};
