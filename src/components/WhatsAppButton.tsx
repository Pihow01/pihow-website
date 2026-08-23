import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={`${siteConfig.contact.whatsappHref}?text=${encodeURIComponent(
        "Hi Pihow Services — I'd like to talk about a project."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Pihow Services on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={26} fill="currentColor" className="text-white" />
    </a>
  );
}
