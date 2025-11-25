'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Wrench, Terminal } from 'lucide-react';

export interface Skill {
    name: string;
    icon?: React.ReactNode;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export default function Skill() {
    const skillCategories: SkillCategory[] = [
        {
            title: "Desarrollo Frontend",
            skills: [
                { name: "React.js" },
                { name: "Next.js" },
                { name: "TypeScript" },
                { name: "Tailwind CSS" },
                { name: "HTML5 / CSS3" },
                { name: "Framer Motion" },
                { name: "Daisy UI" },
                { name: "Fabric js" }
            ]
        },
        {
            title: "Backend & CMS",
            skills: [
                { name: "Node.js" },
                { name: "WordPress" },
                { name: "PHP" },
                { name: "SQL" }
            ]
        },
        {
            title: "Herramientas & DevOps",
            skills: [
                { name: "Git / GitHub" },
                { name: "VS Code" },
                { name: "Terminal" },
                { name: "Vercel" },
                { name: "Figma (Básico)" },
                { name: "Photoshop" }
            ]
        }
    ];
    const CategoryIcon = ({ index }: { index: number }) => {
        switch (index) {
            case 0: return <Layout className="w-8 h-8 text-segundary mb-4" />;
            case 1: return <Database className="w-8 h-8 text-segundary mb-4" />;
            case 2: return <Terminal className="w-8 h-8 text-segundary mb-4" />;
            default: return <Wrench className="w-8 h-8 text-segundary mb-4" />;
        }
    };
    return (
        <section id="skills" className="py-20 bg-terciary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-white mb-4">
            Mis Habilidades Técnicas
          </h2>
          <div className="w-20 h-1 bg-segundary mx-auto rounded-full"></div>
          <p className="mt-4 text-cuaternary/60 max-w-2xl mx-auto">
            Un conjunto de tecnologías que utilizo para dar vida a soluciones digitales, 
            desde la arquitectura hasta la interfaz de usuario.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="bg-primary rounded-2xl p-8 border border-cuaternary/5 hover:border-segundary/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <CategoryIcon index={idx} />
              <h3 className="text-xl font-bold text-brand-white mb-6 group-hover:text-segundary transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 bg-primary text-cuaternary/80 rounded-md text-sm font-medium border border-cuaternary/5 hover:border-segundary/50 hover:text-cuaternary transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
}