import * as bookingApi from "../api/booking.api";

export async function createBookingService(payload) {
  const { data } = await bookingApi.createBooking(payload);

  return data.data;
}

export async function trackBookingService(payload) {
  const { data } = await bookingApi.trackBooking(payload);

  return data.data;
}