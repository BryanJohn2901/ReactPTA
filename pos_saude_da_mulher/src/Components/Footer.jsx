// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0c0c0c] text-white px-6 font-nunito py-[100px]">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">

                {/* Coluna 1 - Logo e direitos */}
                <div className="flex flex-col items-start space-y-2">
                    <img src="/logo_pta.webp" alt="Personal Trainer Academy" className="w-[200px]" />
                    <p>Personal Trainer Academy 2025©</p>
                    <p>Todos os direitos reservados</p>
                </div>

                {/* Coluna 2 - Políticas */}
                <div className="space-y-2">
                    <h3 className="text-purple-500 font-bold text-lg">Políticas</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Políticas de Privacidade</a></li>
                        <li><a href="#" className="hover:underline">Termo de Uso</a></li>
                    </ul>
                </div>

                {/* Coluna 3 - Site Seguro */}
                <div className="space-y-2">
                    <h3 className="text-purple-500 font-bold text-lg">Site Seguro</h3>
                    <img src="/google.webp" alt="Google Safe Browsing" className="w-[200px]" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
