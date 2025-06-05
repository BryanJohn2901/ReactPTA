// src/components/Faq.jsx
import React, { useState } from 'react';

const perguntas = [
    { q: '1. Qual a carga horária do curso?', a: '360 horas.' },
    { q: '2. Qual a duração da pós-graduação?', a: '18 meses.' },
    { q: '3. Quando acontecem as aulas ao vivo?', a: 'Um fim de semana por mês: sábado (13h30–18h) e domingo (8h–12h30).' },
    { q: '4. Como assinar o contrato?', a: 'O contrato é assinado eletronicamente pelo link enviado após a matrícula.' },
    { q: '5. Qual documento de identificação é aceito?', a: 'Apenas RG (emitido nos últimos 10 anos). CNH não é aceita.' },
    { q: '6. Quais os requisitos para a certificação?', a: 'Entrega de documentação, aprovação (nota mínima de 70%), quitação financeira e autorização do MEC.' },
    { q: '7. Qual o prazo das avaliações?', a: '45 dias para submissão após a conclusão de cada módulo.' },
    {
        q: '8. Quantos e quais módulos compõem o curso?',
        a: (
            <ul className="list-disc pl-4">
                <li>Treinamento para gestantes</li>
                <li>Reabilitação musculoesquelética</li>
                <li>Biohacking, Marketing Digital</li>
                <li>Fisiologia hormonal feminina</li>
                <li>Nutrição e treinamento específico para mulheres</li>
            </ul>
        )
    },
    { q: '9. A Pós tem TCC?', a: 'Não, o TCC não é obrigatório.' },
    { q: '10. O que fazer se estiver sem acesso à plataforma?', a: 'Verifique os dados de login; em caso de problemas, contate o suporte: (41) 99982-4070.' },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black text-white py-20 px-6">
            {/* Cabeçalho */}
            <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-sm text-purple-400 font-bold font-poppins">F.A.Q.</span>
                <h2 className="text-[24px] md:text-[32px] font-bold font-poppins">Perguntas Frequentes</h2>
                <p className="text-[14px] font-nunito mt-2">
                    Ficou com mais alguma dúvida? Tire rapidamente pelo WhatsApp da nossa equipe!
                </p>
                <button className="mt-4 bg-purple-500 hover:bg-purple-600 transition text-white font-bold py-3 px-6 rounded-lg">
                    TIRAR DÚVIDAS
                </button>
            </div>

            {/* Grid de perguntas */}
            <div className="grid md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
                {perguntas.map((item, index) => (
                    <div key={index}>
                        <button
                            onClick={() => toggle(index)}
                            className="w-full text-left px-4 py-3 rounded-xl font-nunito text-white bg-gradient-to-r from-purple-500 to-[#321562] transition"
                        >
                            {item.q}
                        </button>
                        {openIndex === index && (
                            <div className="text-[14px] md:text-[16px] text-white mt-2 px-4 font-nunito">
                                {typeof item.a === 'string' ? <p>{item.a}</p> : item.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
