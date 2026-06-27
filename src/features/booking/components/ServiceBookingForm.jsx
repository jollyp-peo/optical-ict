"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { serviceBookingSchema } from "../validation/booking.schema";

import InputField from "@/components/forms/InputField";
import TextareaField from "@/components/forms/TextareaField";
import SelectField from "@/components/forms/SelectField";
import Button from "@/components/ui/Button";

import { SERVICE_TYPES } from "../config/booking.config";

export default function ServiceBookingForm({ onSubmit, isLoading, apiError }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(serviceBookingSchema),
    defaultValues: {
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      bookingType: "SERVICE",
      serviceType: "",
      payload: {
        details: {
          companyName: "",
          projectDescription: "",
          budget: "",
        },
        pickup: {},
      },
    },
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <input type="hidden" {...register("bookingType")} />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Customer Information
        </h3>

        <InputField
          label="Full Name"
          placeholder="John Doe"
          required
          {...register("customerName")}
          error={errors.customerName?.message}
        />

        <InputField
          label="Phone Number"
          placeholder="+263 77 123 4567"
          required
          {...register("customerPhone")}
          error={errors.customerPhone?.message}
        />

        <InputField
          label="Email"
          type="email"
          placeholder="john@example.com"
          {...register("customerEmail")}
          error={errors.customerEmail?.message}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Service Details
        </h3>

        <SelectField
          label="Service Type"
          placeholder="Select Service"
          required
          options={SERVICE_TYPES}
          {...register("serviceType")}
          error={errors.serviceType?.message}
        />

        <InputField
          label="Company Name"
          placeholder="Acme Corporation (optional)"
          {...register("payload.details.companyName")}
          error={errors.payload?.details?.companyName?.message}
        />

        <TextareaField
          label="Project Description"
          placeholder="Tell us about your project requirements..."
          required
          rows={4}
          {...register("payload.details.projectDescription")}
          error={errors.payload?.details?.projectDescription?.message}
        />

        <InputField
          label="Budget"
          placeholder="e.g. $5,000 - $10,000 (optional)"
          {...register("payload.details.budget")}
          error={errors.payload?.details?.budget?.message}
        />
      </div>

      {apiError && (
        <div className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600">
          {apiError}
        </div>
      )}

      <Button type="submit" fullWidth loading={isLoading}>
        Submit Service Booking
      </Button>
    </form>
  );
}