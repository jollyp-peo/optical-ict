"use client";

import { Check } from "@phosphor-icons/react";

import Button from "@/components/ui/Button";

export default function SuccessModal({ data, onClose }) {
  return (
    <div className="flex flex-col items-center space-y-6 py-4 text-center">
      <div className="rounded-full bg-green-100 p-4">
        <Check size={32} weight="bold" className="text-green-600" />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-slate-950">
          Booking Submitted Successfully
        </h3>
        <p className="text-slate-600">
          Please save or screenshot this booking reference.
        </p>
      </div>

      <div className="w-full rounded-2xl bg-slate-50 p-6">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Reference
        </p>
        <p className="mt-2 text-2xl font-bold tracking-wider text-slate-950">
          {data.reference}
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Status:{" "}
          <span className="font-medium text-yellow-600">{data.status}</span>
        </p>
      </div>

      <p className="text-sm text-slate-500">
        You will need it to track your booking.
      </p>

      <Button onClick={onClose} fullWidth>
        Close
      </Button>
    </div>
  );
}