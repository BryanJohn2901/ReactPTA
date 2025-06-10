// src/components/ModuloCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ModuloCarousel() {
  return (
    <section className="bg-[#090b0f] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Uma equipe de <span className="text-blue-500">profissionais especializados</span> que irão <br />
          te guiar no caminho do sucesso.
        </h2>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
        className="group"
      >
        {/* Substitua pelos caminhos reais das imagens */}
        <SwiperSlide>
          <img
            src="/modulo-9.png" // 🖼️ Exemplo: public/modulo-9.png
            alt="Módulo 9"
            className="rounded-lg shadow-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/modulo-10.png" alt="Módulo 10" className="rounded-lg shadow-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/modulo-11.png" alt="Módulo 11" className="rounded-lg shadow-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/modulo-12.png" alt="Módulo 12" className="rounded-lg shadow-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/modulo-13.png" alt="Módulo 13" className="rounded-lg shadow-md" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
