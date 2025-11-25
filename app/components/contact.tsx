'use client';
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';
export default function Contact() {
      const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Esta es una demostración, contáctame por email.");
  };
    return (
       <section id="contact" className="py-20 bg-primary from-primary/20 to-brand-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-terciary border border-cuaternary/5 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-white mb-4">
                  Hablemos
                </h2>
                <p className="text-cuaternary/70">
                  ¿Tienes una idea de proyecto o simplemente quieres conectar? 
                  Estoy disponible para nuevas oportunidades.
                </p>
              </div>

              
            </div>

            <div>
              <div className="space-y-4">
                <a href="mailto:aesa.andres.1997@gmail.com" className="flex items-center space-x-4 text-brand-light hover:text-brand-accent transition-colors p-4 bg-primary/50 rounded-lg border border-cuaternary/5 hover:border-segundary/30 group">
                  <div className="p-3 bg-primary rounded-full text-segundary group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium">aesa.andres.1997@gmail.com</span>
                </a>
                
                <a href="https://github.com/Aesaandres" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-brand-light hover:text-brand-accent transition-colors p-4 bg-primary/50 rounded-lg border border-cuaternary/5 hover:border-segundary/30 group">
                  <div className="p-3 bg-primary rounded-full text-segundary group-hover:scale-110 transition-transform">
                    <Github size={20} />
                  </div>
                  <span className="font-medium">github.com/aesaandres</span>
                </a>

                <a href="www.linkedin.com/in/andres-sanchez-6266701a0" className="flex items-center space-x-4 text-cuaternary hover:text-brand-accent transition-colors p-4 bg-primary/50 rounded-lg border border-cuaternary/5 hover:border-segundary/30 group">
                  <div className="p-3 bg-primary rounded-full text-segundary group-hover:scale-110 transition-transform">
                    <Linkedin size={20} />
                  </div>
                  <span className="font-medium">linkedin.com/in/andres-sanchez</span>
                </a>

                <a href="https://www.instagram.com/faludinn/" className="flex items-center space-x-4 text-brand-light hover:text-brand-accent transition-colors p-4 bg-primary/50 rounded-lg border border-cuaternary/5 hover:border-segundary/30 group">
                  <div className="p-3 bg-primary rounded-full text-segundary group-hover:scale-110 transition-transform">
                    <Instagram size={20} />
                  </div>
                  <span className="font-medium">FaludinDev</span>
                </a>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </section>
    );
}