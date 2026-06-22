const getEnv = (key, fallback = "") => {
  const value = process.env[key];

  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return fallback;
  }

  return value;
};

export const env = {
  APP_ENV: getEnv(
    "NEXT_PUBLIC_APP_ENV",
    "development"
  ),

  SITE_URL: getEnv(
    "NEXT_PUBLIC_SITE_URL",
    "http://localhost:3000"
  ),

  API_URL: getEnv(
    "NEXT_PUBLIC_API_URL",
    "http://localhost:5000/api/v1"
  ),

  WHATSAPP_NUMBER: getEnv(
    "NEXT_PUBLIC_WHATSAPP_NUMBER",
    ""
  ),

  ENABLE_ANALYTICS:
    getEnv(
      "NEXT_PUBLIC_ENABLE_ANALYTICS",
      "false"
    ) === "true",

  ENABLE_NOTIFICATIONS:
    getEnv(
      "NEXT_PUBLIC_ENABLE_NOTIFICATIONS",
      "true"
    ) === "true",
};

export const isDevelopment =
  env.APP_ENV === "development";

export const isProduction =
  env.APP_ENV === "production";

export const isStaging =
  env.APP_ENV === "staging";