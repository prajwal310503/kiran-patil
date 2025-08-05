import React from "react";
import KiranJourney from "../../components/Home/KiranJourney";

// Mission Icons
import educationIcon from "../../assets/Icons/icon1.png";
import sustainableIcon from "../../assets/Icons/icon2.png";
import digitalIcon from "../../assets/Icons/icon3.png";

const AboutKiran = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <div className="p-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Meet Shri Kiran Patil</h1>
        <p className="mb-4">
          Born in a modest household in Maharashtra, Shri Kiran Patil always believed that education is the strongest pillar of change.
          He completed his Bachelor's degree in Political Science from Fergusson College, Pune, and went on to earn a Master’s in Public Policy from Delhi University.
          His academic journey was shaped not in ivory towers, but among people — volunteering in rural schools, organizing youth debates, and raising awareness on civic rights.
        </p>
        <p className="mb-4">
          Before stepping into the political arena, he worked as a policy researcher and grassroots organizer.
          It was during these early years — traveling across villages, witnessing inequality firsthand — that his vision crystallized.
          He wasn’t content with reports and recommendations; he wanted to change things from within.
        </p>
        <p className="mb-10">
          What brought him into politics wasn’t power, but purpose.
          Fuelled by ground realities and a deep connection with the people, he decided to contest local elections — not as a career move, but as a continuation of service.
          And since that first step, Shri Kiran Patil has remained committed to a politics of empathy, action, and inclusion.
        </p>

        {/* Kiran Journey Section */}
        <KiranJourney />
      </div>

      {/* Mission Section */}
      <div className="py-20 text-center px-6">
        <h2 className="text-4xl font-extrabold mb-8">Mission</h2>
        <p className="mb-14 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A nation where every voice matters, every child learns, and every citizen lives with dignity and opportunity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-16 sm:gap-x-30 items-center justify-items-center">
          <div className="flex flex-col items-center">
            <img src={educationIcon} alt="Education" className="w-42 h-42 mb-6" />
            <p className="text-lg font-semibold">Quality education for All</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={sustainableIcon} alt="Sustainable" className="w-42 h-42 mb-6" />
            <p className="text-lg font-semibold">Sustainable Development</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={digitalIcon} alt="Digital India" className="w-42 h-42 mb-6" />
            <p className="text-lg font-semibold">Digital India, Rural First</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutKiran;
