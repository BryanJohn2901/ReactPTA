import React from 'react'
import { Link, Youtube, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#080B3C] text-white py-6 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <img src="/logoPta.webp" alt="Logo PTA" className="w-[180px]" />

        {/* Texto */}
        <p className="text-sm text-center text-pink-600">
          Copyright © 2025 Personal Trainer Academy. Direitos reservados.
        </p>

        {/* Ícones */}
        <div className="flex items-center gap-4 text-pink-600">
          <Link size={18} />
          <Youtube size={18} />
          <Instagram size={18} />
        </div>
      </div>
    </footer>
  )
}

export default Footer