"use client";

import { useState, useRef, useEffect } from "react";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";

const cannedReplies = {
  default: "Thanks for reaching out! Muhammad is currently available for freelance and full-time roles. You can email him at mshoaban09@gmail.com or connect on LinkedIn.",
  skills: "Muhammad specializes in Laravel, PHP, CodeIgniter, Node.js, React, Vue, Livewire, and cloud deployments on AWS & Azure.",
  projects: "He's shipped 15+ commercial applications across healthcare, finance, enterprise, and social platforms. Scroll to the Projects section for details.",
  availability: "Yes — he's available for new opportunities: remote, hybrid, on-site, and freelance. Best reach is mshoaban09@gmail.com.",
  contact: "You can reach Muhammad at mshoaban09@gmail.com or call +92 334 673 1495.",
};

function getReply(text) {
  const t = text.toLowerCase();
  if (t.includes("skill") || t.includes("stack") || t.includes("tech")) return cannedReplies.skills;
  if (t.includes("project") || t.includes("work")) return cannedReplies.projects;
  if (t.includes("avail") || t.includes("hire") || t.includes("job")) return cannedReplies.availability;
  if (t.includes("contact") || t.includes("email") || t.includes("reach")) return cannedReplies.contact;
  return cannedReplies.default;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi. I'm Muhammad's AI assistant. Ask me about his work, skills, availability, or how to reach him." },
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: getReply(text) }]);
    }, 500);
  };

  return (
    <>
      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <div>
              <strong>Shoaban&apos;s AI</strong>
              <small>Online · speaks English</small>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat"><FiX /></button>
          </div>
          <div className="chat-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.from}`}>{m.text}</div>
            ))}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about skills, projects..."
            />
            <button onClick={send} aria-label="Send"><FiSend /></button>
          </div>
        </div>
      )}
      <button className="chat-fab" onClick={() => setOpen(!open)} aria-label="Open chat">
        {open ? <FiX /> : <FiMessageCircle />}
      </button>
    </>
  );
}