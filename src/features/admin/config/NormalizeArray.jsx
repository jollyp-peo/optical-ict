export function normalizeBookingArray(response) {
  // Handle: { items: [...] }, { bookings: [...] }, or raw [...]
  if (Array.isArray(response)) return response;
  if (response?.items && Array.isArray(response.items)) return response.items;
  if (response?.bookings && Array.isArray(response.bookings)) return response.bookings;
  if (response?.data && Array.isArray(response.data)) return response.data;
  return [];
}

export function normalizeContactArray(response) {
  if (Array.isArray(response)) return response;
  if (response?.items && Array.isArray(response.items)) return response.items;
  if (response?.contacts && Array.isArray(response.contacts)) return response.contacts;
  if (response?.data && Array.isArray(response.data)) return response.data;
  return [];
}