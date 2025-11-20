import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

interface WaitlistPageProps {
  onBack: () => void;
}

export const WaitlistPage: React.FC<WaitlistPageProps> = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    q1: string;
    q2: string;
    q2Other: string;
    q3: string;
    q4: string;
    q5: string;
    q6: string[];
    q6Other: string;
  }>({
    name: '',
    email: '',
    phone: '',
    q1: '',
    q2: '',
    q2Other: '',
    q3: '',
    q4: '',
    q5: '',
    q6: [],
    q6Other: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => {
      const current = prev.q6;
      if (current.includes(value)) {
        return { ...prev, q6: current.filter(item => item !== value) };
      } else {
        return { ...prev, q6: [...current, value] };
      }
    });
  };

  const RadioOption = ({ name, value, label, checked, onChange }: any) => (
    <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all duration-200 ${checked ? 'bg-contalo-primary/10 border-contalo-primary shadow-[0_0_15px_rgba(252,85,1,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="hidden" />
      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center shrink-0 ${checked ? 'border-contalo-primary' : 'border-gray-500'}`}>
        {checked && <div className="w-2.5 h-2.5 rounded-full bg-contalo-primary" />}
      </div>
      <span className={`text-sm md:text-base ${checked ? 'text-white font-medium' : 'text-gray-300'}`}>{label}</span>
    </label>
  );

  const CheckboxOption = ({ value, label, checked, onChange }: any) => (
    <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all duration-200 ${checked ? 'bg-contalo-primary/10 border-contalo-primary shadow-[0_0_15px_rgba(252,85,1,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
      <input type="checkbox" checked={checked} onChange={() => onChange(value)} className="hidden" />
      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center shrink-0 transition-colors ${checked ? 'border-contalo-primary bg-contalo-primary' : 'border-gray-500'}`}>
        {checked && <Check size={12} className="text-white stroke-[4]" />}
      </div>
      <span className={`text-sm md:text-base ${checked ? 'text-white font-medium' : 'text-gray-300'}`}>{label}</span>
    </label>
  );

  const BackgroundAuroras = () => (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-contalo-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-contalo-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-contalo-primary/10 rounded-full blur-[80px]" />
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500 relative overflow-hidden bg-gradient-to-b from-[#1F0802] to-[#0A0300]">
        <BackgroundAuroras />
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-2xl w-full relative z-10">
           <div className="flex justify-center mb-8">
            <Logo className="h-32 w-32 drop-shadow-[0_0_25px_rgba(252,85,1,0.6)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(252,85,1,0.5)]">
            ¡Gracias por unirte!
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Te avisaremos cuando <span className="text-contalo-primary font-bold">Contalo</span> esté listo. 
            Muy pronto podrás probar antes que nadie la IA que escribe lo que quieres decir — a un toque.
          </p>
          <Button onClick={onBack} variant="secondary" icon={<ArrowLeft size={18} />} className="mx-auto">
            Volver al inicio
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-500 bg-gradient-to-b from-[#1F0802] to-[#0A0300] relative">
      <BackgroundAuroras />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <Logo className="h-16 md:h-24 w-auto object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(252,85,1,0.4)]">
            Únete a la lista de espera de Contalo
          </h1>
          <p className="text-xl text-gray-400">
            Sé de los primeros en probar la IA que escribe lo que quieres decir — a un toque.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Section 1: Personal Data */}
          <section className="bg-[#0E0502]/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-contalo-primary/20 hover:border-contalo-primary/40 transition-colors shadow-[0_0_30px_-10px_rgba(252,85,1,0.1)]">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-contalo-primary/20 text-contalo-primary flex items-center justify-center text-sm shrink-0">1</span>
              Datos personales
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nombre completo *</label>
                <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-contalo-primary focus:ring-1 focus:ring-contalo-primary transition-all" placeholder="Ej. Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Correo electrónico *</label>
                <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-contalo-primary focus:ring-1 focus:ring-contalo-primary transition-all" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono <span className="text-gray-500 font-normal">(Opcional)</span></label>
                <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-contalo-primary focus:ring-1 focus:ring-contalo-primary transition-all" placeholder="+52 123 456 7890" />
              </div>
            </div>
          </section>

          {/* Section 2: Questions */}
          <section className="bg-[#0E0502]/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-contalo-primary/20 hover:border-contalo-primary/40 transition-colors shadow-[0_0_30px_-10px_rgba(252,85,1,0.1)]">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-contalo-primary/20 text-contalo-primary flex items-center justify-center text-sm shrink-0">2</span>
              Cuéntanos un poco más
            </h2>
            
            <div className="space-y-8">
              {/* Q1 */}
              <div>
                <p className="text-lg text-white font-medium mb-4">1. ¿Con qué frecuencia envías mensajes de voz?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Siempre', 'A veces', 'Rara vez', 'Nunca'].map(opt => (
                    <RadioOption key={opt} name="q1" value={opt} label={opt} checked={formData.q1 === opt} onChange={handleInputChange} />
                  ))}
                </div>
              </div>

              {/* Q2 */}
              <div>
                <p className="text-lg text-white font-medium mb-4">2. ¿Qué te gustaría mejorar al comunicarte por voz o texto?</p>
                <div className="space-y-3">
                  {[
                    'Que se entienda mejor lo que quiero decir',
                    'Que el texto sea más claro y ordenado',
                    'Ahorrar tiempo escribiendo'
                  ].map(opt => (
                    <RadioOption key={opt} name="q2" value={opt} label={opt} checked={formData.q2 === opt} onChange={handleInputChange} />
                  ))}
                  <div className={`p-4 rounded-xl border transition-all duration-200 ${formData.q2 === 'Otro' ? 'bg-contalo-primary/10 border-contalo-primary' : 'bg-white/5 border-white/10'}`}>
                    <label className="flex items-center cursor-pointer mb-2">
                      <input type="radio" name="q2" value="Otro" checked={formData.q2 === 'Otro'} onChange={handleInputChange} className="hidden" />
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center shrink-0 ${formData.q2 === 'Otro' ? 'border-contalo-primary' : 'border-gray-500'}`}>
                        {formData.q2 === 'Otro' && <div className="w-2.5 h-2.5 rounded-full bg-contalo-primary" />}
                      </div>
                      <span className="text-gray-300">Otro</span>
                    </label>
                    {formData.q2 === 'Otro' && (
                      <input type="text" name="q2Other" value={formData.q2Other} onChange={handleInputChange} className="w-full bg-black/30 border border-white/20 rounded px-3 py-2 text-white text-sm focus:border-contalo-primary outline-none mt-1" placeholder="Escribe tu respuesta..." autoFocus />
                    )}
                  </div>
                </div>
              </div>

              {/* Q3 */}
              <div>
                <p className="text-lg text-white font-medium mb-4">3. ¿Alguna vez tuviste que volver a grabar un audio para que alguien lo entienda?</p>
                 <div className="space-y-3">
                  {['Sí, muchas veces', 'Algunas veces', 'No, nunca'].map(opt => (
                    <RadioOption key={opt} name="q3" value={opt} label={opt} checked={formData.q3 === opt} onChange={handleInputChange} />
                  ))}
                </div>
              </div>

              {/* Q4 */}
               <div>
                <p className="text-lg text-white font-medium mb-4">4. En promedio, ¿cuánto dura un audio que envías?</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Menos de 30 segundos', 'Alrededor de 1 minuto', 'Entre 1 y 3 minutos', 'Más de 3 minutos'].map(opt => (
                    <RadioOption key={opt} name="q4" value={opt} label={opt} checked={formData.q4 === opt} onChange={handleInputChange} />
                  ))}
                </div>
              </div>

              {/* Q5 */}
               <div>
                <p className="text-lg text-white font-medium mb-4">5. ¿Qué tan rápido suelen escuchar tus audios las personas a las que se los envías?</p>
                 <div className="space-y-3">
                  {['Casi siempre los escuchan de inmediato', 'A veces tardan', 'Casi nunca los escuchan', 'No lo sé'].map(opt => (
                    <RadioOption key={opt} name="q5" value={opt} label={opt} checked={formData.q5 === opt} onChange={handleInputChange} />
                  ))}
                </div>
              </div>

              {/* Q6 - CHECKBOX */}
              <div>
                <p className="text-lg text-white font-medium mb-4">6. ¿En qué situaciones te gustaría usar Contalo?</p>
                <p className="text-sm text-gray-500 mb-3 -mt-3">Selecciona todas las que apliquen</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Trabajo',
                    'Estudio',
                    'Conversaciones personales',
                    'Creación de contenido'
                  ].map(opt => (
                    <CheckboxOption 
                        key={opt} 
                        value={opt} 
                        label={opt} 
                        checked={formData.q6.includes(opt)} 
                        onChange={handleCheckboxChange} 
                    />
                  ))}
                  {/* Other Checkbox Option */}
                  <div className={`col-span-1 sm:col-span-2 p-4 rounded-xl border transition-all duration-200 ${formData.q6.includes('Otro') ? 'bg-contalo-primary/10 border-contalo-primary' : 'bg-white/5 border-white/10'}`}>
                    <label className="flex items-center cursor-pointer mb-2">
                      <input 
                        type="checkbox" 
                        checked={formData.q6.includes('Otro')} 
                        onChange={() => handleCheckboxChange('Otro')} 
                        className="hidden" 
                      />
                      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center shrink-0 transition-colors ${formData.q6.includes('Otro') ? 'border-contalo-primary bg-contalo-primary' : 'border-gray-500'}`}>
                        {formData.q6.includes('Otro') && <Check size={12} className="text-white stroke-[4]" />}
                      </div>
                      <span className={`text-sm md:text-base ${formData.q6.includes('Otro') ? 'text-white font-medium' : 'text-gray-300'}`}>Otro</span>
                    </label>
                    
                    {formData.q6.includes('Otro') && (
                      <input 
                        type="text" 
                        name="q6Other" 
                        value={formData.q6Other} 
                        onChange={handleInputChange} 
                        className="w-full bg-black/30 border border-white/20 rounded px-3 py-2 text-white text-sm focus:border-contalo-primary outline-none mt-1 animate-in fade-in slide-in-from-top-1" 
                        placeholder="Escribe tu respuesta..." 
                        autoFocus 
                      />
                    )}
                  </div>
                </div>
              </div>

            </div>
          </section>

          <div className="flex flex-col items-center gap-4 pt-4">
            <Button type="submit" size="lg" className="w-full md:w-auto px-12 shadow-[0_0_20px_rgba(252,85,1,0.4)] hover:shadow-[0_0_30px_rgba(252,85,1,0.6)]">
              Únete a la lista de espera
            </Button>
            <button type="button" onClick={onBack} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5">
              <ArrowLeft size={16} />
              Volver al inicio
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};