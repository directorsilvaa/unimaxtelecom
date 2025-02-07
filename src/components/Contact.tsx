import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, MapPin, Clock, Zap, Send, Award, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: 'Central de Atendimento',
      info: '0800 000 000',
      action: 'Ligar agora',
      link: 'tel:0800000000',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'WhatsApp',
      info: 'Atendimento instantâneo',
      action: 'Iniciar conversa',
      link: 'https://wa.me/5500000000000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail size={24} />,
      title: 'E-mail',
      info: 'contato@unimax.com.br',
      action: 'Enviar e-mail',
      link: 'mailto:contato@unimax.com.br',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio
    console.log('Form data:', formData);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl"></div>
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
              <Award className="text-green-400" size={20} />
              <span className="text-white font-medium">Suporte Premium 24/7</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fale com a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Unimax
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Estamos sempre prontos para atender você da melhor forma possível.
            Escolha o canal de atendimento de sua preferência.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
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
                <div className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${method.color} p-0.5`}>
                  <div className="absolute inset-0 bg-gray-900/90 rounded-xl" />
                  <div className="relative h-full flex items-center justify-center text-white">
                    {method.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 mb-6">{method.info}</p>

                <motion.a
                  href={method.link}
                  className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>{method.action}</span>
                  <ArrowRight size={16} />
                </motion.a>

                {hoveredCard === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-20 rounded-2xl blur-xl -z-10`}></div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Envie sua mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>Enviar mensagem</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Business Hours and Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Business Hours */}
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                  <Clock size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Horário de Atendimento</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Segunda a Sexta</span>
                  <span>8h às 20h</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Sábado</span>
                  <span>9h às 15h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-semibold">Suporte Técnico</span>
                  <span className="text-green-400 font-semibold">24 horas</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                  <MapPin size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Localização</h3>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>Av. Principal, 1000</p>
                <p>Centro - Feira de Santana/BA</p>
                <p>CEP: 44000-000</p>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Resposta Rápida</h3>
              </div>
              
              <p className="text-gray-300">
                Nossa equipe está pronta para atender você. Respondemos todas as mensagens em até 2 horas durante o horário comercial.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;