import React from 'react';
import { Quote } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[#1F5670] mb-4">La Imagen Consciente</h2>
          <div className="w-24 h-1 bg-[#E37547] mx-auto"></div>
        </div>

        <div className="grid gap-12">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
               <div className="w-16 h-16 rounded-full bg-[#1F5670]/10 flex items-center justify-center text-[#D42D6F]">
                 <Quote size={32} />
               </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-[#1F5670]">Hola, soy Fernanda Bertero</h3>
              <p className="font-sans text-[#1F5670]/80 leading-relaxed text-lg">
                Y te quiero contar que la imagen que elegís cada mañana influye en cómo te sentís, 
                cómo te movés y cómo te mostrás al mundo. Tu imagen no es superficial. 
                <span className="font-semibold text-[#D42D6F]"> Es una herramienta.</span>
              </p>
            </div>
          </div>

          {/* Highlight Section */}
          <div className="bg-[#E8E4DF] p-10 rounded-tr-[50px] rounded-bl-[50px] border-l-4 border-[#1F5670] shadow-sm my-8">
            <p className="font-serif text-xl md:text-2xl text-[#1F5670] italic text-center">
              "Vestir con intención transforma la rutina. Cuando tu imagen está alineada con vos, 
              todo fluye mejor: tu tiempo, tu seguridad y tu vida diaria."
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-8">
            <div className="flex-shrink-0">
               <div className="w-16 h-16 rounded-full bg-[#E37547]/10 flex items-center justify-center text-[#E37547]">
                 <span className="font-serif text-3xl font-bold">O</span>
               </div>
            </div>
            <div className="space-y-4 text-right md:text-left">
              <h3 className="font-serif text-2xl text-[#1F5670] text-right">El Poder del Orden</h3>
              <p className="font-sans text-[#1F5670]/80 leading-relaxed text-lg text-right">
                El orden en tu guardarropa es el primer paso hacia una vida más liviana y consciente. 
                Cuando ordenás tu guardarropa, ordenás tu mensaje, tu energía y tu día. 
                <span className="block mt-2 font-medium text-[#1F5670]">La imagen también se construye desde el orden.</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};