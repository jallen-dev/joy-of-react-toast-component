import React, { createContext, useState } from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast({ message, variant }) {
    const id = Math.random();
    const newToast = { message, variant, id };
    const nextToasts = [...toasts, newToast];
    setToasts(nextToasts);
  }

  function handleDismiss(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  useEscapeKey(() => setToasts([]));

  return (
    <ToastContext.Provider value={{ toasts, addToast, handleDismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
