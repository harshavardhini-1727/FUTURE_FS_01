import { skills, experiences, education, certifications } from "@/lib/portfolio-data";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My educational background, technical skills, and professional experience.
          </p>
        </div>
        
        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-gray-900">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-2 bg-white text-blue-600 font-medium rounded-full text-sm border border-blue-200 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4 text-gray-900">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-2 bg-white text-green-600 font-medium rounded-full text-sm border border-green-200 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4 text-gray-900">Tools & Others</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-2 bg-white text-gray-700 font-medium rounded-full text-sm border border-gray-200 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Experience and Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900">{experience.title}</h4>
                    <p className="text-blue-600 font-medium mb-2">{experience.company}</p>
                    <p className="text-sm text-gray-500 mb-3">{experience.period}</p>
                    <p className="text-gray-600">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-green-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg text-gray-900">{edu.degree}</h4>
                    <p className="text-green-600 font-medium mb-2">{edu.school}</p>
                    <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
              
              {/* Certifications */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg text-gray-900 mb-4">Certifications</h4>
                <ul className="space-y-2 text-gray-600">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-certificate text-green-500 mr-3"></i>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <i className="fas fa-download mr-2"></i>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
