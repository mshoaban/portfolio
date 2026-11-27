"use client";

import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/923346731495?text=" +
  encodeURIComponent(
    "Hi Muhammad, I found your portfolio and I'd like to discuss a project."
  );

export default function ChatWidget() {
  return (
    <a
      className="chat-fab"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Muhammad on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
