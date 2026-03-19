import React, { useMemo, useRef, useState, useEffect } from "react";
import {
  MessageCircle,
  SendHorizontal,
  X,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "Components/ui/button";
import { Input } from "Components/ui/input";
import { generateChatbotReply, getWelcomeMessage } from "lib/chatbotEngine";

function createMessage(role, payload) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text: payload.text,
    quickReplies: payload.quickReplies || [],
    links: payload.links || [],
  };
}

const ChatbotAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState(() => [
    createMessage("assistant", getWelcomeMessage()),
  ]);

  const location = useLocation();
  const navigate = useNavigate();
  const messageContainerRef = useRef(null);

  const isAdminRoute = useMemo(
    () => location.pathname.startsWith("/admin"),
    [location.pathname],
  );

  useEffect(() => {
    if (!messageContainerRef.current) return;
    messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
  }, [messages, typing]);

  if (isAdminRoute) {
    return null;
  }

  const pushAssistantReply = (query) => {
    const reply = generateChatbotReply(query);
    setTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, createMessage("assistant", reply)]);
      setTyping(false);
    }, 450);
  };

  const onSend = (rawMessage) => {
    const message = (rawMessage || inputValue).trim();
    if (!message || typing) return;

    setMessages((prev) => [
      ...prev,
      createMessage("user", { text: message, quickReplies: [], links: [] }),
    ]);
    setInputValue("");
    pushAssistantReply(message);
  };

  const navigateToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerOffset = 88;
    const position =
      section.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: Math.max(position, 0), behavior: "smooth" });
    window.history.replaceState(null, "", `/#${sectionId}`);
  };

  const onLinkClick = (link) => {
    if (link.type === "section") {
      navigateToSection(link.target);
      return;
    }

    if (link.type === "route") {
      navigate(link.target);
      setIsOpen(false);
      return;
    }

    if (link.type === "email") {
      window.location.href = `mailto:${link.target}`;
    }
  };

  const lastAssistantMessage = [...messages]
    .reverse()
    .find((message) => message.role === "assistant");

  return (
    <>
      <button
        type="button"
        aria-label="Open chatbot"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-5 z-50 rounded-full p-4 shadow-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:scale-105 transition-transform duration-300"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {isOpen && (
        <section className="fixed z-50 bottom-24 right-4 w-[calc(100%-2rem)] sm:w-[420px] h-[68vh] max-h-[620px] rounded-2xl overflow-hidden shadow-2xl border border-emerald-100 bg-white">
          <header className="px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={18} />
              <h2 className="text-base font-semibold">HelpingHand AI Assistant</h2>
            </div>
            <p className="text-xs text-emerald-100 mt-1">
              Ask about programs, donations, volunteering, and impact.
            </p>
          </header>

          <div
            ref={messageContainerRef}
            className="h-[calc(100%-190px)] overflow-y-auto px-3 py-4 bg-gradient-to-b from-emerald-50/50 to-white"
          >
            <div className="space-y-3">
              {messages.map((message) => (
                <article
                  key={message.id}
                  className={`max-w-[92%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-line ${
                    message.role === "assistant"
                      ? "bg-white border border-emerald-100 text-gray-800"
                      : "ml-auto bg-emerald-600 text-white"
                  }`}
                >
                  <p>{message.text}</p>
                  {message.links.length > 0 && message.role === "assistant" && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {message.links.map((link) => (
                        <button
                          key={`${message.id}-${link.label}`}
                          type="button"
                          onClick={() => onLinkClick(link)}
                          className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                        >
                          {link.label}
                          <ExternalLink size={12} />
                        </button>
                      ))}
                    </div>
                  )}
                </article>
              ))}

              {typing && (
                <article className="max-w-[120px] rounded-2xl px-3 py-2 text-sm bg-white border border-emerald-100 text-gray-800">
                  typing...
                </article>
              )}
            </div>
          </div>

          <div className="border-t border-gray-100 px-3 pt-3 pb-2 bg-white">
            {lastAssistantMessage && lastAssistantMessage.quickReplies.length > 0 && (
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                {lastAssistantMessage.quickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => onSend(reply)}
                    className="shrink-0 text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-800 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(event) => {
                event.preventDefault();
                onSend();
              }}
              className="flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Ask anything about HelpingHand"
                className="h-10 text-sm"
              />
              <Button
                type="submit"
                className="h-10 w-10 p-0 rounded-lg bg-emerald-600 hover:bg-emerald-700"
                aria-label="Send message"
              >
                <SendHorizontal size={16} />
              </Button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default ChatbotAssistant;
