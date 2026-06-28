import * as contactApi from "../api/contact.api";

export async function createContactService(data) {
  const { data: response } = await contactApi.createContact(data);
  return response.data;
}