import { useState } from "react";

function TestimonialBMISection() {
  const [bmi, setBmi] = useState("0.0");

  const [form, setForm] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "Female",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function calculateBMI(e) {
    e.preventDefault();

    const h = Number(form.height) / 100;
    const w = Number(form.weight);

    if (!h || !w) {
      setBmi("0.0");
      return;
    }

    const value = (w / (h * h)).toFixed(1);
    setBmi(value);
  }

  return (
    <section id="testimonial" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div className="flex flex-col justify-center">

          <p className="mb-4 uppercase tracking-[5px] text-yellow-500">
            Testimonials
          </p>

          <h2 className="text-5xl font-black leading-tight text-[#222]">
            THAT'S <span className="text-yellow-500">WHAT OUR</span>
            <br />
            <span className="text-yellow-500">CLIENT</span> SAYS
          </h2>

          <p className="mt-10 max-w-md italic leading-9 text-gray-600">
            “Getshape is a very smart and technical sound gym, which
            maintain professional trainer as well as modern equipments.
            to maintain our health luptas sit fugit, sed quia cuuntur
            mag dolores eos qui rat ione volupta pleasure rationally”
          </p>

          <h3 className="mt-8 text-3xl font-bold text-[#222]">
            Stephen Fleming
          </h3>

          <p className="text-gray-500">
            Maryland, USA
          </p>

        </div>

        {/* RIGHT */}

        <div className="relative overflow-hidden rounded-md bg-gradient-to-br from-[#111] via-[#1b1b1b] to-black p-10 text-white">

          {/* Background Glow */}

          <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-yellow-500/10 blur-3xl"></div>

          <div className="relative z-10">

            <h2 className="text-center text-4xl font-black">
              BMI <span className="text-yellow-500">CALCULATOR</span>
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-center text-sm leading-7 text-gray-300">
              BMI is a reliable guide to estimate the healthy weight
              range based on height, weight and age.
            </p>

            <form
              onSubmit={calculateBMI}
              className="mt-10 space-y-6"
            >

              <div className="grid grid-cols-3 gap-4">

                <input
                  type="number"
                  name="height"
                  placeholder="Height / cm"
                  value={form.height}
                  onChange={handleChange}
                  className="border-b border-gray-600 bg-transparent py-2 outline-none"
                />

                <input
                  type="number"
                  name="weight"
                  placeholder="Weight / kg"
                  value={form.weight}
                  onChange={handleChange}
                  className="border-b border-gray-600 bg-transparent py-2 outline-none"
                />

                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={form.age}
                  onChange={handleChange}
                  className="border-b border-gray-600 bg-transparent py-2 outline-none"
                />

              </div>

              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full border-b border-gray-600 bg-transparent py-3 outline-none"
              >
                <option className="text-black">Female</option>
                <option className="text-black">Male</option>
              </select>

              <div className="mt-8 flex items-center justify-between">

                <button
                  className="rounded-full bg-yellow-500 px-10 py-3 font-bold transition hover:bg-yellow-600"
                >
                  CALCULATE
                </button>

                <div className="rounded-md bg-white/10 px-8 py-4">

                  <span className="text-6xl font-black">
                    {bmi}
                  </span>

                </div>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TestimonialBMISection;
