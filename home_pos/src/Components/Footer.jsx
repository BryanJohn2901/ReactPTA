import React from 'react'
import { Mail, MapPin } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    // Rodapé com fundo escuro e padding
    <footer className="bg-[#014237] text-white py-16 px-6">
      {/* Container centralizado com grid responsivo */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Coluna 1: descrição e redes sociais */}
        <div>
          <p className="mb-6 text-sm max-w-xs text-center">
            A educação é a base do crescimento pessoal e social, capacitando indivíduos com conhecimento.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="bg-[#FE7750] rounded-full p-2 text-white text-sm hover:opacity-80 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#FE7750] rounded-full p-2 text-white text-sm hover:opacity-80 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-[#FE7750] rounded-full p-2 text-white text-sm hover:opacity-80 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Coluna 2: navegação rápida */}
        <div className="text-center md:text-left">
          <h4 className="text-[#FE7750] font-bold mb-4">Menu Rápido</h4>
          <ul className="space-y-2 text-sm font-medium">
            <li><a href="#">Sobre a PTA</a></li>
            <li><a href="#">Professores</a></li>
            <li><a href="#">Pós-Graduações</a></li>
            <li><a href="#">Fale com um consultor</a></li>
            <li><a href="#">Central do Aluno</a></li>
          </ul>
        </div>

        {/* Coluna 3: informações de contato */}
        <div className="text-center md:text-left">
          <h4 className="text-[#FE7750] font-bold mb-4">Contato</h4>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3 text-sm">
            <Mail className="w-4 h-4 text-[#FE7750]" />
            contato@personaltraineracademy.com.br
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <MapPin className="w-4 h-4 text-[#FE7750]" />
            república argentina, 1237
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
