import React from 'react';
import { Hero, Contact, FeaturedProducts, Services } from '../components';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
