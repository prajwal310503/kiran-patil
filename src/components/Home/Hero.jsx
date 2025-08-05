import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import heroBg from "../../assets/kiran.png";

const Hero = () => {
  return (
    <>
      {/* Hero Section with background */}
      <section
        className="relative w-full h-[65vh] md:h-[110vh] bg-cover bg-[70%_center] md:bg-center flex flex-col md:flex-row items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        {/* Content Wrapper for Desktop */}
        <div className="relative z-10 text-white hidden md:flex flex-row items-center justify-between w-full max-w-7xl px-6 mt-auto md:mt-0">
          {/* Text Section */}
          <div className="w-1/2 space-y-6 text-left">
            <h1 className="text-5xl font-bold leading-tight">
              A Voice for the People. <br />A Vision for Progress.
            </h1>
            <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-[#FF4D00] hover:text-white transition">
              Know His Journey
            </button>
          </div>

          {/* Social Icons for Desktop */}
          <div className="flex flex-col gap-7">
            <a
              href="#"
              className="bg-[#FF4D00] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="bg-[#FF4D00] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="bg-[#FF4D00] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Text and Button for Mobile */}
        <div className="md:hidden mt-60 px-6 text-center">
          <h1 className="text-3xl font-bold leading-tight text-white">
            A Voice for the People. <br />A Vision for Progress.
          </h1>
          <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition">
            Know His Journey
          </button>
        </div>
      </section>

      {/* Social Icons for Mobile */}
      <div className="md:hidden text-black dark:text-white px-6 bg-white dark:bg-black py-1 text-center transition-colors">
        <div className="flex justify-center gap-5 mt-5">
          <a
            href="#"
            className="bg-[#FF4D00] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="bg-[#FF4D00] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="bg-[#FF4D00] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      {/* About the Leader Section */}
      <div className="bg-white dark:bg-black text-center px-6 py-10 transition-colors">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
          About the Leader
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          Born in the heart of a humble village, Shri Kiran Patil, rose from
          grassroots to greatness, carrying the voices of the unheard.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          A believer in justice, education, and dignity for all, he walks not
          ahead of the people, but with them.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          His journey is not a career — it's a commitment.
        </p>
        <button className="px-6 py-3 bg-[#FF4D00] text-white font-semibold rounded-full shadow hover:bg-orange-600 transition">
          Explore Full Bio
        </button>
      </div>
    </>
  );
};

export default Hero;
