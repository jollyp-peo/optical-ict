"use client";

import { useCallback, useEffect, useState } from "react";

import Modal from "@/components/ui/Modal";

import { useBooking } from "../context/BookingContext";
import { useCreateBooking } from "../hooks/useCreateBooking";

import RepairBookingForm from "./RepairBookingForm";
import ServiceBookingForm from "./ServiceBookingForm";
import SuccessModal from "./SuccessModal";

export default function BookingModal() {
  const { isOpen, mode, closeBooking } = useBooking();
  const [successData, setSuccessData] = useState(null);

  const { mutate, isPending } = useCreateBooking();

  useEffect(() => {
    if (!isOpen) {
      setSuccessData(null);
    }
  }, [isOpen]);

  const handleSubmit = useCallback(
    (data) => {

      mutate(data, {
        onSuccess: (response) => {
          setSuccessData(response);
        },
      });
    },
    [mutate],
  );

  const handleClose = useCallback(() => {
    closeBooking();
    setSuccessData(null);
  }, [closeBooking]);

  const title = successData
    ? "Booking Submitted"
    : mode === "REPAIR"
      ? "Book Repair"
      : mode === "SERVICE"
        ? "Book Service"
        : "";

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      title={title}
      maxWidth="max-w-2xl"
    >
      {successData ? (
        <SuccessModal data={successData} onClose={handleClose} />
      ) : mode === "REPAIR" ? (
        <RepairBookingForm onSubmit={handleSubmit} isLoading={isPending} />
      ) : mode === "SERVICE" ? (
        <ServiceBookingForm onSubmit={handleSubmit} isLoading={isPending} />
      ) : null}
    </Modal>
  );
}
