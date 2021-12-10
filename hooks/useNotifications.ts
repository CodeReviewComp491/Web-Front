import React from 'react';
import { store } from "react-notifications-component";

declare type TypeNotification = "danger" | "success" | "info" | "default" | "warning";

interface NotificationsFunctions {
  addNotifications: (type: TypeNotification, jsx: JSX.Element) => void;
}

const useNotifications = (): NotificationsFunctions => {
  const addNotifications = (type: TypeNotification, jsx: JSX.Element): void => {
    store.addNotification({
      message: jsx,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", 'animate__fadeInRight'],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: { duration: 3000 },
    });
  }

  return {
    addNotifications,
  }
}

export default useNotifications;