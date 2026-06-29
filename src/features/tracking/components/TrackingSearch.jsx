"use client";

import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { useGetBooking, StatusBadge } from "@/features/admin";

import InputField from "@/components/forms/InputField";
import Button from "@/components/ui/Button";

export default function TrackingSearch() {
  const [reference, setReference] = useState("");
  const [searchRef, setSearchRef] = useState("");

  const {
    data: booking,
    isLoading,
    error,
  } = useGetBooking(searchRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchRef(reference.trim());
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Booking Reference"
          placeholder="e.g. OPT-REP-20260627-498C"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />

        <Button
          type="submit"
          fullWidth
          loading={isLoading}
          leftIcon={<MagnifyingGlass size={20} />}
        >
          Track Booking
        </Button>
      </form>

      {error && (
        <div className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600">
          {error?.response?.data?.message ||
            "Booking not found. Please check your reference number."}
        </div>
      )}

      {booking && (
        <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-950">
              Booking Details
            </h3>
            <StatusBadge status={booking.status} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Reference
              </p>
              <p className="mt-1 font-mono text-sm font-semibold text-slate-950">
                {booking.reference}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Status
              </p>
              <p className="mt-1 text-sm text-slate-950">
                {booking.status?.replace(/_/g, " ")}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Customer
              </p>
              <p className="mt-1 text-sm text-slate-950">
                {booking.customerName}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Phone
              </p>
              <p className="mt-1 text-sm text-slate-950">
                {booking.customerPhone}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Email
              </p>
              <p className="mt-1 text-sm text-slate-950">
                {booking.customerEmail || "—"}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Booking Type
              </p>
              <p className="mt-1 text-sm text-slate-950">
                {booking.bookingType}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Service Type
              </p>
              <p className="mt-1 text-sm text-slate-950">
                {booking.serviceType?.replace(/_/g, " ")}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Date
              </p>
              <p className="mt-1 text-sm text-slate-950">
                {booking.createdAt
                  ? new Date(booking.createdAt).toLocaleDateString()
                  : "—"}
              </p>
            </div>
          </div>

          {booking.payload?.pickup?.required && (
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Pickup Details
              </p>
              <p className="mt-1 text-sm text-slate-950">
                {booking.payload.pickup.preferredDay &&
                  `Date: ${booking.payload.pickup.preferredDay}`}
                {booking.payload.pickup.preferredDay &&
                  booking.payload.pickup.preferredTime &&
                  " | "}
                {booking.payload.pickup.preferredTime &&
                  `Time: ${booking.payload.pickup.preferredTime}`}
              </p>
            </div>
          )}

          {booking.payload?.details && (
            <div className="space-y-3 rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Service Details
              </p>

              {booking.bookingType === "REPAIR" && (
                <>
                  <p className="text-sm text-slate-700">
                    <span className="font-medium">Device:</span>{" "}
                    {booking.payload.details.deviceType}{" "}
                    {booking.payload.details.brand}{" "}
                    {booking.payload.details.model}
                  </p>
                  <p className="text-sm text-slate-700">
                    <span className="font-medium">Issue:</span>{" "}
                    {booking.payload.details.issue}
                  </p>
                </>
              )}

              {booking.bookingType === "SERVICE" && (
                <>
                  <p className="text-sm text-slate-700">
                    <span className="font-medium">Project:</span>{" "}
                    {booking.payload.details.projectDescription}
                  </p>
                  {booking.payload.details.companyName && (
                    <p className="text-sm text-slate-700">
                      <span className="font-medium">Company:</span>{" "}
                      {booking.payload.details.companyName}
                    </p>
                  )}
                  {booking.payload.details.budget && (
                    <p className="text-sm text-slate-700">
                      <span className="font-medium">Budget:</span>{" "}
                      {booking.payload.details.budget}
                    </p>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}