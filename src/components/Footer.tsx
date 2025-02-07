import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="Unimax Telecom" className="h-8 mb-4" />
            <p className="text-gray-400">
              Conectando você ao futuro com a melhor internet da região.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#plans" className="text-gray-400 hover:text-white">Planos</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">Sobre</a></li>
              <li><a href="#coverage" className="text-gray-400 hover:text-white">Cobertura</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="/cliente" className="text-gray-400 hover:text-white">Área do Cliente</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Segunda Via</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Teste de Velocidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Unimax Telecom. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;