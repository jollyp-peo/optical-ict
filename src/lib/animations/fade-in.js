import { theme } from "@/constants/theme";

export const fadeIn = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration:
        theme.animation.duration.normal,

      ease:
        theme.animation.easing.default,
    },
  },
};