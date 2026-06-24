"use client";

import { useState } from "react";

import FAQItem from "./FAQItem";

export default function FAQList({
  faqs,
}) {
  const [openIndex, setOpenIndex] =
    useState(0);

  return (
    <div
      className="
        flex
        flex-col
        gap-4
      "
    >
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(
              openIndex === index
                ? -1
                : index
            )
          }
        />
      ))}
    </div>
  );
}