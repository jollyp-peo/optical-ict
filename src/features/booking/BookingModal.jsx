"use client";

import Modal from "@/components/ui/Modal";

import BookingForm from "./BookingForm";
import BookingSuccess from "./BookingSuccess";

import useBooking from "./hooks/useBooking";

export default function BookingModal() {
  const {
    isOpen,
    step,
    selectedService,
    bookingResult,
    closeBooking,
    showSuccess,
    resetBooking,
  } = useBooking();

  if (!selectedService) {
    return null;
  }

  return (
    <Modal
      open={isOpen}
      onClose={closeBooking}
      title={
        step === "form"
          ? selectedService.title
          : null
      }
      description={
        step === "form"
          ? "Complete the form below and we'll contact you shortly."
          : null
      }
    >
      {step === "form" ? (
        <BookingForm
          service={selectedService}
          onSuccess={showSuccess}
        />
      ) : (
        <BookingSuccess
          booking={bookingResult}
          onClose={closeBooking}
          onBookAnother={resetBooking}
        />
      )}
    </Modal>
  );
}