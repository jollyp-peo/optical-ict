import api from "@/services/api";

export function getContacts() {
  return api.get("/contact");
}

export function getContact(id) {
  return api.get(`/contact/${id}`);
}

export function updateContactStatus(id, status) {
  return api.patch(`/contact/${id}/status`, { status });
}