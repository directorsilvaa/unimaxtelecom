import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, CheckCircle, Zap } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create shooting stars
    const createShootingStar = () => {
      if (!containerRef.current) return;
      
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      containerRef.current.appendChild(star);

      star.addEventListener('animationend', () => {
        star.remove();
      });
    };

    // Create data streams
    const createDataStream = () => {
      if (!containerRef.current) return;
      
      const stream = document.createElement('div');
      stream.className = 'data-stream';
      stream.style.left = `${Math.random() * 100}%`;
      stream.style.height = `${Math.random() * 100 + 50}px`;
      containerRef.current.appendChild(stream);

      stream.addEventListener('animationend', () => {
        stream.remove();
      });
    };

    const shootingStarInterval = setInterval(createShootingStar, 2000);
    const dataStreamInterval = setInterval(createDataStream, 500);

    return () => {
      clearInterval(shootingStarInterval);
      clearInterval(dataStreamInterval);
    };
  }, []);

  const features = [
    'Velocidade garantida',
    'Wi-Fi 6 de última geração',
    'Instalação em até 24h'
  ];

  return (
    <section id="home" className="pt-20 min-h-screen relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900">
      {/* Animated background container */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block glass-effect rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-2">
                <Award className="text-yellow-400" size={24} />
                <span className="text-white font-medium">Líder em satisfação</span>
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Velocidade Máxima,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Conexão Ilimitada
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A internet que você sempre quis. Planos ultra rápidos, estabilidade máxima.
            </motion.p>

            <motion.div
              className="glass-effect rounded-xl p-6 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-white">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#plans"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 animate-pulse-green"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Assine Agora
                <Zap className="ml-2" size={20} />
              </motion.a>
              <motion.a
                href="#speed-test"
                className="inline-flex items-center glass-effect text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Teste sua Conexão
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative animate-float">
              <img
                src="https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?auto=format&fit=crop&w=1200&q=80"
                alt="Conexão digital de alta velocidade"
                className="rounded-2xl shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-xl shadow-xl backdrop-blur-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-green-400 font-bold text-4xl mb-1">800</div>
                  <div className="text-white font-semibold">MEGA</div>
                  <div className="text-green-400 font-bold mt-2">R$ 99,90<span className="text-sm font-normal">/mês</span></div>
                  <p className="text-white/80 text-sm mt-1">com Wi-Fi grátis</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;