'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-30">
            <div className='container mx-auto px-4 md:px-6 z-10'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-segundary/10 text-segundary border border-segundary/20 font-medium text-sm mb-4">
                                Disponible para proyectos
                            </span>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-white leading-tight">
                                Hola, soy <br />
                                <span className="text-transparent bg-clip-text bg-segundary from-brand-accent ">
                                    Andres Sanchez
                                </span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-brand-light/80 font-light mt-4">
                                Ingeniero en Informática & Desarrollador Web
                            </h2>
                        </motion.div>
                        <motion.p
                            className="text-brand-light/60 text-lg max-w-lg leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Transformo ideas en experiencias digitales sólidas y escalables.
                            Especializado en el ecosistema moderno de JavaScript y soluciones web a medida.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <a
                                href="#portfolio"
                                className="px-8 py-3 bg-segundary text-primary font-bold rounded-full hover:bg-brand-accent/90 transition-all transform hover:-translate-y-1 flex items-center shadow-[0_0_20px_-5px_rgba(243,172,59,0.4)]"
                            >
                                Ver Proyectos
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 border border-brand-light/20 text-brand-light font-medium rounded-full hover:bg-cuaternary/5 hover:border-brand-light/40 transition-all"
                            >
                                Contactar
                            </a>
                        </motion.div>

                    </div>
                    {/* Visual/Image */}
                    <div className='hidden md:flex justify-center relativ'>
                        {/* Abstract Representation of 'FaludinDev' */}
                        <div className="relative w-80 h-80 md:w-96 md:h-96 ">
                            <div className="absolute inset-0 bg-terciary from-primary/20 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
                            <div className="relative w-full h-full rounded-2xl bg-brand-secondary border border-cuaternary/10 overflow-hidden flex items-center justify-center shadow-2xl animate-float">
                                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#f3ac3b_1px,transparent_1px)] [background-size:16px_16px]"></div>

                                <div className="text-center z-10 space-y-4">
                                    <div className="w-24 h-24 mx-auto bg-primary rounded-full border-4 border-segundary flex items-center justify-center">
                                        <span className="text-4xl font-bold text-brand-white">A.S.</span>
                                    </div>
                                    <div className="bg-primary/80 backdrop-blur-sm py-2 px-6 rounded-lg border border-segundary/30">
                                        <code className="text-segundary font-mono text-sm">&lt;FaludinDev /&gt;</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-light/40">
          <ChevronDown size={24} />
        </div>
            </div>


        </section>
    );
}