import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Wifi } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isClientArea = location.pathname === '/cliente';
  const isReferralSystem = location.pathname === '/indicar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Planos', href: '#plans' },
    { label: 'Sobre', href: '#about' },
    { label: 'Cobertura', href: '#coverage' },
    { label: 'Contato', href: '#contact' }
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isClientArea || isReferralSystem
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Wifi className={`h-8 w-8 ${scrolled || isClientArea || isReferralSystem ? 'text-green-600' : 'text-white'}`} />
              <span className={`font-bold text-xl ${
                scrolled || isClientArea || isReferralSystem ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}>
                Unimax
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {!isClientArea && !isReferralSystem && menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400'
                    : 'text-white/90 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                scrolled || isClientArea || isReferralSystem
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className={scrolled || isClientArea || isReferralSystem ? 'text-gray-700 dark:text-white' : 'text-white'} size={20} />
              ) : (
                <Moon className={scrolled || isClientArea || isReferralSystem ? 'text-gray-700 dark:text-white' : 'text-white'} size={20} />
              )}
            </motion.button>

            <Link
              to={isClientArea || isReferralSystem ? "/" : "/cliente"}
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              {isClientArea || isReferralSystem ? 'Voltar ao Site' : 'Área do Cliente'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={scrolled || isClientArea || isReferralSystem ? 'text-gray-900 dark:text-white' : 'text-white'} size={24} />
            ) : (
              <Menu className={scrolled || isClientArea || isReferralSystem ? 'text-gray-900 dark:text-white' : 'text-white'} size={24} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end mb-8">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="text-gray-900 dark:text-white" size={24} />
                </motion.button>
              </div>
              
              <div className="flex flex-col space-y-4">
                {!isClientArea && !isReferralSystem && menuItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400"
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  to={isClientArea || isReferralSystem ? "/" : "/cliente"}
                  className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors text-center block"
                  onClick={() => setIsOpen(false)}
                >
                  {isClientArea || isReferralSystem ? 'Voltar ao Site' : 'Área do Cliente'}
                </Link>
                
                <div className="mt-6 flex justify-center">
                  <motion.button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isDark ? (
                      <Sun className="text-gray-900 dark:text-white" size={24} />
                    ) : (
                      <Moon className="text-gray-900 dark:text-white" size={24} />
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;