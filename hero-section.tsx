import { personalInfo, socialLinks } from "@/lib/portfolio-data";
import profilePhoto from "@/assets/profile-photo.jpeg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="gradient-text">{personalInfo.firstName}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {personalInfo.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center"
              >
                <i className="fas fa-eye mr-2"></i>
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get In Touch
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
              )}
              <a
                href={socialLinks.email}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <img
                src={profilePhoto}
                alt={`${personalInfo.name} - Full Stack Developer`}
                className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-white"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full animate-bounce-gentle">
                <i className="fas fa-code text-xl"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-full animate-bounce-gentle" style={{animationDelay: "0.5s"}}>
                <i className="fas fa-laptop-code text-xl"></i>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection("about")}>
            <i className="fas fa-chevron-down text-2xl text-gray-400 hover:text-blue-600 transition-colors duration-200"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
