import React from 'react';
import { Layers, Palette, ShoppingBag } from 'lucide-react';

const services = [
  {
    title: "Detox de Guardarropa",
    description: "Ordenamos tu espacio para ordenar tu mensaje. Eliminamos el ruido visual para que vestirte sea un acto de claridad y placer, no de estrés.",
    icon: <Layers size={40} />,
    color: "border-[#D42D6F]"
  },
  {
    title: "Análisis de Estilo y Color",
    description: "Descubrimos la paleta que potencia tu energía natural y definimos las líneas que acompañan tu estilo de vida y objetivos.",
    icon: <Palette size={40} />,
    color: "border-[#1F5670]"
  },
  {
    title: "Personal Shopper Consciente",
    description: "Compras estratégicas, no impulsivas. Te enseño a elegir prendas que sean inversiones a largo plazo alineadas con tu intención.",
    icon: <ShoppingBag size={40} />,
    color: "border-[#E37547]"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#1F5670] text-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">Mis Servicios</h2>
          <p className="font-sans text-[#E8E4DF]/70 max-w-2xl mx-auto">
            Propuestas diseñadas para alinear tu interior con tu exterior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-sm p-8 rounded-sm hover:bg-white/10 transition-all duration-300 border-t-4 ${service.color} group`}
            >
              <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4 text-white">{service.title}</h3>
              <p className="font-sans text-[#E8E4DF]/80 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-8 text-sm uppercase tracking-widest font-medium border-b border-transparent hover:border-white transition-all pb-1">
                Saber más
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};