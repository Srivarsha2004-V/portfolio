import React from 'react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "SQL", "JavaScript"]
    },
    {
      title: "Web Technologies", 
      skills: ["HTML", "CSS", "Django", "JDBC", "Servlets"]
    },
    {
      title: "Databases & Cloud",
      skills: ["MySQL", "AWS", "Jenkins", "Git", "GitHub"]
    },
    {
      title: "Core Concepts",
      skills: ["DSA", "OOP", "SDLC", "Data Structures", "Algorithms"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-gray-700 pb-3">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-gray-700 rounded-xl px-8 py-4">
            <p className="text-gray-300 text-lg">
              Always learning and exploring new technologies to build better solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};