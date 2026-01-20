import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const heroImages = [
  "/img/G2.png",
//   "/img/R1.png",
//   "/img/R2.png",
//   "/img/R3.png"
];

export const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1F5670]/5 skew-x-12 transform origin-top-right z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E37547]/10 rounded-full blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="font-sans text-[#E37547] uppercase tracking-[0.2em] font-medium text-sm animate-fade-in-up">
              Asesora de Imagen
            </h2>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1F5670] leading-tight">
              Tu imagen es una <br/>
              <span className="italic text-[#D42D6F]">herramienta.</span>
            </h1>
            <p className="font-sans text-lg text-[#1F5670]/80 max-w-lg leading-relaxed border-l-4 border-[#E37547] pl-6">
              Vestir no es solo elegir ropa, es tomar decisiones alineadas con quién sos, cómo vivís y hacia dónde querés ir.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#philosophy" className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#D42D6F] hover:bg-[#b02258] transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl">
                Descubre mi filosofía
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#1F5670] border border-[#1F5670] hover:bg-[#1F5670] hover:text-white transition-all duration-300 rounded-sm">
                Ver servicios
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 h-[500px] lg:h-[700px] w-full group">
            {/* Organic shape mask for image */}
            <div className="absolute inset-0 bg-[#D42D6F]/10 rounded-tl-[100px] rounded-br-[100px] transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            
            <div className="relative w-full h-full rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl bg-gray-200">
              {heroImages.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Guardarropa Ordenado ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                    index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
              
              {/* Overlay gradient for better text contrast if needed, though mostly decorative here */}
              <div className="absolute inset-0 bg-[#1F5670]/10 mix-blend-multiply"></div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImage ? 'bg-white w-6' : 'bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};