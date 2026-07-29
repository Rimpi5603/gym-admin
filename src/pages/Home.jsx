import { useState } from "react";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";  // for additional section
import FeaturesSection from "../components/FeaturesSection"; 
import TestimonialBMISection from "../components/TestimonialBMISection";
import BrandLogo from "../components/BrandLogo";
import { FaSearch, FaShoppingBag, FaArrowDown, FaPaperPlane, FaSmile, FaTimes, FaBars, FaWhatsapp } from "react-icons/fa";
import { GiMuscleUp, GiPoolDive, GiWeightLiftingUp, GiWaterBottle } from "react-icons/gi";

const homeBg = "https://glenfitness.ca/wp-content/uploads/2017/02/gym-equipment.jpg";

function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#171717] text-white">
      {/* Fixed navigation stays visible while the page scrolls. */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#141414]/95 px-5 py-4 backdrop-blur md:px-12 md:py-5">
        <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" aria-label="Fitness Gym home">
          <BrandLogo className="h-14 w-20 md:h-16 md:w-24" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-5 text-sm font-semibold uppercase tracking-tight text-white xl:flex">
          <a href="#home">Home</a>
          <a href="#about-us" className="transition hover:text-gray-300">About Us</a>
          <Link to="/pages" className="transition hover:text-gray-300">Pages</Link>
          <a href="#services" className="transition hover:text-gray-300">Services</a>
          <a href="#testimonial" className="transition hover:text-gray-300">Testimonial</a>
          <Link to="/blog" className="transition hover:text-gray-300">Blog</Link>
          <Link to="/shop" className="transition hover:text-gray-300">Store</Link>
          <Link to="/contacts" className="transition hover:text-gray-300">Contact Us</Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 text-white md:space-x-6">
          <button className="relative hover:text-gray-300 transition">
            <FaShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
          </button>
          <button className="hover:text-gray-300 transition">
            <FaSearch size={20} />
          </button>
          {/* Login Button navigating to /login */}
          <Link 
            to="/login"
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition"
          >
            Login
          </Link>
          <button onClick={() => setIsMenuOpen((current) => !current)} className="rounded p-2 xl:hidden" aria-label="Toggle navigation">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 grid gap-1 border-t border-white/10 pt-4 text-sm font-semibold uppercase tracking-tight xl:hidden">
            <a onClick={() => setIsMenuOpen(false)} href="#home" className="rounded px-3 py-3 hover:bg-white/10">Home</a>
            <a onClick={() => setIsMenuOpen(false)} href="#about-us" className="rounded px-3 py-3 hover:bg-white/10">About Us</a>
            <Link onClick={() => setIsMenuOpen(false)} to="/pages" className="rounded px-3 py-3 hover:bg-white/10">Pages</Link>
            <a onClick={() => setIsMenuOpen(false)} href="#services" className="rounded px-3 py-3 hover:bg-white/10">Services</a>
            <a onClick={() => setIsMenuOpen(false)} href="#testimonial" className="rounded px-3 py-3 hover:bg-white/10">Testimonial</a>
            <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="rounded px-3 py-3 hover:bg-white/10">Blog</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/shop" className="rounded px-3 py-3 hover:bg-white/10">Store</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/contacts" className="rounded px-3 py-3 hover:bg-white/10">Contact Us</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/login" className="rounded bg-blue-600 px-3 py-3 text-center">Login</Link>
          </nav>
        )}
      </header>

      {/* Hero */}
      <main
        id="home"
        className="relative flex min-h-screen flex-col justify-center px-6 pt-24 md:px-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.38)), url(${homeBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10">
          <h4 className="text-xl font-semibold uppercase leading-tight tracking-tight sm:text-3xl md:text-6xl">
            Ultimate <br />
            Crossfit <br />
            Facility
          </h4>

        </div>

        <a href="#services" className="absolute bottom-6 right-24 z-10 flex flex-col items-center text-white md:bottom-12 md:right-28">
          <span className="mb-4 text-xs uppercase tracking-widest" style={{ writingMode: "vertical-rl" }}>
            Scroll Down
          </span>
          <span className="rounded-full bg-red-500 p-3 transition hover:bg-red-600">
            <FaArrowDown />
          </span>
        </a>
      </main>


<AboutSection />
<FeaturesSection />
{/* <WorkoutSection /> */}
<TestimonialBMISection />

      {/* Services section visible after scrolling below the hero. */}
      <section id="services" className="scroll-mt-20 relative overflow-hidden bg-[#181818] px-5 py-16 md:px-12 md:py-28">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-widest text-zinc-300">What we offer</p>


    <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
       Achieve amazing  <br/> results<br />
       with our services
      </h2>
            <a href="#service-cards" className="mt-7 inline-flex text-2xl text-white transition hover:text-red-400" aria-label="View services">
              <FaArrowDown className="text-base" />
            </a>
          </div>

          <div id="service-cards" className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard icon={<GiWeightLiftingUp />} title="Best equipment" />
            <ServiceCard icon={<GiMuscleUp />} title="Training plan" />
            <ServiceCard icon={<GiWaterBottle />} title="Nutrition plan" />
            <ServiceCard icon={<GiPoolDive />} title="Swimming pool" />
          </div>
        </div>
      </section>

      <footer className="bg-[#202020] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-2">
            <BrandLogo className="h-24 w-36" />

