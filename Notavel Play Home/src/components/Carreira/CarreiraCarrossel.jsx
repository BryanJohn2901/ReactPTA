import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarreiraCarrossel = () => {
  const imagens = [
    '/carrossel/card01.webp',
    '/carrossel/card02.webp',
    '/carrossel/card03.webp',
    '/carrossel/card04.webp',
    '/carrossel/card05.webp',
    '/carrossel/card06.webp',
    '/carrossel/card07.webp',
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: true,
  }

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <Slider {...settings}>
          {imagens.map((src, index) => (
            <div key={index} className="px-3">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CarreiraCarrossel
