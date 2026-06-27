"use client";

import QueryProvider from "./QueryProvider";
import { ThemeProvider } from "./ThemeProvider";
import { NotificationProvider } from "./NotificationProvider";

import {
  BookingProvider,
} from "@/features/booking/BookingContext";

import BookingModal from "@/features/booking/BookingModal";

export default function Providers({
  children,
}) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <NotificationProvider>
          <BookingProvider>

            {children}

            {/* Global Booking Modal */}

            <BookingModal />

          </BookingProvider>
        </NotificationProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}