<h2 className="max-w-lg text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
  Transform your body,<br />
  transform your life
</h2>


            {/* <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Transform your body,<br />transform your life
            </h2>*/}


          </div> 

          <div className="grid gap-12 pt-14 md:grid-cols-2 lg:grid-cols-[2.1fr_0.7fr_0.7fr_0.9fr]">
            <div>
              <h3 className="mb-6 text-lg font-bold">Newsletter Signup</h3>
              <label className="flex items-center gap-3 border-b border-zinc-500 pb-5 text-zinc-400">
                <span aria-hidden="true">✉</span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent outline-none placeholder:text-zinc-400"
                />
              </label>
              <label className="mt-5 flex items-center gap-2 text-sm text-zinc-400">
                <input type="checkbox" className="h-4 w-4 accent-white" />
                I agree to the <a href="#privacy" className="underline underline-offset-2 hover:text-white">Privacy Policy.</a>
              </label>
            </div>

            <FooterLinks title="Socials" links={["Facebook", "Twitter", "Dribbble", "Instagram"]} />
            <FooterLinks title="Menu" links={["Home", "Services", "About Us", "Store", "Contact Us"]} />
            <div>
              <h3 className="mb-6 text-lg font-bold">Say Hello</h3>
              <a href="mailto:info@email.com" className="text-zinc-400 transition hover:text-white hover:underline hover:decoration-white hover:underline-offset-4">
                info@email.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      <button onClick={() => setIsChatOpen(true)} className="fixed bottom-4 left-4 z-40 flex items-center gap-2 text-left md:bottom-7 md:left-7 md:gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:bg-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </span>
        <span className="hidden rounded-lg bg-white px-4 py-2 font-medium text-gray-800 shadow-md sm:block">
          Presale Chat
        </span>
      </button>

      <a
        href="https://wa.me/919876543210?text=Hello%20Fitness%20Gym%2C%20I%20would%20like%20to%20know%20more%20about%20your%20memberships."
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-4 right-4 z-40 flex items-center gap-2 md:bottom-7 md:right-7 md:gap-3"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg transition group-hover:bg-gray-50 sm:block">
          Chat on WhatsApp
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-lg transition duration-200 group-hover:scale-105 group-hover:bg-[#20bd5a]">
          <FaWhatsapp />
        </span>
      </a>

      {isChatOpen && <ChatPopup onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}


function ServiceCard({ icon, title }) {
  return (
    <article className="group flex min-h-64 flex-col items-center justify-center rounded-lg bg-[#202020] p-7 text-center transition-colors duration-300 hover:bg-[#ff4657]">
      <div className="mb-5 text-5xl text-[#ff4657] transition-colors duration-300 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-bold">
        {title}
      </h3>

      <p className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-white/90">
        Consectetur adipiscing elit, sed do eiusmod tempo.
      </p>
    </article>
  );
}

// function ServiceCard({ icon, title }) {
//   return (
//     <article className="group flex min-h-72 flex-col items-center justify-center bg-[#202020] p-8 text-center transition-colors duration-300 hover:bg-[#ff4657]">
//       <div className="mb-6 text-6xl text-[#ff4657] transition-colors duration-300 group-hover:text-white">{icon}</div>
//       <h3 className="mb-4 text-2xl font-bold">{title}</h3>
//       <p className="text-zinc-400 transition-colors duration-300 group-hover:text-white/90">
//         Consectetur adipiscing elit, sed do eiusmod tempo.
//       </p>
//     </article>
//   );
// }

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="mb-6 text-lg font-bold">{title}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a href="#home" className="text-zinc-400 transition hover:text-white hover:underline hover:decoration-white hover:underline-offset-4">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChatPopup({ onClose }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function sendMessage(event) {
    event.preventDefault();
    const text = message.trim();
    if (!text) return;
    setMessages((current) => [...current, text]);
    setMessage("");
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40" role="dialog" aria-modal="true" aria-label="Presale chat">
      <section className="absolute bottom-4 left-4 flex h-[min(470px,calc(100vh-32px))] w-[calc(100vw-32px)] max-w-[360px] flex-col overflow-hidden rounded-xl bg-white text-[#202020] shadow-2xl md:bottom-6 md:left-5">
        <header className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff4657] font-bold text-white">G</span>
            <div>
              <h2 className="font-bold">Gym Presale Chat</h2>
              <p className="text-xs text-green-600">● Online now</p>
            </div>
          </div>
          <button onClick={onClose} className="rounded p-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900" aria-label="Close chat"><FaTimes /></button>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-zinc-100 px-4 py-3 text-sm">Hi there! 👋 How can we help you today?</div>
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-zinc-100 px-4 py-3 text-sm">Ask about memberships, plans, classes, or a free gym tour.</div>
          {messages.map((item, index) => <div key={`${item}-${index}`} className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#ff4657] px-4 py-3 text-sm text-white">{item}</div>)}
        </div>

        <form onSubmit={sendMessage} className="border-t border-zinc-200 p-4">
          <div className="flex items-center gap-3">
            <button type="button" className="text-zinc-400" aria-label="Add emoji"><FaSmile /></button>
            <input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Enter your message..." className="min-w-0 flex-1 text-sm outline-none placeholder:text-zinc-400" />
            <button type="submit" className="text-[#ff4657] transition hover:text-[#e63c4c]" aria-label="Send message"><FaPaperPlane /></button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Home;
