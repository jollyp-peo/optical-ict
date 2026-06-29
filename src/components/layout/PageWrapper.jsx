
import { WhatsAppButton } from "@/features/whatsapp";export default function PageWrapper({
  children,
}) {
  return (
    <main
      className="
        min-h-screen
        bg-slate-300
      "
    >
      {children}
      <WhatsAppButton />
    </main>
  );
}