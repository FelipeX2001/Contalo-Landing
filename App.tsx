import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, 
  CheckCircle2, 
  Shield, 
  Zap, 
  Smartphone, 
  Menu, 
  X, 
  Play,
  MessageSquareText,
  Clock,
  Sparkles,
  AlignLeft,
  PenTool,
  Keyboard,
  Globe,
  Users,
  Copy,
  Monitor,
  Bot,
  ChevronDown,
  ArrowRight,
  FileText,
  EarOff,
  AlertTriangle,
  Repeat,
  Quote,
  Brain,
  Layers
} from 'lucide-react';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import { WaitlistPage } from './components/WaitlistPage';

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Icons ---
const AndroidIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.523 15.3414C17.523 16.729 16.3964 17.8556 15.0088 17.8556C13.6211 17.8556 12.4946 16.729 12.4946 15.3414C12.4946 13.9538 13.6211 12.8271 15.0088 12.8271C16.3964 12.8271 17.523 13.9538 17.523 15.3414Z" />
    <path d="M7.85562 17.8556C6.46801 17.8556 5.34142 16.729 5.34142 15.3414C5.34142 13.9538 6.46801 12.8271 7.85562 12.8271C9.24323 12.8271 10.3698 13.9538 10.3698 15.3414C10.3698 16.729 9.24323 17.8556 7.85562 17.8556Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M0.132476 5.90606L2.73636 10.4158C1.06177 12.7445 0.0957031 15.5522 0.0957031 18.5741H23.7957C23.7957 15.5522 22.8297 12.7445 21.1551 10.4158L23.7589 5.90606C23.9559 5.56496 23.8387 5.12911 23.4976 4.93215C23.1565 4.73518 22.7206 4.85235 22.5237 5.19344L19.8619 9.80353C17.7474 8.6864 15.3179 8.05225 12.729 8.05225H11.1625C8.57354 8.05225 6.14399 8.6864 4.02951 9.80353L1.36776 5.19344C1.1708 4.85235 0.734948 4.73518 0.393853 4.93215C0.0527589 5.12911 -0.0644847 5.56496 0.132476 5.90606Z" />
  </svg>
);

const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 384 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
  </svg>
);

// --- Components ---

