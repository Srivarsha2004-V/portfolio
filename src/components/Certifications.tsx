import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Data Analytics with Python",
      issuer: "NPTEL",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Java Full Stack",
      issuer: "Smart Mieten",
      gradient: "from-orange-400 to-red-400"
    },
    {
      title: "Python",
      issuer: "Infosys",
      gradient: "from-green-400 to-blue-400"
    },
    {
      title: "SQL",
      issuer: "HackerRank",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "Machine Learning",
      issuer: "Great Learning",
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      title: "Cybersecurity",
      issuer: "IBM",
      gradient: "from-gray-400 to-blue-400"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technologies and domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.gradient} bg-opacity-20 flex-shrink-0`}>
                  <Award className={`w-6 h-6 bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-gray-800 rounded-xl px-8 py-6">
            <p className="text-gray-300 text-lg mb-2">
              Continuously expanding my knowledge through professional development
            </p>
            <p className="text-gray-500">
              Always seeking new learning opportunities and industry certifications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};