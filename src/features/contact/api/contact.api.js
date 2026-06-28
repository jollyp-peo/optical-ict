import api from "@/services/api";

export function createContact(data) {
  return api.post("/contact", data);
}