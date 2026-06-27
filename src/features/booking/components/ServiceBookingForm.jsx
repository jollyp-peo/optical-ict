"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { serviceBookingSchema } from "../validation/booking.schema";

import InputField from "@/components/forms/InputField";
import TextareaField from "@/components/forms/TextareaField";
import Button from "@/components/ui/Button";

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
      serviceType: "Service",
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
      <input type="hidden" {...register("serviceType")} />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Customer Information
        </h3>

        <InputField
          label="Full Name"
          required
          {...register("customerName")}
          error={errors.customerName?.message}
        />

        <InputField
          label="Phone Number"
          required
          {...register("customerPhone")}
          error={errors.customerPhone?.message}
        />

        <InputField
          label="Email"
          type="email"
          {...register("customerEmail")}
          error={errors.customerEmail?.message}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Service Details
        </h3>

        <InputField
          label="Company Name"
          {...register("payload.details.companyName")}
          error={errors.payload?.details?.companyName?.message}
        />

        <TextareaField
          label="Project Description"
          required
          rows={4}
          {...register("payload.details.projectDescription")}
          error={errors.payload?.details?.projectDescription?.message}
        />

        <InputField
          label="Budget"
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