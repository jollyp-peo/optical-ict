"use client";

import QueryProvider from "./QueryProvider";
import { ThemeProvider } from "./ThemeProvider";
import { NotificationProvider } from "./NotificationProvider";

import {
  BookingProvider,
} from "@/features/booking/BookingContext";

import BookingModal from "@/features/booking/BookingModal";

import {
  AuthProvider,
} from "@/features/auth/context/AuthContext";

export default function Providers({
  children,
}) {
  return (
    <QueryProvider>

    <ThemeProvider>

        <NotificationProvider>

            <AuthProvider>

                <BookingProvider>

                    {children}

                    <BookingModal/>

                </BookingProvider>

            </AuthProvider>

        </NotificationProvider>

    </ThemeProvider>

</QueryProvider>
  );
}