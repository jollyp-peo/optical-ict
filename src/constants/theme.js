export const theme = {
  brand: {
    name: "Optimal ICT Solutions",

    colors: {
      primary: "#FFD60A",
      secondary: "#A78BFA",
      accent: "#38BDF8",
    },
  },

  colors: {
    white: "#FFFFFF",

    slate: {
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
      950: "#020617",
    },

    zinc: {
      50: "#FAFAFA",
      100: "#F4F4F5",
      200: "#E4E4E7",
      300: "#D4D4D8",
      400: "#A1A1AA",
      500: "#71717A",
      600: "#52525B",
      700: "#3F3F46",
      800: "#27272A",
      900: "#18181B",
      950: "#09090B",
    },
  },

  semantic: {
    background: {
      primary: "#FFFFFF",
      secondary: "#F8FAFC",
      tertiary: "#F1F5F9",
      dark: "#0F172A",
    },

    text: {
      primary: "#0F172A",
      secondary: "#334155",
      muted: "#64748B",
      inverse: "#FFFFFF",
    },

    border: {
      primary: "#E2E8F0",
      secondary: "#CBD5E1",
    },
  },

  status: {
    repair: {
      submitted: "#94A3B8",
      pickupScheduled: "#38BDF8",
      pickedUp: "#A78BFA",
      diagnosing: "#FACC15",
      repairing: "#F97316",
      approval: "#E879F9",
      completed: "#22C55E",
      delivered: "#16A34A",
    },

    invoice: {
      paid: "#22C55E",
      pending: "#FACC15",
      unpaid: "#EF4444",
      overdue: "#B91C1C",
    },

    support: {
      open: "#38BDF8",
      inProgress: "#FACC15",
      resolved: "#22C55E",
      closed: "#64748B",
    },

    notification: {
      info: "#38BDF8",
      success: "#22C55E",
      warning: "#FACC15",
      error: "#EF4444",
    },
  },

  typography: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
    },

    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },

    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },

    lineHeight: {
      tight: 1.1,
      normal: 1.5,
      relaxed: 1.8,
    },
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "6rem",
    "5xl": "8rem",
    "6xl": "10rem",
  },

  radius: {
    none: "0",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "32px",
    full: "9999px",
  },

  shadow: {
    xs: "0 1px 2px rgba(0,0,0,0.05)",

    sm: "0 2px 8px rgba(0,0,0,0.06)",

    md: "0 8px 24px rgba(0,0,0,0.08)",

    lg: "0 16px 40px rgba(0,0,0,0.12)",

    xl: "0 24px 60px rgba(0,0,0,0.15)",
  },

  blur: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
  },

  containers: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
    "3xl": "1600px",
  },

  zIndex: {
    dropdown: 100,
    sticky: 200,
    overlay: 300,
    drawer: 400,
    modal: 500,
    toast: 600,
    tooltip: 700,
  },

  animation: {
    duration: {
      fast: 0.2,
      normal: 0.35,
      slow: 0.5,
    },

    easing: {
      default: [0.22, 1, 0.36, 1],
    },
  },

  ui: {
    button: {
      primary: "bg-[#FFD60A] text-slate-900 hover:opacity-90",

      secondary: "bg-[#A78BFA] text-white hover:opacity-90",

      outline:
        "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",

      ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
    },

    badge: {
      default: "bg-slate-100 text-slate-700",

      success: "bg-green-100 text-green-700",

      warning: "bg-yellow-100 text-yellow-700",

      danger: "bg-red-100 text-red-700",

      info: "bg-sky-100 text-sky-700",
    },
  },
};
