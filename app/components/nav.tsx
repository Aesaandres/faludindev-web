'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { Menu, X, Github, Code2 } from 'lucide-react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navLinks = [
        { name: 'Inicio', href: '#home' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Portafolio', href: '#portfolio' },
        { name: 'Contacto', href: '#contact' },
    ];
    return (
        <nav className={`fixed w-full z-50 border-b border-primary transition-all duration-300  ${scrolled ? 'bg-primary/90 backdrop-blur-md border-b border-segundary/30 py-3' : 'bg-transparent py-6'
            }`}>
            <div className="container m-auto px-4">
                < div className="flex items-center justify-between py-3">
                    <div className="text-2xl font-bold ">
                        <a href="#" className="flex items-center space-x-2 group">
                            <div className="w-10 h-10 rounded-lg bg-segundary flex items-center justify-center text-primary transition-transform group-hover:rotate-12">
                                <Code2 size={24} strokeWidth={2.5} />
                            </div>
                            <span className="text-2xl font-display font-bold text-brand-white tracking-tight">
                                Faludin<span className="text-segundary">Dev</span>
                            </span>
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-5">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-cuaternary hover:text-segundary  font-medium transition-colors relative group" >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-segundary transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>
                    <button
                        className="md:hidden text-brand-light hover:text-brand-accent transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </div>
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-primary border-b border-segundary overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="flex flex-col p-4 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-brand-light hover:text-brand-accent font-medium py-2 px-4 rounded-lg hover:bg-brand-dark/50 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}