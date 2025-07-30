import React from "react";
import event1 from "../../assets/Journey/journey-2001.png";
import event2 from "../../assets/Journey/journey-2001.png";
import event3 from "../../assets/Journey/journey-2001.png";
import event4 from "../../assets/Journey/journey-2001.png";

const eventData = [
  {
    image: event1,
    title: "Youth Empowerment Rally – Nagpur",
    desc: "Spoke on skill development, job creation, and education access.",
    date: "March 21, 2025",
    color: "black",
  },
  {
    image: event2,
    title: "Student Meet & Career Talk – Amravati University",
    desc: "Interactive session with over 600 students on policy & change.",
    date: "March 21, 2025",
    color: "black",
  },
  {
    image: event3,
    title: "Free Health Camp – Wardha District",
    desc: "In partnership with local NGOs, offered general check-ups and vaccinations.",
    date: "March 21, 2025",
    color: "black",
  },
  {
    image: event4,
    title: "Digital Literacy Drive – Wardha District",
    desc: "Conducted digital education workshops for rural communities.",
    date: "March 21, 2025",
    color: "black",
  },
];

const Events = () => {
  return (
    <section className="py-16 px-6 bg-white text-black dark:bg-black dark:text-white text-center transition-colors duration-500">
      <h2 className="text-[42px] font-bold mb-10 leading-tight">Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {eventData.map((event, index) => (
          <div
            key={index}
            className="bg-[#F8F8F8] dark:bg-[#1e1e1e] rounded-2xl shadow-md p-4 text-left hover:shadow-lg transition duration-300 flex flex-col justify-between h-full"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[200px] rounded-xl object-cover mb-4"
            />
            <h3 className="text-base font-semibold leading-snug mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-[#333] dark:text-gray-300 mb-2 leading-snug">
              {event.desc}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{event.date}</p>
            <div className="flex justify-end mt-auto">
              <button
                className={`w-[120px] h-[35px] text-white rounded-full text-sm font-medium cursor-pointer transition duration-300 ${
                  event.color === "orange"
                    ? "bg-[#C34700] hover:bg-[#a73900]"
                    : "bg-black hover:bg-[#C34700] dark:bg-white dark:text-black dark:hover:bg-[#C34700] dark:hover:text-white"
                }`}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 underline text-lg cursor-pointer hover:text-[#C34700]">
        View More
      </p>
    </section>
  );
};

export default Events;
