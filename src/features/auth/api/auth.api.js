import api from "@/services/api";

export function login(data) {
  return api.post("/auth/login", data);
}

export function logout() {
  return api.post("/auth/logout");
}

export function refresh() {
  return api.post("/auth/refresh");
}

export function me(token) {
  return api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}