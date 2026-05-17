
const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-10 px-4 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-black text-red-600 tracking-tighter mb-2">MARVEL</h2>
          <p className="text-gray-400 text-sm text-center md:text-left">
            Creado por <span className="text-white font-semibold">Jeronimo Perez</span>
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-gray-500">
          <p>
            Construido con <span className="text-blue-400">React</span>, <span className="text-blue-500">TypeScript</span> y <span className="text-cyan-400">Tailwind CSS</span>
          </p>
          <p className="flex items-center gap-2">
            Data provided by
            <a 
              href="https://www.themoviedb.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition-colors"
            >
              The Movie Database (TMDB)
            </a>
          </p>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Marvel Project Clone. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
