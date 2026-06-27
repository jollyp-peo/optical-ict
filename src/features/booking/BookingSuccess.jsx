"use client";

import {
  CheckCircle,
  ArrowClockwise,
  X,
} from "@phosphor-icons/react";

import Button from "@/components/ui/Button";

export default function BookingSuccess({
  booking,
  onClose,
  onBookAnother,
}) {
  return (
    <div className="py-8 text-center">

      <div className="flex justify-center">

        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-green-100
          "
        >
          <CheckCircle
            size={54}
            weight="fill"
            className="text-green-600"
          />
        </div>

      </div>

      <h2 className="mt-8 text-3xl font-bold text-slate-900">
        Booking Submitted Successfully
      </h2>

      <p className="mx-auto mt-4 max-w-md leading-7 text-slate-600">
        Thank you for choosing Optimal ICT.
        Our team will review your request and
        contact you shortly.
      </p>

      <div
        className="
          mx-auto
          mt-8
          max-w-sm

          rounded-2xl

          border

          bg-slate-50

          p-6
        "
      >
        <p className="text-sm text-slate-500">
          Booking Reference
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-wide">
          {booking.bookingId}
        </h3>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <Button
          leftIcon={
            <ArrowClockwise size={18} />
          }
          variant="secondary"
          onClick={onBookAnother}
        >
          Book Another Service
        </Button>

        <Button
          leftIcon={<X size={18} />}
          onClick={onClose}
        >
          Close
        </Button>

      </div>

    </div>
  );
}