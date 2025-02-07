import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Headphones, Unlock, Shield, Award, Clock, Wifi, Users, Server, Globe } from 'lucide-react';

const Advantages = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const advantages = [
    {
      icon: <Zap size={32} />,
      title: 'Ultra Velocidade',
      description: 'Internet de alta performance com tecnologia de ponta',
      stats: ['99.9%', 'Uptime'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Headphones size={32} />,
      title: 'Suporte 24/7',
      description: 'Equipe técnica especializada disponível 24 horas',
      stats: ['< 30min', 'Resposta'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Unlock size={32} />,
      title: 'Sem Fidelidade',
      description: 'Liberdade para escolher quanto tempo quer ficar',
      stats: ['100%', 'Flexível'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: <Shield size={32} />,
      title: 'Máxima Segurança',
      description: 'Proteção avançada para sua conexão',
      stats: ['24/7', 'Proteção'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const features = [
    { icon: <Server />, text: 'Servidores de última geração' },
    { icon: <Globe />, text: 'Conexão internacional' },
    { icon: <Users />, text: 'Atendimento humanizado' },
    { icon: <Wifi />, text: 'Wi-Fi 6 incluso' },
    { icon: <Clock />, text: 'Instalação expressa' }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block glass-effect rounded-full px-4 py-2 mb-4"
          >
            <div className="flex items-center space-x-2">
              <Award className="text-green-400" size={20} />
              <span className="text-white font-medium">Líder em Satisfação</span>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Por que escolher a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Unimax
            </span>?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubra como nossa tecnologia de ponta e atendimento personalizado podem transformar sua experiência de internet
          </p>
        </motion.div>

        {/* Main Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="h-full relative glass-effect rounded-2xl p-8 border border-gray-800 backdrop-blur-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Icon Container */}
                <div className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${advantage.color} p-0.5`}>
                  <div className="absolute inset-0 bg-gray-900/90 rounded-xl" />
                  <div className="relative h-full flex items-center justify-center text-white">
                    {advantage.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-400 mb-6">{advantage.description}</p>

                {/* Stats */}
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-green-400">{advantage.stats[0]}</div>
                  <div className="text-sm text-gray-400">{advantage.stats[1]}</div>
                </div>

                {/* Hover Effect */}
                {hoveredCard === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${advantage.color} opacity-20 rounded-2xl blur-xl -z-10`}></div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Recursos Exclusivos
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                      {feature.icon}
                    </div>
                    <span className="text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                alt="Tecnologia de ponta"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;