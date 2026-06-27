import * as authApi from "@/lib/endpoints/auth";

export async function loginService(
  credentials,
) {
  const { data } =
    await authApi.login(
      credentials,
    );

  return data;
}

export async function logoutService() {
  await authApi.logout();
}

export async function meService(
  token,
) {
  const { data } =
    await authApi.me(
      token,
    );

  return data;
}