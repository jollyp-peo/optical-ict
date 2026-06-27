"use client";

import {
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

export const BookingContext =
  createContext(null);

export function BookingProvider({
  children,
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  const [
    selectedService,
    setSelectedService,
  ] = useState(null);

  const [step, setStep] =
    useState("form");

  const [
    bookingResult,
    setBookingResult,
  ] = useState(null);

  const openBooking =
    useCallback((service) => {
      setSelectedService(service);

      setBookingResult(null);

      setStep("form");

      setIsOpen(true);
    }, []);

  const showSuccess =
    useCallback((result) => {
      setBookingResult(result);

      setStep("success");
    }, []);

  const resetBooking =
    useCallback(() => {
      setBookingResult(null);

      setStep("form");
    }, []);

  const closeBooking =
    useCallback(() => {
      setIsOpen(false);

      setTimeout(() => {
        setSelectedService(null);

        setBookingResult(null);

        setStep("form");
      }, 250);
    }, []);

  const value = useMemo(
    () => ({
      isOpen,

      step,

      selectedService,

      bookingResult,

      openBooking,

      closeBooking,

      showSuccess,

      resetBooking,
    }),
    [
      isOpen,

      step,

      selectedService,

      bookingResult,

      openBooking,

      closeBooking,

      showSuccess,

      resetBooking,
    ]
  );

  return (
    <BookingContext.Provider
      value={value}
    >
      {children}
    </BookingContext.Provider>
  );
}