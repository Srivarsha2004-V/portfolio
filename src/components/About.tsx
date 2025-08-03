import React from 'react';
import { ExternalLink, User, Code, Brain } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm <span className="text-white font-semibold">Srivarsha</span>, a passionate Computer Science student at 
                <span className="text-blue-400"> BVRIT Hyderabad</span>. I specialize in full-stack development, 
                AI/ML, and cloud computing.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I enjoy building meaningful applications using Java, Python, Django, and modern web technologies. 
                My focus is on creating efficient solutions that combine robust backend logic with intuitive user experiences.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always eager to learn new technologies and solve complex problems through innovative approaches.
              </p>
            </div>

            {/* Profile Link */}
            <div className="pt-4">
              <a 
                href="https://drive.google.com/file/d/1GwgPxzvo4Vd2Tup1C8oEm1fyLot7YM_q/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
              >
                <span>View My Profile</span>
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 bg-black/40 rounded-lg border border-gray-800">
                <User className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Student</div>
                <div className="text-gray-400 text-sm">BVRIT Hyderabad</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-lg border border-gray-800">
                <Code className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Full-Stack</div>
                <div className="text-gray-400 text-sm">Developer</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-lg border border-gray-800">
                <Brain className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <div className="text-white font-semibold">AI/ML</div>
                <div className="text-gray-400 text-sm">Enthusiast</div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <div className="text-white font-semibold text-xl">Srivarsha</div>
                  <div className="text-gray-400 mt-2">CS Student</div>
                  <div className="text-gray-500 text-sm mt-1">BVRIT Hyderabad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};