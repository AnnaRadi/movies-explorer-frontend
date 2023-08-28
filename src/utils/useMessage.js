import { useState } from "react";

export const useMessage = () => {
  const [message, setMessage] = useState(null);


  const showMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };


  return [message, showMessage];
};