import React from 'react';
import { Github, ExternalLink, Play } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Tetris Game",
      tech: ["Python", "Pygame"],
      description: [
        "Classic Tetris gameplay with scoring and collision detection",
        "Includes animations, game-over logic, and sound effects",
        "Smooth piece rotation and line clearing mechanics",
        "Real-time score tracking and level progression"
      ],
      github: "https://github.com/Srivarsha3004/Tetris-game",
      video: "https://raw.githubusercontent.com/Srivarsha3004/Tetris-game/refs/heads/main/TETRIS_GAME(Execution_video).mp4",
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Personalized Gift Store",
      tech: ["HTML", "CSS", "JavaScript", "JDBC", "Servlets"],
      description: [
        "E-commerce app with login, product browsing, and MySQL backend",
        "Mobile-friendly UI and responsive layout",
        "Secure user authentication and session management",
        "Dynamic product catalog with search functionality"
      ],
      github: "https://github.com/Srivarsha3004/Personalized-Gift-Store",
      video: "https://raw.githubusercontent.com/Srivarsha3004/Personalized-Gift-Store/refs/heads/main/personalised%20gift%20store%20video(final).mp4",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "AI-Powered Smart Preparation",
      tech: ["Django", "Python", "AI/ML"],
      description: [
        "Web app that extracts questions from PDFs and compares them",
        "Chatbot with speech synthesis and sentiment-based feedback",
        "Intelligent question generation using machine learning",
        "Interactive study sessions with personalized recommendations"
      ],
      github: "https://github.com/Srivarsha3004/AI-Powered_Smart_Prep",
      video: "https://s47-hzfi.freeconvert.com/task/688f04a37cbbeebdc764c496/AI-SmartPrep(Execution_video).mp4",
      gradient: "from-blue-400 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            AI/ML, and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-[1.02] ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:flex">
                {/* Video Section */}
                <div className="lg:w-1/2 relative">
                  <div className="aspect-video bg-gray-800 relative overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      poster={`data:image/svg+xml;base64,${btoa(`
                        <svg width="640" height="360" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#1f2937"/>
                          <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#9ca3af" text-anchor="middle" dy=".3em">
                            ${project.title}
                          </text>
                        </svg>
                      `)}`}
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Project Title */}
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-sm font-medium bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white rounded-full border border-gray-700`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {project.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3 text-gray-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};