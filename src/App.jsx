import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import projects from './data/projects';

export default function App() {
  return (
    <div className="font-sans max-w-4xl mx-auto p-4">
      <Header />
      <section className="my-12 bg-transparent rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sobre mi</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Soy un desarrollador frontend con formación en React, JavaScript, HTML y CSS. Me gusta construir interfaces limpias y funcionales, y actualmente estoy aprendiendo más sobre backend, lógica y estructuras. Busco mi primer desafío profesional para seguir creciendo.
        </p>
      </section>
      <section className="my-12 bg-transparent rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About me</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          I am a frontend developer with training in React, JavaScript, HTML, and CSS. I enjoy building clean and functional interfaces, and I am currently learning more about backend, logic, and structures. I am looking for my first professional challenge to continue growing.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>

      <Contact />

      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-lg font-semibold mb-2">Enrique Alegre – Desarrollador Frontend - Backend</h4>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/snaxeres" target="_blank" className="hover:text-blue-400">GitHub</a>
            <a href="https://www.linkedin.com/in/enrii-alegre-ab9b45152/" target="_blank" className="hover:text-blue-400">LinkedIn</a>
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Enrique Alegre. Todos los derechos reservados.</p>
        </div>
      </footer>


    </div>
  );
}