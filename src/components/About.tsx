import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Zap, Target, Star, Heart, Download, Monitor, Share2, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Download className="w-6 h-6" />,
      title: 'Downloads Rápidos',
      description: 'Baixe arquivos em questão de segundos com nossa conexão ultra veloz'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Streaming Sem Pausas',
      description: 'Assista suas séries e filmes favoritos em 4K sem interrupções'
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: 'Compartilhamento',
      description: 'Transfira arquivos e navegue nas redes sociais com total fluidez'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Clientes Satisfeitos' },
    { value: '98%', label: 'Uptime Garantido' },
    { value: '24/7', label: 'Suporte Técnico' },
    { value: '1Gbps', label: 'Velocidade Máxima' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
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
              <span className="text-white font-medium">Líder em Feira de Santana</span>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conectando Você ao{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Futuro
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=1200&q=80"
                alt="Rede de Fibra Óptica"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              
              {/* Stats Grid */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-effect">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                A Unimax Telecom chegou em Feira de Santana e região para revolucionar sua experiência de navegação. 
                Com nossa extensa rede de Fibra Óptica, levamos velocidade extraordinária diretamente até sua casa!
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="glass-effect rounded-xl p-6 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Target />, title: 'Missão', text: 'Fornecer internet de alta qualidade, contribuindo para o desenvolvimento digital da região.' },
            { icon: <Star />, title: 'Visão', text: 'Ser referência em telecomunicações, reconhecida pela excelência em serviços.' },
            { icon: <Heart />, title: 'Valores', text: 'Comprometimento, transparência e inovação em tudo que fazemos.' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="glass-effect rounded-xl p-8 text-center hover:bg-white/5 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-400 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;