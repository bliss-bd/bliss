import React from 'react';
import CitiesSlider from './CitiesSlider';

const Banner = () => {

  const slides = [
    {
      city: 'Fresh arrivals',

      img: 'https://i.ibb.co/8xW76Qq/pc-2.jpg',
      // img2: '../../../assets/Bliss20.gif',
      to: '/shopnew'
    },
    {
      city: 'NEW DROPS',
      img: 'https://i.ibb.co/S6vbbxc/pc-1.jpg',
      // img2: 'https://i.ibb.co/3pnzPsz/pc-1-2.jpg',
      to: '/shopnew'
    },
    {
      city: 'Gents Goods',
      img: 'https://i.ibb.co/thHtt8D/pc-3.jpg',
      // img2: 'https://i.ibb.co/ZYktxcY/mobile-3.jpg',
      to: '/shopmen'
    },
    {
      city: 'Female goods',
      img: 'https://i.ibb.co/M5WK999/pc.jpg',
      // img2: 'https://i.ibb.co/ZmnfJZL/mobile-2.jpg',
      to: '/shopwomen'
    }
  ];

  return (
    <div>
      <CitiesSlider slides={slides} />
    </div>
  );
};

export default Banner;