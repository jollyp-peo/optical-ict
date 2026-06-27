"use client";

import { useMemo } from "react";

import Button from "@/components/ui/Button";
import {
  InputField,
  SelectField,
  TextareaField,
} from "@/components/forms";

import { bookingFields } from "./data/bookingFields";
import useBookingForm from "./hooks/useBookingForm";

export default function BookingForm({
  service,
  onSuccess,
}) {
  const {
    form,
    loading,
    error,
    submit,
    updateField,
  } = useBookingForm(
    service,
    onSuccess
  );

  const fields = useMemo(() => {
    return (
      bookingFields[
        service.bookingType
      ] || []
    );
  }, [service.bookingType]);

  function renderField(field) {
    switch (field.type) {
      case "textarea":
        return (
          <TextareaField
            key={field.name}
            label={field.label}
            placeholder={
              field.placeholder
            }
            value={form[field.name]}
            onChange={(e) =>
              updateField(
                field.name,
                e.target.value
              )
            }
          />
        );

      case "select":
        return (
          <SelectField
            key={field.name}
            label={field.label}
            value={form[field.name]}
            onChange={(e) =>
              updateField(
                field.name,
                e.target.value
              )
            }
            options={[
              {
                label: "Select an option",
                value: "",
              },
              ...field.options.map(
                (option) => ({
                  label: option,
                  value: option,
                })
              ),
            ]}
          />
        );

      default:
        return (
          <InputField
            key={field.name}
            label={field.label}
            type={field.type}
            placeholder={
              field.placeholder
            }
            value={form[field.name]}
            onChange={(e) =>
              updateField(
                field.name,
                e.target.value
              )
            }
          />
        );
    }
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-10"
    >
      {/* Customer Information */}

      <section>
        <h3
          className="
            text-lg
            font-semibold
            text-slate-900
          "
        >
          Customer Information
        </h3>

        <div
          className="
            mt-6
            grid
            gap-6

            md:grid-cols-2
          "
        >
          <div className="md:col-span-2">
            <InputField
              label="Full Name"
              required
              value={form.fullName}
              onChange={(e) =>
                updateField(
                  "fullName",
                  e.target.value
                )
              }
            />
          </div>

          <InputField
            label="Email Address"
            type="email"
            required
            value={form.email}
            onChange={(e) =>
              updateField(
                "email",
                e.target.value
              )
            }
          />

          <InputField
            label="Phone Number"
            type="tel"
            required
            value={form.phone}
            onChange={(e) =>
              updateField(
                "phone",
                e.target.value
              )
            }
          />
        </div>
      </section>

      {/* Dynamic Service Fields */}

      <section>
        <h3
          className="
            text-lg
            font-semibold
            text-slate-900
          "
        >
          Service Information
        </h3>

        <div
          className="
            mt-6
            space-y-6
          "
        >
          {fields.map(renderField)}
        </div>
      </section>

      {error && (
        <div
          className="
            rounded-xl
            border
            border-red-200
            bg-red-50
            p-4

            text-sm
            text-red-600
          "
        >
          {error}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        fullWidth
        loading={loading}
      >
        Submit Booking Request
      </Button>
    </form>
  );
}