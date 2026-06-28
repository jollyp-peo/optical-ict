import api from "@/services/api";

export function getBookings() {
  return api.get("/bookings");
}

export function getBooking(reference) {
  return api.get(`/bookings/${reference}`);
}

export function updateBookingStatus(reference, status) {
  return api.patch(`/bookings/${reference}/status`, { status });
}