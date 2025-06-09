import { stats } from "@/lib/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my journey, skills, and what drives my passion for development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a passionate B.Tech Computer Science student at NSRIT Engineering College with a 9.1 CGPA, 
                currently building my expertise through 5 government and university internships.
              </p>
              <p>
                I specialize in HTML, CSS, JavaScript, React.js, Python, Java, and MongoDB. My project 
                SimplifyAI has been recognized and approved by prestigious institutions including Rajiv Gandhi University, IIIT, and Aditya Engineering College.
              </p>
              <p>
                I'm constantly learning new technologies and working on innovative projects that solve real-world problems. 
                My certifications from NPTEL, MongoDB, and edX demonstrate my commitment to continuous learning.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.experience}</div>
                <div className="text-sm text-gray-600">Status</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-green-500 mb-2">{stats.projects}</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.internships}</div>
                <div className="text-sm text-gray-600">Internships</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-green-500 mb-2">{stats.cgpa}</div>
                <div className="text-sm text-gray-600">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
