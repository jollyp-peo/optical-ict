export async function createBooking(payload) {
  console.log(
    "Booking Request",
    payload
  );

  await new Promise((resolve) =>
    setTimeout(resolve, 1500)
  );

  return {
    success: true,

    bookingId:
      "BK-" +
      Date.now(),

    message:
      "Booking submitted successfully.",
  };
}