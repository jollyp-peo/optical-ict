import api from "@/services/api";

export function createBooking(payload) {
  return api.post("/bookings", payload);
}

export function trackBooking(payload) {
  return api.post("/bookings/track", payload);
}