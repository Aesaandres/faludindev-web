'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderOpen } from 'lucide-react';
export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    demoUrl?: string;
    image?: string;
}
export default function Proyects() {
    const projectsData: Project[] = [
        {
            id: '1',
            title: 'E-Commerce Dashboard',
            description: 'Un panel de administración completo para gestionar productos, pedidos y clientes. Desarrollado con Next.js y gráficos dinámicos.',
            tags: ['Next.js', 'Tailwind CSS', 'Recharts', 'API'],
            githubUrl: 'https://github.com/faludindev',
            image: 'https://picsum.photos/600/400?random=1'
        },
        {
            id: '2',
            title: 'Corporate Landing Page',
            description: 'Sitio web corporativo de alto rendimiento con animaciones suaves y SEO optimizado para una empresa de consultoría.',
            tags: ['React', 'Framer Motion', 'Vite'],
            githubUrl: 'https://github.com/faludindev',
            image: 'https://picsum.photos/600/400?random=2'
        },
        {
            id: '3',
            title: 'API Integrator System',
            description: 'Sistema backend para integrar múltiples servicios de terceros y normalizar datos para consumo frontend.',
            tags: ['Node.js', 'Express', 'MongoDB'],
            githubUrl: 'https://github.com/faludindev',
            image: 'https://picsum.photos/600/400?random=3'
        },
        {
            id: '4',
            title: 'Custom WordPress Theme',
            description: 'Tema personalizado de WordPress construido desde cero, optimizado para Core Web Vitals y facilidad de edición.',
            tags: ['WordPress', 'PHP', 'SCSS', 'JS'],
            githubUrl: 'https://github.com/faludindev',
            image: 'https://picsum.photos/600/400?random=4'
        }
    ];

    return (
        <section id="portfolio" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-white mb-2">
                            Proyectos Destacados
                        </h2>
                        <p className="text-cuaternary/60">
                            Una selección de trabajos y experimentos de código abierto.
                        </p>
                    </div>

                </div>
                <h2 className='text-center'>Proximamente...</h2>
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Welcome developers! 

                    {projectsData.map((project, idx) => (
                        <motion.article
                            key={project.id}
                            className="group bg-terciary rounded-xl overflow-hidden border border-cuaternary/10 hover:border-segundary/50 transition-all duration-300 hover:shadow-2xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="relative h-48 md:h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-cuaternary group-hover:text-segundary transition-colors">
                                        {project.title}
                                    </h3>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-brand-dark rounded-full text-brand-light hover:text-brand-white hover:bg-brand-accent transition-colors"
                                        aria-label="Ver código"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>

                                <p className="text-cuaternary/70 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-2.5 py-1 rounded bg-primary text-cuaternary/60 border border-cuaternary/5"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))} */}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a
                        href="https://github.com/faludindev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-brand-accent font-medium"
                    >
                        Ver todo en GitHub <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}