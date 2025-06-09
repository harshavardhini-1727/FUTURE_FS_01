import { projects } from "@/lib/portfolio-data";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent projects and the technologies I've worked with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <img
                src={project.imageUrl}
                alt={project.imageAlt}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-900 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <i className="fab fa-github mr-2"></i>
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/alexjohnson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            <i className="fab fa-github mr-2"></i>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
