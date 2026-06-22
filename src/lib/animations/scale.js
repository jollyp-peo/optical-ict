import { theme } from "@/constants/theme";

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration:
        theme.animation.duration.normal,

      ease:
        theme.animation.easing.default,
    },
  },
};