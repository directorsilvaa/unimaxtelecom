import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Copy, Gift, Users, ArrowRight, Award, CheckCircle, Smartphone } from 'lucide-react';

const ReferralSystem = () => {
  const [referralCode] = useState('UNIMAX2024');
  const [copied, setCopied] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    {
      name: 'WhatsApp',
      message: `Olá! Use meu código ${referralCode} e ganhe 1 mês grátis na Unimax Telecom! 🚀`,
      url: `https://wa.me/?text=Olá!%20Use%20meu%20código%20${referralCode}%20e%20ganhe%201%20mês%20grátis%20na%20Unimax%20Telecom!%20🚀`,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Telegram',
      message: `Olá! Use meu código ${referralCode} e ganhe 1 mês grátis na Unimax Telecom! 🚀`,
      url: `https://t.me/share/url?url=&text=Olá!%20Use%20meu%20código%20${referralCode}%20e%20ganhe%201%20mês%20grátis%20na%20Unimax%20Telecom!%20🚀`,
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const stats = [
    { label: 'Indicações', value: '0' },
    { label: 'Conversões', value: '0' },
    { label: 'Ganhos', value: 'R$ 0,00' }
  ];

  return (
    <section className="min-h-screen py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block glass-effect rounded-full px-4 py-2 mb-4"
          >
            <div className="flex items-center space-x-2">
              <Award className="text-green-400" size={20} />
              <span className="text-white font-medium">Programa de Indicação</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Seu código de indicação é{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              {referralCode}
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Stats and Code */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Referral Code Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect rounded-xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Seu Código</h3>
                  <p className="text-gray-400">Compartilhe este código com seus amigos</p>
                </div>
                <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                  <Share2 size={24} />
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-1 glass-effect rounded-lg p-4">
                  <code className="text-2xl font-mono text-green-400">{referralCode}</code>
                </div>
                <motion.button
                  onClick={handleCopyCode}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                >
                  {copied ? <CheckCircle size={24} /> : <Copy size={24} />}
                </motion.button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {shareOptions.map((option, index) => (
                  <motion.a
                    key={index}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-2 p-3 rounded-lg bg-gradient-to-r ${option.color} text-white font-medium`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Share2 size={20} />
                    <span>Compartilhar no {option.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - How it Works */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-xl p-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                <Gift size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Como Funciona</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                  1
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Compartilhe seu código</h4>
                  <p className="text-gray-400">
                    Envie seu código único para amigos e familiares que ainda não são clientes Unimax
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                  2
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Seu amigo assina</h4>
                  <p className="text-gray-400">
                    Quando seu amigo contratar qualquer plano usando seu código
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                  3
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Todos ganham!</h4>
                  <p className="text-gray-400">
                    Você e seu amigo recebem 1 mês de internet grátis cada
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 glass-effect rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10">
              <div className="flex items-center space-x-3 mb-4">
                <Smartphone size={24} className="text-green-400" />
                <h4 className="text-white font-semibold">Baixe nosso app</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Acompanhe suas indicações e ganhos diretamente pelo nosso aplicativo
              </p>
              <div className="flex space-x-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-10"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSystem;