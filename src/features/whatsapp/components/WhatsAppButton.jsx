"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react";

import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../config/whatsapp.config";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-full

        bg-emerald-500

        text-white

        shadow-lg
        shadow-emerald-500/30

        transition-all
        duration-300

        hover:scale-110
        hover:bg-emerald-600
        hover:shadow-xl
        hover:shadow-emerald-500/40

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-emerald-400
        focus-visible:ring-offset-2
      "
    >
      <WhatsappLogoIcon size={32} weight="fill" />
    </a>
  );
}