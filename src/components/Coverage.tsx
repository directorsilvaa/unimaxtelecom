import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, CheckCircle, MapIcon, Building2, Home, Zap } from 'lucide-react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Remova o ícone padrão do Leaflet que pode causar problemas
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: null,
  iconUrl: null,
  shadowUrl: null,
});

const Coverage = () => {
  const [cep, setCep] = useState('');
  const [activeTab, setActiveTab] = useState<'residential' | 'business'>('residential');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  // Centro do mapa em Feira de Santana
  const center = [-12.2667, -38.9667];
  
  // Áreas de cobertura simuladas
  const coverageAreas = [
    { center: [-12.2667, -38.9667], radius: 5000, name: 'Centro' },
    { center: [-12.2567, -38.9567], radius: 3000, name: 'Zona Norte' },
    { center: [-12.2767, -38.9767], radius: 4000, name: 'Zona Sul' },
  ];

  const features = [
    {
      icon: <MapPin size={24} />,
      title: 'Ampla Cobertura',
      description: 'Presente nos principais bairros da cidade'
    },
    {
      icon: <Zap size={24} />,
      title: 'Instalação Rápida',
      description: 'Instalação em até 24 horas após aprovação'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Disponibilidade',
      description: 'Verificação instantânea de disponibilidade'
    }
  ];

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
      setCep(value.replace(/(\d{5})(\d{3})/, '$1-$2'));
    }
  };

  const MapUpdater = () => {
    const map = useMap();
    React.useEffect(() => {
      map.invalidateSize();
    }, [map]);
    return null;
  };

  return (
    <section id="coverage" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
              <MapIcon className="text-green-400" size={20} />
              <span className="text-white font-medium">Área de Cobertura</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Descubra se a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Unimax
            </span>{' '}
            está disponível para você
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Verifique a disponibilidade do nosso serviço em sua região e conheça todos os benefícios de ter a melhor internet.
          </p>
        </motion.div>

        {/* Type Selector */}
        <div className="flex justify-center mb-12">
          <motion.div
            className="glass-effect rounded-full p-1 inline-flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setActiveTab('residential')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'residential'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Home size={20} />
              <span>Residencial</span>
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'business'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Building2 size={20} />
              <span>Empresarial</span>
            </button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Search and Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* CEP Search */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Consulte a disponibilidade
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={cep}
                    onChange={handleCepChange}
                    placeholder="Digite seu CEP"
                    className="w-full px-4 py-3 pl-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <MapPin size={20} />
                  <span>Verificar Disponibilidade</span>
                </button>
              </div>
            </div>

            {/* Features */}
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
                      <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>

                  {hoveredFeature === index && (
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl -z-10"></div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-2 h-[600px]"
          >
            <MapContainer
              center={center}
              zoom={13}
              style={{ height: '100%', width: '100%', borderRadius: '1rem' }}
              zoomControl={false}
            >
              <MapUpdater />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {coverageAreas.map((area, index) => (
                <Circle
                  key={index}
                  center={area.center as L.LatLngExpression}
                  radius={area.radius}
                  pathOptions={{
                    color: '#10b981',
                    fillColor: '#10b981',
                    fillOpacity: 0.2,
                  }}
                >
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-bold text-gray-900">Região {area.name}</h3>
                      <p className="text-sm text-gray-600">Cobertura disponível</p>
                    </div>
                  </Popup>
                </Circle>
              ))}
            </MapContainer>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Não encontrou sua região? Entre em contato conosco para verificar a expansão da rede.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-green-400 hover:text-green-300 mt-2 transition-colors"
          >
            <span>Falar com um consultor</span>
            <MapPin className="ml-2" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Coverage;