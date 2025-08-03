import React from 'react';
import { Mail, Linkedin, Github, Phone, ExternalLink, Download } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "22wh1a0591@bvrithyderabad.edu.in",
      href: "mailto:22wh1a0591@bvrithyderabad.edu.in",
      color: "from-red-400 to-pink-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9866133457",
      href: "tel:+919866133457",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/srivarsha-bezawada-783326259",
      href: "https://linkedin.com/in/srivarsha-bezawada-783326259",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Srivarsha3004",
      href: "https://github.com/Srivarsha3004",
      color: "from-gray-400 to-gray-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6">
            Ready to collaborate on exciting projects or discuss opportunities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactLinks.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} bg-opacity-20`}>
                    <IconComponent className={`w-6 h-6 bg-gradient-to-r ${contact.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-400 transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors break-all">
                      {contact.value}
                    </p>
                  </div>
                  
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
                </div>
              </a>
            );
          })}
        </div>
        
        <div className="text-center">
          <div className="mb-8">
            <a 
              href="https://github.com/Srivarsha3004/Srivarsha_resume/raw/main/SRIVARSHA_RESUME.pdf"
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Download size={20} />
              <span className="text-lg">Download Resume</span>
            </a>
          </div>
          
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-gray-800 rounded-xl px-8 py-6">
            <p className="text-gray-300 text-lg mb-2">
              Let's build something amazing together!
            </p>
            <p className="text-gray-500">
              Open to internships, collaborations, and exciting opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};