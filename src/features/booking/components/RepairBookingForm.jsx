"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { repairBookingSchema } from "../validation/booking.schema";

import InputField from "@/components/forms/InputField";
import TextareaField from "@/components/forms/TextareaField";
import SelectField from "@/components/forms/SelectField";
import Button from "@/components/ui/Button";

import {
  PICKUP_REQUIRED_OPTIONS,
  PICKUP_TIME_SLOTS,
} from "../config/booking.config";

export default function RepairBookingForm({ onSubmit, isLoading, apiError }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(repairBookingSchema),
    defaultValues: {
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      bookingType: "REPAIR",
      serviceType: "Repair",
      payload: {
        details: {
          deviceType: "",
          brand: "",
          model: "",
          issue: "",
        },
        pickup: {
          required: "false",
          preferredDay: "",
          preferredTime: "",
        },
      },
    },
  });

  const pickupRequired = watch("payload.pickup.required");

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
          Repair Details
        </h3>

        <InputField
          label="Device Type"
          required
          {...register("payload.details.deviceType")}
          error={errors.payload?.details?.deviceType?.message}
        />

        <InputField
          label="Brand"
          required
          {...register("payload.details.brand")}
          error={errors.payload?.details?.brand?.message}
        />

        <InputField
          label="Model"
          required
          {...register("payload.details.model")}
          error={errors.payload?.details?.model?.message}
        />

        <TextareaField
          label="Issue"
          required
          rows={4}
          {...register("payload.details.issue")}
          error={errors.payload?.details?.issue?.message}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Pickup</h3>

        <SelectField
          label="Pickup Required"
          required
          options={PICKUP_REQUIRED_OPTIONS}
          {...register("payload.pickup.required")}
          error={errors.payload?.pickup?.required?.message}
        />

        {pickupRequired === "true" && (
          <>
            <InputField
              label="Preferred Pickup Day"
              type="date"
              {...register("payload.pickup.preferredDay")}
              error={errors.payload?.pickup?.preferredDay?.message}
            />

            <SelectField
              label="Preferred Pickup Time"
              options={PICKUP_TIME_SLOTS}
              {...register("payload.pickup.preferredTime")}
              error={errors.payload?.pickup?.preferredTime?.message}
            />
          </>
        )}
      </div>

      {apiError && (
        <div className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600">
          {apiError}
        </div>
      )}

      <Button type="submit" fullWidth loading={isLoading}>
        Submit Repair Booking
      </Button>
    </form>
  );
}