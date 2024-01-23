import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoSlider = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3, // Ajusta según tus necesidades
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: 40,
    autoplaySpeed: 2000, // Controla la velocidad de reproducción automática
  };

  const logos = [
    '/IMG/slideExp/1.png',
    '/IMG/slideExp/2.png',
    '/IMG/slideExp/3.png',
    '/IMG/slideExp/4.png',
    '/IMG/slideExp/5.png',
    '/IMG/slideExp/6.png',
    '/IMG/slideExp/7.png',
    // vuelta 2,
    '/IMG/slideExp/1.png',
    '/IMG/slideExp/2.png',
    '/IMG/slideExp/3.png',
    '/IMG/slideExp/4.png',
    '/IMG/slideExp/5.png',
    '/IMG/slideExp/6.png',
    '/IMG/slideExp/7.png'
  ];

  return (
    <Slider {...settings} className='overflow-hidden bg-gray-100' >
      {logos.map((logo, index) => (
        <div key={index} className=' h-[5rem] flex items-center justify-items-center content-center h-center  md:h-[6rem]'>
          <img src={logo} alt={`Logo ${index + 1}`} width="150" className='my-0 pl-[2.5rem] md:pl-0 bg-center bg-fixed h-center' />
        </div>
      ))}
    </Slider>
  );
};

export default LogoSlider;