import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import andreImg from '../assets/especialistas/andre.webp';
import brunaImg from '../assets/especialistas/bruna.webp';
import kenjiImg from '../assets/especialistas/kenji.jpg';
import alexandreImg from '../assets/especialistas/alexandre.jpg';

// ADICIONE AS OUTRAS 13 IMPORTAÇÕES DE IMAGENS AQU
import leuryimg from '../assets/especialistas/leury.webp';     
import rafaelimg from '../assets/especialistas/rafael.webp';  
import brunoimg from '../assets/especialistas/bruno.webp';     
import thiagoimg from '../assets/especialistas/thiago.webp';   
import licianaimg from '../assets/especialistas/liciana.webp'; 
import givanildoimg from '../assets/especialistas/givanildo.webp'; 
import sidartaimg from '../assets/especialistas/sidarta.webp'; 
import keynerimg from '../assets/especialistas/keyner.webp';   
import kromimg from '../assets/especialistas/krom.jpg';       
import thaisimg from '../assets/especialistas/thais.webp';     
import allanimg from '../assets/especialistas/allan.webp';     
import brunoaldenucciimg from '../assets/especialistas/bruno_aldenucci.jpg'; 
import fabianoimg from '../assets/especialistas/fabiano.jpg'; 


const especialistasData = [
  {
    name: "ANDRÉ ALBUQUERQUE",
    role: "Professor",
    img: andreImg,
  },
  {
    name: "BRUNA MASSAROTO",
    role: "Professora",
    img: brunaImg,
  },
  {
    name: "KENJI TAKAHASHI",
    role: "Professor",
    img: kenjiImg,
  },
  {
    name: "ALEXANDRE EVANGELISTA",
    role: "Professor",
    img: alexandreImg,
  },
  
  {
    name: "LEURY MAX",
    role: "Professor",
    img: leuryimg,
  },

  {
    name: "RAFAEL TONIETTO",
    role: "Professor",
    img: rafaelimg,
  },

  {
    name: "BRUNO NUNES", 
    role: "Professor",
    img: brunoimg, 
  },

  {
    name: "THIAGO PASSOS",
    role: "Professor",
    img: thiagoimg,
  },

  {
    name: "LICIANA ROSSI",
    role: "Professor",
    img: licianaimg,
  },

  {
    name: "GIVANILDO MATIAS",
    role: "Professor",
    img: givanildoimg,
  },

  {
    name: "SIDARTA GEBER",
    role: "Professor",
    img: sidartaimg,
  },

  {
    name: "KEYNER LUIZ",
    role: "Professor",
    img: keynerimg,
  },

  {
    name: "KROM GUEDES",
    role: "Professor",
    img: kromimg,
  },

  {
    name: "THAIS PACHECO",
    role: "Professor",
    img: thaisimg,
  },

  {
    name: "ALLAN MENACHE",
    role: "Professor",
    img: allanimg,
  },    
    
  {
    name: "BRUNO ALDENUCCI",
    role: "Professor",
    img: brunoaldenucciimg, // Assuming this is distinct from the first "BRUNO NUNES"
  },

  {
    name: "FABIANO PERES",
    role: "Professor",
    img: fabianoimg,
  },
];

export default function Especialistas() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablets e laptops menores
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 640, // celulares
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true, // As setas aparecerão em celulares
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-center font-bold text-xl md:text-2xl mb-8 px-2 max-w-3xl mx-auto">
        Uma equipe de{" "}
        <span className="text-yellow-500">profissionais especializados</span> que
        irão te guiar no caminho do sucesso.
      </h2>

      <Slider {...settings} className="mb-8">
        {especialistasData.map(({ name, role, img }) => (
          <div key={name} className="px-3">
            <div className="flex flex-col items-center p-4">
              <img
                src={img}
                alt={name}
                className="w-full h-auto object-cover rounded-md"
                // Opcional: Adicione um filtro para simular a imagem "apagada" ou com cores menos vibrantes
                // style={{ filter: 'grayscale(100%) brightness(80%)' }}
              />
            </div>
          </div>
        ))}
      </Slider>

      <div className="text-center">
        <button className="bg-yellow-500 text-black font-extrabold px-8 py-3 rounded-md hover:bg-yellow-600 transition">
          QUERO SER ESPECIALISTA
        </button>
      </div>
    </section>
  );
}