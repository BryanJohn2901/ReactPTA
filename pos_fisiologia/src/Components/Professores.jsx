import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const Professores = () => {
    const imagens = Array.from({ length: 18 }, (_, i) => `/professores/professor${String(i + 1).padStart(2, '0')}.jpg`)

    return (
        <section className="bg-black py-16">
            {/* Título */}
            <h2 className="font-poppins text-center text-2xl md:text-3xl font-bold text-white mb-10 px-4">
                Conheça alguns dos Professores da Pós
            </h2>

            {/* Carrossel */}
            <div className="w-full">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    speed={3000}
                    loop={true}
                    slidesPerView={6}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1440: { slidesPerView: 6 },
                    }}
                >
                    {imagens.map((src, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <img
                                src={src}
                                alt={`Professor ${index + 1}`}
                                className="w-[260px] h-auto object-contain rounded-lg"
                            />

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Professores
