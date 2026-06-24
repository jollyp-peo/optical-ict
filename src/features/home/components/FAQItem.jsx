"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";

export default function FAQItem({
  faq,
  isOpen,
  onToggle,
}) {
  return (
    <div
      className="
        overflow-hidden

        rounded-[24px]

        border
        border-white/20

        bg-white/10

        backdrop-blur-md
      "
    >
      <button
        onClick={onToggle}
        className="
          flex
          w-full
          items-center
          justify-between

          p-6

          text-left
        "
      >
        <span
          className="
            pr-6

            text-lg
            font-semibold

            text-white
          "
        >
          {faq.question}
        </span>

        {isOpen ? (
          <Minus
            size={22}
            className="text-yellow-400"
          />
        ) : (
          <Plus
            size={22}
            className="text-white"
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div
              className="
                px-6
                pb-6

                leading-8

                text-slate-300
              "
            >
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}