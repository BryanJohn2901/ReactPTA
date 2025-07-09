import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarrosselProfessores2 = ({ direction = 'left' }) => {
  const imagens = Array.from({ length: 30 }, (_, i) => `/professores/${i + 1}.png`)

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000, // quanto menor, mais rápido
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // sem pausa
    cssEase: 'linear',
    arrows: false,
    rtl: direction === 'left', // ← ALTERE A DIREÇÃO AQUI (true = direita → esquerda)
    pauseOnHover: false,
  }

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto">
        <Slider {...settings}>
          {imagens.map((src, index) => (
            <div key={index} className="px-2">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={src}
                  alt={`Professor ${index + 1}`}
                  className="w-full h-[200px] object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CarrosselProfessores2
