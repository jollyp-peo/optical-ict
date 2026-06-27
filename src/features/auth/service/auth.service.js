import * as authApi from "../api/auth.api";

export async function loginService(credentials) {
  const { data } = await authApi.login(credentials);

  return data.data;
}

export async function logoutService() {
  await authApi.logout();
}

export async function meService(token) {
  const { data } = await authApi.me(token);

  return data.data;
}

export async function refreshService() {
  const { data } =
    await authApi.refresh();

  return data.data;
}