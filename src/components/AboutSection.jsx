import { FaPlay } from "react-icons/fa";
import trainerImg from "../assets/Trainer.webp";

function AboutSection() {
  return (
    <section id="about-us" className="scroll-mt-20 relative overflow-hidden bg-white py-16 lg:py-20">

      

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:px-12">

        {/* LEFT IMAGE */}
        <div className="relative flex-1 flex justify-center">

          {/* Left Dots */}
          <div className="absolute left-4 top-40 flex flex-col gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <span className="h-2 w-2 rounded-full bg-gray-700"></span>
            <span className="h-2 w-2 rounded-full bg-gray-700"></span>
          </div>

          {/* Right Bottom Dots */}
          <div className="absolute bottom-8 right-6 flex flex-col gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <span className="h-2 w-2 rounded-full bg-gray-700"></span>
            <span className="h-2 w-2 rounded-full bg-gray-700"></span>
          </div>

          <img
            src={trainerImg}
            alt="Gym Trainers"
            className="w-full max-w-[480px] object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">

          <p className="mb-3 uppercase tracking-[5px] text-[14px] text-[#e8b100]">
            SCIENCE 2005
          </p>

          <h2 className="text-[40px] font-black uppercase leading-tight text-[#222] lg:text-[44px]">
            BEST <span className="text-[#e8b100]">EQUIPMENTS</span>
            <br />
            &amp;
            <span className="text-[#e8b100]"> FITNESS</span> TRAINERS
          </h2>

          <p className="mt-6 max-w-[520px] text-[16px] leading-8 text-gray-600">
            Gym is very important to maintain our health. We provide
            professional trainers, modern equipment, and personalized
            workout plans to help you achieve your fitness goals.
          </p>

          {/* FEATURES */}
          <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-5">

            <Feature text="Builds Aerobic Power" />
            <Feature text="Strong Body Structure" />
            <Feature text="Boosts Your Memory" />
            <Feature text="Bring about restful Sleep" />

          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center gap-6">

            <button className="rounded-full bg-[#e8b100] px-8 py-3 font-bold uppercase text-white transition hover:bg-[#c99800]">
              LET'S START
            </button>

            <button className="flex items-center gap-3 font-bold uppercase text-[#222]">

              <span className="flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-[#e8b100]">

                <FaPlay className="ml-1 text-sm text-[#e8b100]" />

              </span>

              INTRO VIDEO

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">

      <span className="h-3 w-3 rounded-full border border-[#e8b100]"></span>

      <span className="text-[17px] font-medium text-[#222]">
        {text}
      </span>

    </div>
  );
}

export default AboutSection;
