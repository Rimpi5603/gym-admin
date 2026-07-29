import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCircleCheck,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaClock,
} from "react-icons/fa6";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setForm(initialForm);
  }

  return (
    <main className="min-h-screen bg-[#171717] px-5 py-8 text-white sm:px-6 md:px-10">

      <div className="mx-auto max-w-6xl">

        {/* Back Button */}

        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-white"
        >
          ← Back to Home
        </Link>

        {/* Heading */}

        <div className="mb-10 max-w-2xl">

          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#ff4657]">
            Get in touch
          </p>

          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Let&apos;s start your fitness journey.
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Have a question about memberships, training plans, or the gym?
            Send us a message and our team will get back to you.
          </p>

        </div>

        {/* Main Section */}

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.05fr]">

          {/* Contact Information */}

          <aside className="rounded-xl bg-[#222222] p-5 sm:p-6 md:p-7">

            <h2 className="mb-6 text-xl font-bold">
              Contact information
            </h2>

            <div className="space-y-5">

              <ContactInfo
                icon={<FaLocationDot />}
                title="Visit us"
                detail="123 Fitness Street, Your City"
              />

              <ContactInfo
                icon={<FaPhone />}
                title="Call us"
                detail="+91 98765 43210"
                href="tel:+919876543210"
              />

              <ContactInfo
                icon={<FaEnvelope />}
                title="Email us"
                detail="hello@gym.com"
                href="mailto:hello@gym.com"
              />

              <ContactInfo
                icon={<FaClock />}
                title="Gym hours"
                detail="Mon – Sat: 6:00 AM – 10:00 PM"
              />

            </div>

          </aside>

          {/* Contact Form */}

          <section className="rounded-xl bg-white p-5 text-[#171717] sm:p-6 md:p-7">

            <h2 className="mb-2 text-2xl font-extrabold">
              Send a message
            </h2>

            <p className="mb-6 text-sm text-zinc-500">
              Fields marked with * are required.
            </p>

            {submitted && (

              <div
                className="mb-6 flex items-start gap-3 rounded-lg bg-green-50 p-3 text-green-800"
                role="status"
              >
                <FaCircleCheck className="mt-0.5 shrink-0" />

                <span>
                  Thanks! Your message has been received.
                </span>

              </div>

            )}

            <form
              onSubmit={handleSubmit}
              className="grid gap-5 sm:grid-cols-2"
            >

              <Field
                label="Full name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <Field
                label="Email address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <Field
                label="Phone number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />

              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              />

              <label className="sm:col-span-2">

                <span className="mb-1 block text-sm font-semibold">
                  Message *
                </span>

                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-lg border border-zinc-300 px-3 py-2.5 outline-none transition placeholder:text-zinc-400 focus:border-[#ff4657] focus:ring-2 focus:ring-[#ff4657]/20"
                />

              </label>

              <div className="sm:col-span-2">

                <button
                  type="submit"
                  className="rounded-lg bg-[#ff4657] px-6 py-2.5 font-bold text-white transition hover:bg-[#e63c4c]"
                >
                  Send message
                </button>

              </div>

            </form>

          </section>

        </div>

      </div>

    </main>
  );
}

/* ===========================
   Contact Information
=========================== */

function ContactInfo({ icon, title, detail, href }) {
  return (
    <div className="flex items-start gap-3">

      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff4657] text-sm text-white">
        {icon}
      </span>

      <div>

        <h3 className="mb-1 text-sm font-bold text-white">
          {title}
        </h3>

        {href ? (
          <a
            href={href}
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            {detail}
          </a>
        ) : (
          <p className="text-sm text-zinc-400">
            {detail}
          </p>
        )}

      </div>

    </div>
  );
}

/* ===========================
   Input Field
=========================== */

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}) {
  return (
    <label>

      <span className="mb-1 block text-sm font-semibold text-[#171717]">
        {label}
        {required ? " *" : ""}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-zinc-400 focus:border-[#ff4657] focus:ring-2 focus:ring-[#ff4657]/20"
      />

    </label>
  );
}

export default Contact;