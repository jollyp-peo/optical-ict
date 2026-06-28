import * as contactsApi from "../api/contacts.api";
import { normalizeContactArray } from "../config/NormalizeArray";

export async function getContactsService() {
  const { data } = await contactsApi.getContacts();
  return normalizeContactArray(data?.data);
}

export async function getContactService(id) {
  const { data } = await contactsApi.getContact(id);
  return data?.data ?? null;
}

export async function updateContactStatusService(id, status) {
  const { data } = await contactsApi.updateContactStatus(id, status);
  return data?.data ?? null;
}