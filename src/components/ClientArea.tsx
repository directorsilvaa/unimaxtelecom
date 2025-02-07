import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Lock, CreditCard, FileText, Wifi, Download, 
  BarChart2, Bell, Settings, HelpCircle, Smartphone,
  ChevronRight, CheckCircle, AlertTriangle, Mail,
  Phone, Eye, EyeOff, ArrowRight, UserPlus
} from 'lucide-react';

const ClientArea = () => {
  const [loginData, setLoginData] = useState({
    document: '',
    password: '',
    rememberMe: false
  });

  const [registerData, setRegisterData] = useState({
    document: '',
    contract: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegisterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data:', loginData);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      console.log('Register data:', registerData);
    }
  };

  const handleBackStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const features = [
    {
      icon: <CreditCard size={24} />,
      title: '2ª Via de Fatura',
      description: 'Acesse suas faturas e realize pagamentos',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <BarChart2 size={24} />,
      title: 'Consumo em Tempo Real',
      description: 'Monitore o uso da sua internet',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Wifi size={24} />,
      title: 'Gestão do Wi-Fi',
      description: 'Configure sua rede sem fio',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const quickActions = [
    { icon: <FileText size={20} />, text: 'Minhas faturas' },
    { icon: <Download size={20} />, text: 'Velocidade da internet' },
    { icon: <Bell size={20} />, text: 'Notificações' },
    { icon: <Settings size={20} />, text: 'Configurações' }
  ];

  const renderRegisterStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div>
              <label htmlFor="register-document" className="block text-sm font-medium text-gray-300 mb-2">
                CPF / CNPJ
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="register-document"
                  name="document"
                  value={registerData.document}
                  onChange={handleRegisterInputChange}
                  className="w-full px-4 py-3 pl-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Digite seu CPF ou CNPJ"
                  required
                />
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>

            <div>
              <label htmlFor="contract" className="block text-sm font-medium text-gray-300 mb-2">
                Número do Contrato
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="contract"
                  name="contract"
                  value={registerData.contract}
                  onChange={handleRegisterInputChange}
                  className="w-full px-4 py-3 pl-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Digite o número do seu contrato"
                  required
                />
                <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                E-mail
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterInputChange}
                  className="w-full px-4 py-3 pl-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Digite seu e-mail"
                  required
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Telefone
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={registerData.phone}
                  onChange={handleRegisterInputChange}
                  className="w-full px-4 py-3 pl-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Digite seu telefone"
                  required
                />
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div>
              <label htmlFor="register-password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="register-password"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterInputChange}
                  className="w-full px-4 py-3 pl-12 pr-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Crie uma senha forte"
                  required
                />
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-2">
                Confirme a Senha
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterInputChange}
                  className="w-full px-4 py-3 pl-12 pr-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Confirme sua senha"
                  required
                />
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={registerData.acceptTerms}
                onChange={handleRegisterInputChange}
                className="h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
              />
              <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-300">
                Li e aceito os{' '}
                <a href="#" className="text-green-400 hover:text-green-300">
                  termos de uso
                </a>{' '}
                e{' '}
                <a href="#" className="text-green-400 hover:text-green-300">
                  política de privacidade
                </a>
              </label>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Login/Register Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect rounded-2xl p-8 md:p-12">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <Wifi className="text-green-400" size={48} />
              </div>

              {/* Tab Selector */}
              <div className="flex justify-center mb-8">
                <motion.div
                  className="glass-effect rounded-full p-1 inline-flex"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={() => {
                      setActiveTab('login');
                      setCurrentStep(1);
                    }}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                      activeTab === 'login'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <User size={20} />
                    <span>Login</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('register');
                      setCurrentStep(1);
                    }}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                      activeTab === 'register'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <UserPlus size={20} />
                    <span>Primeiro Acesso</span>
                  </button>
                </motion.div>
              </div>

              {activeTab === 'login' ? (
                /* Login Form */
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="document" className="block text-sm font-medium text-gray-300 mb-2">
                      CPF / CNPJ
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="document"
                        name="document"
                        value={loginData.document}
                        onChange={handleLoginInputChange}
                        className="w-full px-4 py-3 pl-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Digite seu CPF ou CNPJ"
                        required
                      />
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                      Senha
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginInputChange}
                        className="w-full px-4 py-3 pl-12 pr-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Digite sua senha"
                        required
                      />
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={loginData.rememberMe}
                        onChange={handleLoginInputChange}
                        className="h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
                      />
                      <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-300">
                        Lembrar-me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-green-400 hover:text-green-300">
                      Esqueceu a senha?
                    </a>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Lock size={20} />
                    <span>Acessar</span>
                  </motion.button>
                </form>
              ) : (
                /* Register Form */
                <div>
                  {/* Progress Steps */}
                  <div className="flex items-center justify-between mb-8">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step <= currentStep
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                              : 'bg-white/10 text-gray-400'
                          }`}
                        >
                          {step}
                        </div>
                        {step < 3 && (
                          <div
                            className={`w-24 h-1 mx-2 rounded ${
                              step < currentStep
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                                : 'bg-white/10'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleRegisterSubmit} className="space-y-6">
                    {renderRegisterStep()}

                    <div className="flex justify-between">
                      {currentStep > 1 && (
                        <motion.button
                          type="button"
                          onClick={handleBackStep}
                          className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ArrowRight className="rotate-180" size={20} />
                          <span>Voltar</span>
                        </motion.button>
                      )}

                      <motion.button
                        type="submit"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center space-x-2 ml-auto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>{currentStep === 3 ? 'Finalizar' : 'Próximo'}</span>
                        {currentStep < 3 && <ArrowRight size={20} />}
                      </motion.button>
                    </div>
                  </form>
                </div>
              )}

              {/* Quick Actions */}
              {activeTab === 'login' && (
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h4 className="text-white font-semibold mb-4">Acesso Rápido</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {quickActions.map((action, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className="flex items-center space-x-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-green-400">{action.icon}</span>
                        <span>{action.text}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Central do{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Assinante
                </span>
              </h2>
              <p className="text-gray-300">
                Gerencie sua conta, acompanhe seu consumo e muito mais
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-xl p-6 transition-all duration-300"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white`}>
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                    <div className="ml-auto">
                      <ChevronRight className="text-gray-400" size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="glass-effect rounded-xl p-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 text-green-400 mb-2">
                  <CheckCircle size={24} />
                  <span className="font-semibold">Status do Serviço</span>
                </div>
                <p className="text-gray-300">Todos os serviços operando normalmente</p>
              </motion.div>

              <motion.div
                className="glass-effect rounded-xl p-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 text-yellow-400 mb-2">
                  <AlertTriangle size={24} />
                  <span className="font-semibold">Fatura Atual</span>
                </div>
                <p className="text-gray-300">Vencimento em 5 dias</p>
              </motion.div>
            </div>

            {/* App Download */}
            <motion.div
              className="glass-effect rounded-xl p-6 text-center"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Smartphone size={24} className="text-green-400" />
                <span className="text-white font-semibold">Baixe nosso aplicativo</span>
              </div>
              <div className="flex justify-center space-x-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
              </div>
            </motion.div>

            {/* Help Section */}
            <div className="text-center">
              <motion.a
                href="#"
                className="inline-flex items-center text-green-400 hover:text-green-300"
                whileHover={{ scale: 1.05 }}
              >
                <HelpCircle size={20} className="mr-2" />
                <span>Precisa de ajuda?</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientArea;