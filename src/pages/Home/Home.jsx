import React from 'react';
import Hero from '../../components/Home/Hero';
import Impact from '../../components/Impact/Impact';
import Journey from '../../components/Home/Journey';
import PeopleVoice from '../../components/Home/PeopleVoice'; // ✅ New import
import Events from '../../components/Home/Events';

const Home = () => {
  return (
    <section className="bg-gray-100 dark:bg-darkBg dark:text-white min-h-screen transition">
      <Hero />
      <Impact />
      <Journey />
      <PeopleVoice /> {/* ✅ New component added here */}
      <Events />
      <div className="p-10 text-center">{/* Future content */}</div>
    </section>
  );
};

export default Home;
