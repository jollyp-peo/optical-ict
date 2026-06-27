"use client";

import { createContext, useContext, useState, useCallback } from "react";

export const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(null); // "REPAIR" | "SERVICE" | null

  const openBooking = useCallback((bookingMode) => {
    setMode(bookingMode);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setMode(null);
  }, []);

  const value = {
    isOpen,
    mode,
    openBooking,
    closeBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }

  return context;
}