import { useState, useCallback } from 'react';

function useFormValidation() {
  const [values, setValues] = useState({});
  const [errs, setErrs] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    if (target.validity.patternMismatch) {
      setErrs({ ...errs, [name]: target.title });
    } else {
      setErrs({ ...errs, [name]: target.validationMessage });
    }
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrs(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrs, setIsValid],
  );

  return { values, handleChange, errs, isValid, resetForm };
}

export default useFormValidation;