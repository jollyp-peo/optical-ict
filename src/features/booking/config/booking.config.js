// ------------------------------
// Device Types
// ------------------------------

export const DEVICE_TYPES = [
  { value: "", label: "Select Device Type" },
  { value: "Laptop", label: "Laptop" },
  { value: "Desktop", label: "Desktop" },
  { value: "Tablet", label: "Tablet" },
  { value: "Phone", label: "Mobile Phone" },
  { value: "Printer", label: "Printer" },
  { value: "Server", label: "Server" },
  { value: "Other", label: "Other" },
];

// ------------------------------
// Repair Service Types
// Must match backend enum exactly
// ------------------------------

export const REPAIR_SERVICE_TYPES = [
  { value: "", label: "Select Repair Service" },
  { value: "LAPTOP_REPAIR", label: "Laptop Repair" },
  { value: "MOBILE_REPAIR", label: "Mobile Phone Repair" },
];

// ------------------------------
// Business Service Types
// Must match backend enum exactly
// ------------------------------

export const SERVICE_TYPES = [
  { value: "", label: "Select Service" },
  { value: "WEBSITE_DEVELOPMENT", label: "Website Development" },
  { value: "MOBILE_APP_DEVELOPMENT", label: "Mobile App Development" },
  { value: "NETWORKING", label: "Networking" },
  { value: "IT_SUPPORT", label: "IT Support" },
];

// ------------------------------
// Pickup Required
// Use booleans; schema preprocesses DOM strings
// ------------------------------

export const PICKUP_REQUIRED_OPTIONS = [
  { value: false, label: "No" },
  { value: true, label: "Yes" },
];

// ------------------------------
// Pickup Time Slots
// ------------------------------

export const PICKUP_TIME_SLOTS = [
  { value: "", label: "Select Time Slot" },
  { value: "09:00-12:00", label: "Morning (09:00 - 12:00)" },
  { value: "12:00-15:00", label: "Afternoon (12:00 - 15:00)" },
  { value: "15:00-18:00", label: "Late Afternoon (15:00 - 18:00)" },
];