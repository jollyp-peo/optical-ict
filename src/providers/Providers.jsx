"use client";

import QueryProvider from "./QueryProvider";
import { ThemeProvider } from "./ThemeProvider";
import {
  NotificationProvider,
} from "./NotificationProvider";

export default function Providers({
  children,
}) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}