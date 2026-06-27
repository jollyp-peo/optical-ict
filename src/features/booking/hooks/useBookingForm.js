"use client";

import { useState } from "react";

import { initialValues } from "../utils/initialValues";
import { createPayload } from "../utils/createPayload";
import { createBooking } from "../services/booking.service";

export default function useBookingForm(
  service,
  onSuccess
) {
  const [form, setForm] =
    useState(initialValues);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState(null);

  function updateField(
    name,
    value
  ) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function submit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      setError(null);

      const payload =
        createPayload(
          service,
          form
        );

      const response =
        await createBooking(
          payload
        );

      if (
        response.success
      ) {
        onSuccess?.(
          response
        );
      }
    } catch (err) {
      console.error(err);

      setError(
        "Unable to submit booking. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setForm(initialValues);

    setError(null);
  }

  return {
    form,

    loading,

    error,

    updateField,

    submit,

    reset,
  };
}