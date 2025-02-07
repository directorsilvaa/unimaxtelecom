import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Zap, Shield, Clock, MessageSquare, CreditCard, Users, Building2, Home, Server, Globe, Database } from 'lucide-react';

const Plans = () => {
  const [planType, setPlanType] = useState<'residential' | 'business'>('residential');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const residentialPlans = [
    {
      name: 'MEGA 400',
      speed: 400,
      price: 79.90,
      highlight: 'Ideal para streaming e home office',
      features: [
        { icon: <Wifi size={20} />, text: 'Wi-Fi 6 Grátis' },
        { icon: <Shield size={20} />, text: 'Proteção contra ataques' },
        { icon: <Clock size={20} />, text: 'Instalação em 24h' },
        { icon: <MessageSquare size={20} />, text: 'Suporte 24/7' }
      ]
    },
    {
      name: 'MEGA 600',
      speed: 600,
      price: 99.90,
      highlight: 'Perfect para gamers e criadores',
      features: [
        { icon: <Wifi size={20} />, text: 'Wi-Fi 6 Grátis' },
        { icon: <Shield size={20} />, text: 'Proteção Premium' },
        { icon: <Clock size={20} />, text: 'Instalação Express' },
        { icon: <MessageSquare size={20} />, text: 'Suporte Prioritário' },
        { icon: <CreditCard size={20} />, text: 'Desconto em Apps' }
      ]
    },
    {
      name: 'MEGA 800',
      speed: 800,
      price: 129.90,
      highlight: 'Máxima performance para sua casa',
      features: [
        { icon: <Wifi size={20} />, text: 'Wi-Fi 6E Ultimate' },
        { icon: <Shield size={20} />, text: 'Segurança Avançada' },
        { icon: <Clock size={20} />, text: 'Instalação Imediata' },
        { icon: <MessageSquare size={20} />, text: 'Suporte VIP' },
        { icon: <CreditCard size={20} />, text: 'Benefícios Premium' }
      ]
    }
  ];

  const businessPlans = [
    {
      name: 'BUSINESS 1GB',
      speed: 1000,
      price: 299.90,
      highlight: 'Para pequenas empresas',
      features: [
        { icon: <Wifi size={20} />, text: 'Wi-Fi 6E Enterprise' },
        { icon: <Shield size={20} />, text: 'Firewall Dedicado' },
        { icon: <Server size={20} />, text: 'IP Fixo Grátis' },
        { icon: <Clock size={20} />, text: 'SLA 4h' },
        { icon: <MessageSquare size={20} />, text: 'Suporte Empresarial' }
      ]
    },
    {
      name: 'BUSINESS 2GB',
      speed: 2000,
      price: 499.90,
      highlight: 'Para médias empresas',
      features: [
        { icon: <Wifi size={20} />, text: 'Wi-Fi 6E Enterprise' },
        { icon: <Shield size={20} />, text: 'Segurança Avançada' },
        { icon: <Server size={20} />, text: 'Bloco IP /29' },
        { icon: <Database size={20} />, text: 'Link Dedicado' },
        { icon: <Clock size={20} />, text: 'SLA 2h' },
        { icon: <Globe size={20} />, text: 'Redundância 4G' }
      ]
    },
    {
      name: 'BUSINESS 5GB',
      speed: 5000,
      price: 899.90,
      highlight: 'Para grandes empresas',
      features: [
        { icon: <Wifi size={20} />, text: 'Wi-Fi 6E Enterprise' },
        { icon: <Shield size={20} />, text: 'SOC Dedicado' },
        { icon: <Server size={20} />, text: 'Bloco IP /28' },
        { icon: <Database size={20} />, text: 'Link Ultra Dedicado' },
        { icon: <Clock size={20} />, text: 'SLA 30min' },
        { icon: <Globe size={20} />, text: 'Redundância Fibra' },
        { icon: <Users size={20} />, text: 'Gestor de Conta' }
      ]
    }
  ];

  const currentPlans = planType === 'residential' ? residentialPlans : businessPlans;

  return (
    <section id="plans" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-green-500/10 rounded-full blur-3xl"></div>
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
              <Zap className="text-green-400" size={20} />
              <span className="text-white font-medium">Planos para todos os perfis</span>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Escolha o plano ideal para você
          </h2>

          {/* Plan Type Toggle */}
          <div className="flex justify-center mb-12">
            <motion.div
              className="glass-effect rounded-full p-1 inline-flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => setPlanType('residential')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  planType === 'residential'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Home size={20} />
                <span>Residencial</span>
              </button>
              <button
                onClick={() => setPlanType('business')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  planType === 'business'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Building2 size={20} />
                <span>Empresarial</span>
              </button>
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={planType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {currentPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                <motion.div
                  className={`h-full relative glass-effect rounded-2xl p-8 border border-gray-800 backdrop-blur-xl transition-all duration-300 ${
                    hoveredPlan === index ? 'bg-white/15' : 'bg-white/5'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Speed Badge */}
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full px-6 py-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="text-white font-bold">
                      {plan.speed >= 1000 
                        ? `${plan.speed/1000}GB`
                        : `${plan.speed}MB`}
                    </span>
                  </motion.div>

                  {/* Plan Content */}
                  <div className="text-center mt-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.highlight}</p>
                    
                    <div className="mb-8">
                      <span className="text-4xl font-bold text-green-400">R$ {plan.price.toFixed(2)}</span>
                      <span className="text-gray-400">/mês</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center space-x-3 text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                        >
                          <span className="text-green-400">{feature.icon}</span>
                          <span>{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                        hoveredPlan === index
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {planType === 'residential' ? 'Assinar Agora' : 'Falar com Consultor'}
                    </motion.button>
                  </div>

                  {/* Highlight Effect */}
                  {hoveredPlan === index && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl -z-10"></div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            {planType === 'residential'
              ? 'Todos os planos incluem instalação grátis e Wi-Fi de última geração'
              : 'Planos empresariais incluem suporte dedicado e SLA garantido'}
          </p>
          {planType === 'residential' ? (
            <a
              href="#contact"
              className="text-green-400 hover:text-green-300 transition-colors font-medium"
            >
              Fale com um consultor para planos empresariais personalizados
            </a>
          ) : (
            <a
              href="#contact"
              className="text-green-400 hover:text-green-300 transition-colors font-medium"
            >
              Precisa de um plano personalizado? Entre em contato
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Plans;