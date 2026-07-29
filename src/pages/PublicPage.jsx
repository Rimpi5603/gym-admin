import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import heroBackground from "../assets/home_bg.jpg";
import BrandLogo from "../components/BrandLogo";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/#about-us" },
  { label: "Pages", to: "/pages" },
  { label: "Services", to: "/#services" },
  { label: "Testimonial", to: "/#testimonial" },
  { label: "Blog", to: "/blog" },
  { label: "Store", to: "/shop" },
  { label: "Contact Us", to: "/contacts" },
];

function PublicPage({ title }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <main className="min-h-screen bg-[#080a0b] text-white">
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(3,6,8,.94),rgba(3,6,8,.42)),url(${heroBackground})`,
        }}
      >
        <header className="relative z-20 mx-auto flex max-w-[1280px] items-center justify-between px-6 py-7">
          <Link to="/" className="flex items-center gap-2" aria-label="Gym home">
            <BrandLogo className="h-16 w-24" />
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-semibold uppercase tracking-tight xl:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`whitespace-nowrap transition hover:text-[#f5d312] ${
                  pathname === item.to ? "text-[#f5d312]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <Link to="/login" className="hidden items-center gap-2 text-sm font-bold sm:flex">
              <FaUser /> Account
            </Link>
            <Link to="/shop" className="relative border border-white/60 p-2.5" aria-label="Store">
              <FaShoppingBag />
              <span className="absolute -right-2 -top-2 rounded-full bg-white px-1.5 text-xs text-black">0</span>
            </Link>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="p-2 xl:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </header>

        {menuOpen && (
          <nav className="absolute inset-x-4 top-24 z-30 grid bg-black/95 p-3 text-sm font-semibold uppercase tracking-tight xl:hidden">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 px-4 py-3 last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        <section className="relative mx-auto flex min-h-[calc(100vh-110px)] max-w-[1240px] items-center px-6 pb-20">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[.4em] text-[#f5d312]">
              Welcome to our gym
            </p>
            <h1 className="mb-7 text-[clamp(3.2rem,7vw,6.4rem)] font-light uppercase leading-[.88]">
              <span className="font-black text-[#f5d312]">{title === "Pages" ? "My" : "Our"}</span>{" "}
              {title}
            </h1>
            <div className="mb-7 h-1 w-20 bg-[#f5d312]" />
            <p className="max-w-2xl text-lg leading-8 text-zinc-200">
              Explore expert training, powerful workouts, and everything you need
              to become stronger, healthier, and more confident.
            </p>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 bg-[#0c0d0e] px-6 py-14">
        <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-3">
          <div>
            <BrandLogo className="mb-3 h-24 w-36" />
            <p className="text-sm leading-6 text-zinc-500">Build your body. Build your confidence.</p>
          </div>
          <div>
            <h3 className="mb-4 font-bold uppercase tracking-widest">Quick Links</h3>
            <div className="grid gap-3 text-sm text-zinc-500">
              <Link to="/">Home</Link>
              <Link to="/pages">Pages</Link>
              <Link to="/shop">Store</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-bold uppercase tracking-widest">Contact</h3>
            <p className="text-sm leading-7 text-zinc-500">+91 98765 43210<br />hello@gymfitness.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default PublicPage;