const Navbar = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Qué es', href: '#what-is' },
    { name: 'Problema', href: '#problem' },
    { name: 'Cómo funciona', href: '#how-it-works' },
    { name: 'Precios', href: '#pricing' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0300]/90 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Logo className="h-20 w-auto" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-contalo-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button size="sm" variant="primary" onClick={onJoinClick}>Únete al acceso anticipado</Button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0300] border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-contalo-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full" onClick={() => { setIsOpen(false); onJoinClick(); }}>Únete al acceso anticipado</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onJoinClick }: { onJoinClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-[#1a0500] via-[#0A0300] to-[#0A0300]">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-contalo-primary/15 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-contalo-danger/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="flex justify-center mb-8">
            <Logo className="h-40 md:h-48 w-auto drop-shadow-[0_0_15px_rgba(252,85,1,0.5)]" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            IA que escribe lo que quieres decir, <span className="text-transparent bg-clip-text bg-gradient-to-r from-contalo-primary via-contalo-secondary to-contalo-danger">a tu manera, a un toque.</span>
          </h1>
          
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10 font-light">
            Contalo convierte tus mensajes de voz en textos claros, bien escritos y listos para enviar, en segundos. 
            Hablas como siempre, se escribe mejor de lo que escribirías tú.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto" onClick={onJoinClick}>
              Únete al acceso anticipado
            </Button>
            <Button variant="secondary" icon={<Play size={20} />} size="lg" className="w-full sm:w-auto">
              Ver cómo funciona
            </Button>
          </div>

          {/* Micro Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-medium text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-contalo-primary animate-pulse" />
              One tap, texto listo
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-contalo-secondary" />
              Hecho para LATAM
            </div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-0.5 bg-white/10 rounded text-xs border border-white/10">Free</div>
              Planes desde $0 al mes
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhatIsContalo = () => {
  return (
    <section id="what-is" className="py-24 relative overflow-hidden bg-[#050200]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-contalo-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-contalo-primary mb-6">
              <Sparkles size={14} />
              <span>Inteligencia Artificial</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Tu forma de hablar, <br />
              <span className="text-gray-500">tu forma de escribir.</span> <br />
              <span className="text-contalo-primary">Sin esfuerzo.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300">
              <p className="leading-relaxed">
                Contalo es una herramienta impulsada por inteligencia artificial que transforma tus mensajes hablados en textos claros, organizados y con tu propio estilo. 
              </p>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-[#1a0a05] to-[#0A0300] rounded-3xl border border-white/10 p-8 shadow-2xl">
              {/* Visual Header */}
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-contalo-primary/20 flex items-center justify-center text-contalo-primary">
                    <Mic size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Grabando audio...</div>
                    <div className="text-xs text-gray-500">00:15</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="w-1 h-1 rounded-full bg-white/20"></span>
                  <span className="w-1 h-1 rounded-full bg-white/20"></span>
                  <span className="w-1 h-1 rounded-full bg-white/20"></span>
                </div>
              </div>

              {/* Visual Transformation */}
              <div className="space-y-4 relative">
                {/* Audio Wave Representation */}
                <div className="flex items-center justify-center gap-1 h-12 mb-6 opacity-50">
                   {[...Array(20)].map((_, i) => (
                     <motion.div
                       key={i}
                       animate={{ height: [10, Math.random() * 30 + 10, 10] }}
                       transition={{ repeat: Infinity, duration: 1, delay: i * 0.05 }}
                       className="w-1 bg-contalo-primary rounded-full"
                     />
                   ))}
                </div>

                {/* Processing Arrow */}
                <div className="flex justify-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center animate-pulse">
                    <ArrowRight size={16} className="text-contalo-secondary rotate-90" />
                  </div>
                </div>

                {/* Text Result */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="space-y-2 w-full">
                      <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                      <div className="h-2 w-full bg-white/10 rounded"></div>
                      <div className="h-2 w-5/6 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-contalo-primary/20 rounded-full blur-[60px] -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DeepUnderstanding = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#080402]">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-contalo-secondary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1"
          >
            <div className="relative z-10 bg-gradient-to-bl from-[#1a1005] to-[#0A0300] rounded-3xl border border-white/10 p-8 shadow-2xl">
               {/* Contextual Understanding Visualization */}
               <div className="flex flex-col gap-6">
                  {/* Input: Messy Thought */}
                  <div className="flex items-center gap-4 opacity-60">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                        <Bot size={24} className="text-gray-400" />
                      </div>
                      <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/5 border-dashed">
                          <div className="flex gap-2 mb-2">
                             <div className="h-1.5 bg-white/10 rounded w-8" />
                             <div className="h-1.5 bg-white/10 rounded w-12" />
                             <div className="h-1.5 bg-white/10 rounded w-6" />
                          </div>
                          <div className="flex gap-2">
                             <div className="h-1.5 bg-white/10 rounded w-16" />
                             <div className="h-1.5 bg-white/10 rounded w-4" />
                          </div>
                      </div>
                  </div>
                  
                  {/* AI Processing Connector */}
                  <div className="flex justify-center -my-2 relative z-20">
                    <div className="w-8 h-8 rounded-full bg-contalo-secondary/20 border border-contalo-secondary/30 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(253,169,0,0.3)]">
                      <Sparkles size={14} className="text-contalo-secondary" />
                    </div>
                  </div>

                  {/* Output: Structured & Clear */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-contalo-primary/30 relative overflow-hidden shadow-lg">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-contalo-primary to-contalo-secondary" />
                      
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-bold text-sm flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-contalo-primary"/> 
                          Ideas Claras
                        </h4>
                        <span className="text-[10px] uppercase tracking-wider text-contalo-secondary font-semibold bg-contalo-secondary/10 px-2 py-1 rounded">Optimizado</span>
                      </div>

                      <div className="space-y-3">
                        <motion.div 
                          initial={{ width: "60%", opacity: 0.5 }}
                          whileInView={{ width: "95%", opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-2 bg-gray-300/80 rounded-sm" 
                        />
                         <motion.div 
                          initial={{ width: "40%", opacity: 0.5 }}
                          whileInView={{ width: "85%", opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="h-2 bg-gray-300/60 rounded-sm" 
                        />
                         <motion.div 
                          initial={{ width: "50%", opacity: 0.5 }}
                          whileInView={{ width: "90%", opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                          className="h-2 bg-gray-300/60 rounded-sm" 
                        />
                      </div>
                  </div>
               </div>
               
               {/* Floating Badges */}
               <motion.div 
                 animate={{ y: [0, -5, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute -right-4 top-1/3 bg-[#0A0300] border border-white/20 px-3 py-1.5 rounded-lg text-xs text-contalo-primary shadow-xl flex items-center gap-1"
               >
                 <Layers size={10} /> Estructura
               </motion.div>
            </div>
             {/* Decorative Glow */}
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-contalo-secondary/20 rounded-full blur-[60px] -z-10" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2"
          >
            <div className="pl-6 border-l-4 border-contalo-secondary/50 mb-8">
              <p className="text-xl md:text-2xl italic text-gray-200 font-light leading-relaxed">
                "No solo transcribe: entiende lo que quieres decir, ordena tus ideas y las vuelve fáciles de leer para ti y para quien recibe el mensaje."
              </p>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Pensado para el día a día y para uso profesional, Contalo te ayuda a comunicarte mejor cuando escribir en el celular es lento, incómodo o simplemente no tienes tiempo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Problem = () => {
  const problems = [
    {
      icon: <Clock className="text-contalo-danger" size={24} />,
      title: "Escribir es lento",
      desc: "Escribes lento o te cansa redactar mensajes largos en el celular."
    },
    {
      icon: <EarOff className="text-orange-400" size={24} />,
      title: "No escuchan audios",
      desc: "Envías audios, pero muchos de tus contactos no pueden escucharlos de inmediato."
    },
    {
      icon: <AlertTriangle className="text-yellow-400" size={24} />,
      title: "Errores de dictado",
      desc: "Los dictados tradicionales se equivocan y no entienden el contexto."
    },
    {
      icon: <MessageSquareText className="text-contalo-primary" size={24} />,
      title: "Mensajes confusos",
      desc: "Explicas de más, te repites, y al final el mensaje no queda claro."
    },
    {
      icon: <Repeat className="text-red-400" size={24} />,
      title: "Repetición de datos",
      desc: "Tienes que escribir una y otra vez la misma información (dirección, cuenta, etc)."
    }
  ];

  return (
    <section id="problem" className="py-24 relative bg-[#0A0300]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-contalo-danger uppercase mb-3">
            El problema que resolvemos
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Hablar es fácil. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Escribir bien, no tanto.
            </span>
          </h3>
          <p className="text-gray-400 text-lg">
            Contalo cierra la brecha entre lo que quieres decir y lo que realmente terminas comunicando.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-contalo-primary/30 transition-all duration-300 group ${i === 0 || i === 1 ? 'md:col-span-1 lg:col-span-1' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A0300] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-contalo-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
          
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-contalo-primary/20 bg-contalo-primary/10 flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(252,85,1,0.2),transparent)]" />
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-white mb-2">La Solución</h4>
              <ArrowRight className="mx-auto text-contalo-primary mb-2 rotate-90 md:rotate-0" />
              <p className="text-sm text-white/80 font-medium">Contalo lo hace por ti.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const columns = [
    {
      icon: <Zap className="text-contalo-primary" size={32} />,
      title: "Transcripción inteligente",
      desc: "Convierte tu voz en texto limpio y ordenado, eliminando muletillas, repeticiones e incoherencias. El resultado: mensajes listos para enviar, sin edición manual."
    },
    {
      icon: <PenTool className="text-contalo-secondary" size={32} />,
      title: "Estilo a tu medida",
      desc: "Elige cómo quieres que se escriban tus textos: más formal, más cercano, más conciso o más explicativo. Contalo adapta el tono según tu modo de transcripción."
    },
    {
      icon: <Keyboard className="text-contalo-danger" size={32} />,
      title: "Shortcuts inteligentes",
      desc: "Define palabras clave para que se expandan automáticamente. “Dirección” → tu dirección completa. Ahorra tiempo y mantén consistencia."
    }
  ];

  return (
    <section className="py-24 bg-[#050200]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Hablas natural. <span className="text-contalo-primary">Contalo se encarga.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-contalo-primary/30 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-black/60 rounded-xl w-fit border border-white/5 group-hover:scale-110 transition-transform duration-300">
                {col.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{col.title}</h3>
              <p className="text-gray-400 leading-relaxed">{col.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const features = [
    { 
      icon: <Zap className="text-yellow-400" size={28} />,
      title: "One-tap experience", 
      desc: "Abres Contalo, dictas y recibes tu texto listo para copiar y pegar. Todo en segundos.",
      color: "from-yellow-400/20 to-transparent"
    },
    { 
      icon: <AlignLeft className="text-blue-400" size={28} />,
      title: "Modos de transcripción", 
      desc: "Estilos para distintos contextos: mensajes personales, laborales, explicaciones, notas rápidas.",
      color: "from-blue-400/20 to-transparent"
    },
    { 
      icon: <Sparkles className="text-purple-400" size={28} />,
      title: "Hiperpersonalización", 
      desc: "Contalo aprende de tus preferencias: cómo estructuras ideas y qué palabras usas.",
      color: "from-purple-400/20 to-transparent"
    },
    { 
      icon: <Smartphone className="text-green-400" size={28} />,
      title: "Compatibilidad móvil", 
      desc: "Hoy funciona como atajo en iOS. En desarrollo app nativa para Android e iOS.",
      color: "from-green-400/20 to-transparent"
    },
    { 
      icon: <Shield className="text-contalo-primary" size={28} />,
      title: "Privacidad y seguridad", 
      desc: "Tu voz se procesa de forma segura; la información se usa para mejorar tu experiencia.",
      color: "from-contalo-primary/20 to-transparent"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0300]">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-contalo-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Funciones pensadas para <br/>
            <span className="text-contalo-primary">cómo hablas y vives.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-1 rounded-2xl overflow-hidden"
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-contalo-primary/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              <div className="relative h-full bg-[#0E0502] border border-white/10 rounded-xl p-8 overflow-hidden group-hover:border-contalo-primary/30 transition-colors duration-300">
                {/* Inner Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${f.color} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-lg">
                    {f.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-contalo-primary transition-colors duration-300">
                    {f.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Card as the last item to fill grid if even, or just visually distinct */}
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative p-1 rounded-2xl overflow-hidden lg:col-span-1 flex flex-col"
            >
             <div className="relative h-full bg-gradient-to-br from-contalo-primary to-contalo-danger rounded-xl p-8 flex flex-col justify-center items-center text-center border border-transparent hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">¿Listo para probarlo?</h3>
                <Button variant="secondary" size="md" className="w-full" onClick={onJoinClick}>
                  Únete ahora
                </Button>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  const audience = [
    "Personas que aman mandar audios, pero saben que muchos no los escuchan.",
    "Personas con poco tiempo que necesitan comunicar algo rápido y bien escrito.",
    "Usuarios con dificultades para escribir en el móvil (movilidad reducida, cansancio).",
    "Profesionales que envían mensajes extensos a clientes y necesitan claridad.",
    "Emprendedores y creadores que usan la voz para pensar y necesitan texto usable."
  ];

  // Repeat items multiple times to ensure smooth looping without gaps
  const marqueeItems = [...audience, ...audience, ...audience];

  return (
    <section className="py-24 bg-[#0A0300] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          ¿Es Contalo para ti? <span className="text-contalo-secondary">Probablemente sí.</span>
        </h2>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0300] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0300] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          // Starting at -33.33% and moving to 0% creates a left-to-right movement effect
          // where new items appear to enter from the left side
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] md:w-[450px] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-contalo-primary/30 transition-all duration-300 group"
            >
              <Quote className="text-contalo-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
              <p className="text-lg text-gray-200 font-medium leading-relaxed">
                "{item}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { icon: <Smartphone />, title: "Abre Contalo", desc: "Desde el atajo en tu iPhone." },
    { icon: <Mic />, title: "Empieza a hablar", desc: "Cuenta todo: contexto, detalles, ideas." },
    { icon: <Sparkles />, title: "Toca para terminar", desc: "Contalo procesa, limpia y organiza." },
    { icon: <Copy />, title: "Solo pega", desc: "Listo en el portapapeles para enviar." },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">Así de simple es usar Contalo</h2>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#0A0300] p-6 rounded-2xl border border-white/10 text-center group hover:border-contalo-primary transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-contalo-primary mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-contalo-primary group-hover:text-white shadow-[0_0_15px_rgba(252,85,1,0.2)]">
                  {step.icon}
                </div>
                <div className="text-4xl font-bold text-white/10 mb-2 group-hover:text-contalo-primary transition-colors duration-300">0{i + 1}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "Free", price: "$0", period: "/mes", limit: "20 min/mes", desc: "Ideal para probar Contalo y casos puntuales.", color: "white" },
    { name: "Plan Básico", price: "$2", period: "/mes", limit: "1 hora/mes", desc: "Para usuarios que lo usan de forma ocasional.", color: "contalo-secondary" },
    { name: "Plan Estándar", price: "$3", period: "/mes", limit: "2 horas/mes", desc: "Perfecto para comunicación frecuente.", color: "contalo-primary", featured: true },
    { name: "Plan Pro", price: "$5", period: "/mes", limit: "5 horas/mes", desc: "Pensado para profesionales y emprendedores.", color: "contalo-danger" },
    { name: "Ilimitado", price: "$10", period: "/mes", limit: "Audio ilimitado", desc: "Para quienes quieren olvidarse de contar minutos.", color: "purple-500" },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#050200]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Planes simples, <span className="text-transparent bg-clip-text bg-gradient-to-r from-contalo-primary via-contalo-secondary to-contalo-danger">para uso real.</span>
          </h2>
          <p className="text-gray-400 text-lg">Empieza gratis. Paga solo si lo usas más.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              animate={plan.featured ? { y: [0, -12, 0] } : undefined}
              transition={plan.featured ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : undefined}
              whileHover={!plan.featured ? { y: -10 } : { scale: 1.03 }}
              className={`relative p-6 rounded-2xl border ${
                  plan.featured 
                  ? 'border-contalo-primary bg-contalo-primary/5 group shadow-[0_0_20px_-5px_rgba(252,85,1,0.3)]' 
                  : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-contalo-primary/30'
              } flex flex-col justify-between transition-all duration-300`}
            >
              {plan.featured && (
                  <>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-contalo-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">Recomendado</div>
                    {/* Blur Glow Animation similar to Roadmap section */}
                    <div className="absolute inset-0 bg-contalo-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />
                  </>
              )}
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <div className="py-2 px-3 bg-white/5 rounded-lg text-sm font-mono text-contalo-secondary mb-4 inline-block">
                  {plan.limit}
                </div>
                <p className="text-sm text-gray-400 mb-6">{plan.desc}</p>
              </div>
              <Button variant={plan.featured ? 'primary' : 'secondary'} size="sm" className="w-full">Elegir</Button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Todos los planes incluyen acceso a los modos de transcripción, shortcuts inteligentes y futuras mejoras de Contalo.</p>
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const items = [
    { icon: <AndroidIcon className="w-6 h-6" />, title: "App nativa Android", desc: "Experiencia estable y rápida, integrada al sistema." },
    { icon: <AppleIcon className="w-6 h-6" />, title: "App nativa iOS", desc: "Evolución del atajo a una app profesional con más funciones." },
    { icon: <Bot size={24} />, title: "Chat con Contalo", desc: "Entrena a la IA hablando con ella para que aprenda tu tono." },
    { icon: <Monitor size={24} />, title: "Versión Escritorio", desc: "Para correos largos y documentos desde la oficina." },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Lo que viene con <span className="text-contalo-primary">Contalo</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="relative p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all group"
            >
              {/* Background Blur Glow */}
              <div className="absolute inset-0 bg-contalo-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />

              <div className="mb-4 text-gray-400 group-hover:text-contalo-primary transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WaitlistCTA = ({ onJoinClick }: { onJoinClick: () => void }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-contalo-primary/20 to-[#0A0300] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Únete a la lista anticipada</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Sé de las primeras personas en probar Contalo, recibir novedades y acceder a beneficios especiales.
        </p>
        
        <div className="flex justify-center">
           <Button size="lg" className="w-full sm:w-auto px-12" onClick={onJoinClick}>
             Quiero estar en la lista
           </Button>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "¿Funciona sin conexión?", a: "No. Contalo requiere conexión a internet para usar los modelos de IA que procesan tu voz y generan el texto." },
    { q: "¿En qué dispositivos funciona?", a: "Actualmente funciona como atajo en iOS. Estamos desarrollando la app nativa de Android y luego la de iOS, y más adelante la versión de escritorio." },
    { q: "¿Mis datos están seguros?", a: "Sí. Tu información se procesa de forma privada y se usa únicamente para generar tus textos y mejorar tu experiencia." },
    { q: "¿Puedo cambiar el estilo de escritura?", a: "Sí. Contalo ofrece modos de transcripción personalizables y shortcuts para adaptar la salida a tu forma de comunicarte." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white">{faq.q}</span>
                <ChevronDown className={`transform transition-transform duration-300 text-contalo-primary ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 border-t border-white/5 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050200] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex flex-col items-center md:items-start gap-4 mb-6 md:mb-0">
            <Logo className="h-8 w-auto" />
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              Contalo — IA que escribe lo que quieres decir, a tu manera, a un toque.
            </p>
          </div>
          <div className="flex space-x-6">
             {/* Socials or other links could go here */}
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Contalo.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-contalo-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-contalo-primary transition-colors">Términos</a>
            <a href="#" className="hover:text-contalo-primary transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

function App() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  const handleJoinClick = () => {
    setShowWaitlist(true);
    window.scrollTo(0, 0);
  };

  if (showWaitlist) {
    return <WaitlistPage onBack={() => setShowWaitlist(false)} />;
  }

  return (
    <div className="bg-[#0A0300] min-h-screen font-sans text-white selection:bg-contalo-primary selection:text-white overflow-x-hidden">
      <Navbar onJoinClick={handleJoinClick} />
      <main>
        <Hero onJoinClick={handleJoinClick} />
        <WhatIsContalo />
        <DeepUnderstanding />
        <Problem />
        <Solution />
        <Features onJoinClick={handleJoinClick} />
        <TargetAudience />
        <HowItWorks />
        <Pricing />
        <Roadmap />
        <WaitlistCTA onJoinClick={handleJoinClick} />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;