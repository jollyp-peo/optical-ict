import { theme } from "@/constants/theme";

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration:
        theme.animation.duration.normal,

      ease:
        theme.animation.easing.default,
    },
  },
};