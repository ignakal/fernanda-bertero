import React from 'react';
import { Mail, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl text-[#1F5670]">Empecemos a transformar tu imagen</h2>
            <p className="font-sans text-[#1F5670]/80 text-lg">
              Si estás lista para alinear tu guardarropa con tus metas y sentirte más liviana, escribime. 
              Estoy aquí para guiarte en el proceso.
            </p>
            
            <div className="flex flex-col items-center space-y-6 pt-4">
              <div className="flex items-center space-x-4 text-[#1F5670]">
                <Mail className="text-[#D42D6F]" />
                <span className="font-sans font-medium">contacto@fernanda.bertero.com.ar</span>
              </div>
              <div className="flex items-center space-x-4 text-[#1F5670]">
                <Instagram className="text-[#D42D6F]" />
                <span className="font-sans font-medium">@fernanda.bertero</span>
              </div>
            </div>
          </div>

        <div className="border-t border-[#1F5670]/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#1F5670]/60 text-sm font-sans">
              &copy; {new Date().getFullYear()} Fernanda Bertero. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[#1F5670]/60 hover:text-[#D42D6F] text-sm transition">Términos</a>
              <a href="#" className="text-[#1F5670]/60 hover:text-[#D42D6F] text-sm transition">Privacidad</a>
            </div>
        </div>
      </div>
    </section>
  );
};