"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { repairBookingSchema } from "../validation/booking.schema";

import InputField from "@/components/forms/InputField";
import TextareaField from "@/components/forms/TextareaField";
import SelectField from "@/components/forms/SelectField";
import Button from "@/components/ui/Button";

import {
  DEVICE_TYPES,
  REPAIR_SERVICE_TYPES,
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
      serviceType: "",
      payload: {
        details: {
          deviceType: "",
          brand: "",
          model: "",
          issue: "",
        },
        pickup: {
          required: false,
          preferredDay: "",
          preferredTime: "",
        },
      },
    },
  });

  const pickupRequired = watch("payload.pickup.required");
  const showPickupFields = pickupRequired === true || pickupRequired === "true";

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
        <h3 className="text-lg font-semibold text-slate-900">Repair Details</h3>

        <SelectField
          label="Service Type"
          placeholder="Select Repair Service"
          required
          options={REPAIR_SERVICE_TYPES}
          {...register("serviceType")}
          error={errors.serviceType?.message}
        />

        <SelectField
          label="Device Type"
          placeholder="Select Device Type"
          required
          options={DEVICE_TYPES}
          {...register("payload.details.deviceType")}
          error={errors.payload?.details?.deviceType?.message}
        />

        <InputField
          label="Brand"
          placeholder="e.g. Dell, HP, Apple"
          required
          {...register("payload.details.brand")}
          error={errors.payload?.details?.brand?.message}
        />

        <InputField
          label="Model"
          placeholder="e.g. Latitude 5520, MacBook Pro"
          required
          {...register("payload.details.model")}
          error={errors.payload?.details?.model?.message}
        />

        <TextareaField
          label="Issue"
          placeholder="Describe the problem you are experiencing..."
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
          placeholder="Select option"
          required
          options={PICKUP_REQUIRED_OPTIONS}
          {...register("payload.pickup.required")}
          error={errors.payload?.pickup?.required?.message}
        />

        {showPickupFields && (
          <>
            <InputField
              label="Preferred Pickup Day"
              type="date"
              {...register("payload.pickup.preferredDay")}
              error={errors.payload?.pickup?.preferredDay?.message}
            />

            <SelectField
              label="Preferred Pickup Time"
              placeholder="Select Time Slot"
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
