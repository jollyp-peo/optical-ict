import { theme } from "@/constants/theme";

export const slideLeft = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration:
        theme.animation.duration.normal,

      ease:
        theme.animation.easing.default,
    },
  },
};