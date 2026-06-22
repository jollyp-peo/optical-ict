"use client";

import { createContext, useContext } from "react";

const NotificationContext =
  createContext();

export function NotificationProvider({
  children,
}) {
  const value = {
    notifications: [],
  };

  return (
    <NotificationContext.Provider
      value={value}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () =>
  useContext(NotificationContext);