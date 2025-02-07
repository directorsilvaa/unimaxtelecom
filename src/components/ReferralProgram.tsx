import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Gift, Coins, ArrowRight, Share2, Award, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReferralProgram = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: <Share2 size={32} />,
      title: 'Compartilhe',
      description: 'Indique a Unimax para amigos e familiares usando seu código exclusivo',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users size={32} />,
      title: 'Amigo Assina',
      description: 'Quando seu amigo contratar qualquer plano da Unimax usando seu código',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Gift size={32} />,
      title: 'Todos Ganham',
      description: 'Você e seu amigo recebem um mês de internet grátis automaticamente',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle size={20} />,
      text: 'Indicações ilimitadas'
    },
    {
      icon: <CheckCircle size={20} />,
      text: 'Benefício instantâneo'
    },
    {
      icon: <CheckCircle size={20} />,
      text: 'Válido para todos os planos'
    },
    {
      icon: <CheckCircle size={20} />,
      text: 'Compartilhamento fácil'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/10 rounded-full blur-3xl"></div>
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
              <span className="text-white font-medium">Programa de Indicação</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Indique Amigos e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Ganhe Prêmios
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Compartilhe a melhor internet com seus amigos e ganhe benefícios exclusivos. 
            Quanto mais você indica, mais você ganha!
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <motion.div
                className="h-full relative glass-effect rounded-2xl p-8 border border-gray-800 backdrop-blur-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>

                {/* Icon Container */}
                <div className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${step.color} p-0.5`}>
                  <div className="absolute inset-0 bg-gray-900/90 rounded-xl" />
                  <div className="relative h-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>

                {/* Hover Effect */}
                {hoveredStep === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-20 rounded-2xl blur-xl -z-10`}></div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Coins className="text-yellow-400" size={24} />
                <h3 className="text-2xl font-bold text-white">Benefícios do Programa</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-green-400">{benefit.icon}</span>
                    <span className="text-gray-300">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="space-y-4"
                whileHover={{ scale: 1.02 }}
              >
                <Link
                  to="/indicar"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Zap size={20} />
                  <span>Começar a Indicar Agora</span>
                </Link>
              </motion.div>
            </div>

            {/* Rewards Display */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="glass-effect rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-green-400 mb-2">1 Mês</div>
                <p className="text-gray-300">Grátis para você</p>
                <div className="mt-4 text-sm text-gray-400">Por cada indicação</div>
              </motion.div>

              <motion.div
                className="glass-effect rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-green-400 mb-2">1 Mês</div>
                <p className="text-gray-300">Grátis para seu amigo</p>
                <div className="mt-4 text-sm text-gray-400">Na primeira fatura</div>
              </motion.div>

              <motion.div
                className="col-span-2 glass-effect rounded-xl p-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Seu código de indicação</div>
                    <div className="text-xl font-mono font-bold text-green-400">UNIMAX2024</div>
                  </div>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                    <Share2 size={16} />
                    <span>Copiar</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferralProgram;