import React from "react";
import WomenImg from "../../assets/Impact/frame1.png";
import JobsImg from "../../assets/Impact/frame2.png";
import RebuildImg from "../../assets/Impact/frame3.png";
import VoiceImg from "../../assets/Impact/frame4.png";

const impactData = [
  {
    title: "Women at the Forefront",
    image: WomenImg,
    content:
      "Promoted women-led self-help groups across 60+ villages. Rural women are now driving change, income, and independence in their communities.",
  },
  {
    title: "Jobs, Not Promises",
    image: JobsImg,
    content:
      "Empowering youth with real opportunities, skills, and dignified livelihoods—not just empty assurances.",
  },
  {
    title: "Rebuilding After the Storm",
    image: RebuildImg,
    content:
      "Restoring homes, hope, and dignity for families after natural disasters—together with the community.",
  },
  {
    title: "Voice for the Voiceless",
    image: VoiceImg,
    content:
      "Standing up for the underrepresented, ensuring their stories, struggles, and rights are heard and respected.",
  },
];

const Impact = () => {
  return (
    <section className="px-4 py-12 text-center bg-white dark:bg-black transition-colors">
      <h2 className="text-5xl font-bold mb-10 text-black dark:text-white">Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {impactData.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer w-full aspect-square"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay for All */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-sm text-center">{item.content}</p>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-black/70 py-2 text-center">
              <h3 className="text-sm font-semibold text-black dark:text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
