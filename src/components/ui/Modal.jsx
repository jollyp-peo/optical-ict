"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "@phosphor-icons/react";

export default function Modal({
  open,
  onClose,

  title,
  description,

  maxWidth = "max-w-2xl",

  showCloseButton = true,

  closeOnBackdrop = true,
  closeOnEscape = true,

  children,
}) {
  useEffect(() => {
    if (!open || !closeOnEscape) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose?.();
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [open, closeOnEscape, onClose]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
            fixed
            inset-0
            z-[999]

            overflow-y-auto

            p-4
            sm:p-6
            lg:p-8
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          {/* Backdrop */}

          <motion.div
            className="
              fixed
              inset-0

              bg-slate-950/70

              backdrop-blur-sm
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => {
              if (closeOnBackdrop) {
                onClose?.();
              }
            }}
          />

          {/* Wrapper */}

          <div
            className="
              relative
              z-10

              flex
              min-h-full

              items-start
              justify-center

              py-8
              lg:items-center
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 24,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 24,
              }}
              transition={{
                duration: 0.25,
              }}
              className={`
                w-full
                ${maxWidth}
              `}
            >
              <div
                className="
                  flex
                  max-h-[90dvh]
                  flex-col

                  overflow-hidden

                  rounded-[32px]

                  bg-white

                  shadow-2xl
                "
              >
                {(title ||
                  description ||
                  showCloseButton) && (
                  <div
                    className="
                      shrink-0

                      border-b
                      border-slate-200

                      p-6
                      lg:p-8
                    "
                  >
                    <div className="flex items-start justify-between gap-6">

                      <div className="min-w-0">

                        {title && (
                          <h2
                            className="
                              text-2xl
                              font-bold
                              text-slate-950

                              lg:text-3xl
                            "
                          >
                            {title}
                          </h2>
                        )}

                        {description && (
                          <p
                            className="
                              mt-3

                              leading-7

                              text-slate-600
                            "
                          >
                            {description}
                          </p>
                        )}

                      </div>

                      {showCloseButton && (
                        <button
                          type="button"
                          aria-label="Close modal"
                          onClick={onClose}
                          className="
                            shrink-0

                            rounded-xl

                            p-2

                            transition

                            hover:bg-slate-100
                          "
                        >
                          <X size={22} />
                        </button>
                      )}

                    </div>
                  </div>
                )}

                {/* Scrollable Content */}

                <div
                  className="
                    flex-1

                    overflow-y-auto

                    p-6
                    lg:p-8
                  "
                >
                  {children}
                </div>

              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}