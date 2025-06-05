import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const especialistas = [
  {
    modulo: "9",
    // imagem: "/especialistas/especialista-9.png",
  },
  {
    modulo: "10",
    // imagem: "/especialistas/especialista-10.png",
  },
  {
    modulo: "11",
    // imagem: "/especialistas/especialista-11.png",
  },
  {
    modulo: "12",
    // imagem: "/especialistas/especialista-12.png",
  },
  {
    modulo: "13",
    // imagem: "/especialistas/especialista-13.png",
  },
  {
    modulo: "14",
    // imagem: "/especialistas/especialista-14.png",
  },
];

export default function Especialistas() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
  "(min-width: 768px)": {
    slides: { perView: 3, spacing: 24 },
  },
  "(min-width: 1024px)": {
    slides: { perView: 6, spacing: 20 },
  },
},

  });

  return (
    <section className="bg-[#060A13] py-16 px-4 lg:px-20 relative">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10">
        Uma equipe de <span className="text-red-500">profissionais especializados</span> que irão te <br /> guiar no caminho do sucesso.
      </h2>

      {/* Navegação */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full"
      >
        ◀
      </button>

      <button
        onClick={() => instanceRef.current?.next()}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full"
      >
        ▶
      </button>

      <div ref={sliderRef} className="keen-slider">
        {especialistas.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide rounded-xl flex-shrink-0 overflow-hidden"
            style={{
              height: "500px",
              // backgroundImage: `url(${item.imagem})`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              backgroundColor: "#1a1a1a",
            }}
          />
        ))}
      </div>
    </section>
  );
}
