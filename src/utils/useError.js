import { useState } from 'react';

export const useError = () => {
  const [errMessage, setErrMessage] = useState(null);

  const showError = (message) => {
    setErrMessage(message);
    setTimeout(() => {
        setErrMessage(null);
    }, 5000);
  };

  return [errMessage, showError];
};