import * as bookingsApi from "../api/bookings.api";
import { normalizeBookingArray } from "../config/NormalizeArray";

export async function getBookingsService() {
  const { data } = await bookingsApi.getBookings();
  return normalizeBookingArray(data?.data);
}

export async function getBookingService(reference) {
  const { data } = await bookingsApi.getBooking(reference);
  return data?.data ?? null;
}

export async function updateBookingStatusService(reference, status) {
  const { data } = await bookingsApi.updateBookingStatus(reference, status);
  return data?.data ?? null;
}