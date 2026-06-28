// Must match backend enum exactly
export const BOOKING_STATUSES = [
  { value: "PENDING", label: "Pending" },
  { value: "CONFIRMED", label: "Confirmed" },
  { value: "PICKUP_SCHEDULED", label: "Pickup Scheduled" },
  { value: "PICKED_UP", label: "Picked Up" },
  { value: "DIAGNOSING", label: "Diagnosing" },
  { value: "WAITING_APPROVAL", label: "Waiting Approval" },
  { value: "QUOTATION_SENT", label: "Quotation Sent" },
  { value: "APPROVED", label: "Approved" },
  { value: "IN_PROGRESS", label: "In Progress" },
  { value: "READY", label: "Ready" },
  { value: "COMPLETED", label: "Completed" },
  { value: "DELIVERED", label: "Delivered" },
  { value: "CANCELLED", label: "Cancelled" },
];

export const CONTACT_STATUSES = [
  { value: "PENDING", label: "Pending" },
  { value: "IN_PROGRESS", label: "In Progress" },
  { value: "RESOLVED", label: "Resolved" },
];