import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane, FaSmile } from "react-icons/fa";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function sendMessage(event) {
    event.preventDefault();
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;
    setMessages((current) => [...current, trimmedMessage]);
    setMessage("");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#171717] p-5 text-white">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#202020] shadow-2xl lg:grid-cols-[360px_1fr]">
        <section className="flex min-h-[560px] flex-col bg-white text-[#202020]">
          <header className="flex items-center gap-3 border-b border-zinc-200 px-5 py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff4657] font-bold text-white">G</span>
            <div>
              <h1 className="font-bold">Gym Presale Chat</h1>
              <p className="text-sm text-green-600">● Online now</p>
            </div>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-zinc-100 px-4 py-3 text-sm leading-relaxed">
              Hi there! 👋 How can we help you today?
            </div>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-zinc-100 px-4 py-3 text-sm leading-relaxed">
              Ask us about memberships, plans, classes, or a free gym tour.
            </div>
            {messages.map((item, index) => (
              <div key={`${item}-${index}`} className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#ff4657] px-4 py-3 text-sm text-white">
                {item}
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="border-t border-zinc-200 p-4">
            <div className="flex items-center gap-3">
              <button type="button" className="text-zinc-400" aria-label="Add emoji"><FaSmile /></button>
              <input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Enter your message..." className="min-w-0 flex-1 outline-none placeholder:text-zinc-400" />
              <button type="submit" className="text-[#ff4657] transition hover:text-[#e63c4c]" aria-label="Send message"><FaPaperPlane /></button>
            </div>
          </form>
        </section>

        <section className="flex flex-col justify-between p-8 md:p-12">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#ff4657]">We are here to help</p>
            <h2 className="max-w-lg text-4xl font-extrabold leading-tight md:text-6xl">Let&apos;s talk about your fitness goals.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">Our presale team can help you choose a membership, book a gym tour, or answer any question before you join.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <Link to="/plans" className="rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:border-white hover:bg-white hover:text-[#171717]">View plans</Link>
            <Link to="/" className="rounded-lg bg-[#ff4657] px-5 py-3 font-semibold transition hover:bg-[#e63c4c]">Back to Home</Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Chat;
