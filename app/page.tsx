
import Nav from "./components/nav";
import Hero from "./components/hero";
import Skill from "./components/skill";
import Proyects from "./components/proyects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Skill />
      <Proyects />
      <Contact />
       <footer className="bg-primary border-t border-cuaternary py-8">
        <div className="container mx-auto px-4 text-center text-cuaternary/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Andrés Sanchez. FaludinDev. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">Hecho con Next js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
