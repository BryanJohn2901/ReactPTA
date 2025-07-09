// src/components/ListaSuspensa.jsx

import React from "react";
import { ArrowRight } from "lucide-react";

const ListaSuspensa = () => {
  return (
    // Centralizado horizontalmente com margem inferior
    <div className="flex justify-center mb-6">
      <button className="flex items-center gap-3 border-2 border-blue-600 text-blue-600 rounded-full px-4 py-1.5 hover:bg-blue-50 transition font-inter">
        {/* Botão destacado */}
        <span className="px-2 py-0.5 rounded-full border border-blue-600 font-poppins font-bold text-sm">
          Confira
        </span>

        {/* Texto complementar */}
        <span className="text-sm font-medium font-inter">
          Nossa Biblioteca Especializada
        </span>

        {/* Ícone */}
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default ListaSuspensa;
