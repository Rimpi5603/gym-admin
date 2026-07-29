import {
  FaDumbbell,
  FaMedal,
  FaTrophy,
} from "react-icons/fa";

import { GiWeightLiftingUp } from "react-icons/gi";

import discountImg from "../assets/discount.png";

function FeaturesSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-sm lg:flex-row">

        {/* Left */}

        <div className="grid flex-1 grid-cols-1 gap-10 bg-[#161616] p-6 sm:grid-cols-2 sm:p-10 lg:gap-12 lg:p-14">

          <Feature
            icon={<FaDumbbell />}
            title="Best Training"
            text="Best Training dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />

          <Feature
            icon={<FaMedal />}
            title="Qualified Instructor"
            text="Qualified instructor consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
          />

          <Feature
            icon={<GiWeightLiftingUp />}
            title="Latest Equipment"
            text="Latest equipment dolor consectetur adipisicing elit, sed do eiusmod tempor incididunt."
          />

          <Feature
            icon={<FaTrophy />}
            title="Award Winners"
            text="Award winner dolor sit consectetur adipisicing elit, sed do eiusmod tempor incididunt."
          />

        </div>

        {/* Right */}

        <div className="relative h-[280px] w-full sm:h-[380px] lg:h-auto lg:w-[300px]">

          <img
            src={discountImg}
            alt="Discount"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">

            <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              35%
            </h2>

            <p className="text-xl font-extrabold uppercase text-white sm:text-2xl lg:text-3xl">
              Discount
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">

      <div className="text-4xl text-white sm:text-5xl">
        {icon}
      </div>

      <div>

        <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
          {title}
        </h3>

        <p className="text-sm leading-7 text-zinc-400 sm:text-base">
          {text}
        </p>

      </div>

    </div>
  );
}

export default FeaturesSection;