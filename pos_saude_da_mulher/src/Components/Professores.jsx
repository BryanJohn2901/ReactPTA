// src/components/Professores.jsx
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Professores = () => {
  const professores = Array.from({ length: 18 }, (_, i) => `/professores/professor${String(i + 1).padStart(2, '0')}.webp`);

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="w-full bg-[#101010] py-16 px-6">
      <div className="max-w-[1920px] mx-auto">
        <h2 className="text-center text-white font-poppins text-[24px] md:text-[32px] font-bold mb-10">
          Uma equipe de <span className="text-purple-400">profissionais especializados</span> que irão<br />
          te guiar no caminho do sucesso.
        </h2>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          arrows={false}
          showDots={false}
          draggable={true}
          swipeable={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="px-2 w-[300px]"
        >
          {professores.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Professor ${index + 1}`}
                className="w-full h-auto object-cover rounded-xl pointer-events-none"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Professores;
