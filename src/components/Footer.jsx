import React from 'react';
import { Github, Mail, ExternalLink, Heart, Code, Camera } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Ashim
              </span>
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Software Engineering student from Pokhara, Nepal, passionate about creating innovative digital solutions. 
              Specializing in full-stack development, web design, and creative media production.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ashim0902"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-110 border border-orange-500/20"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a
                href="mailto:ashimzwork1@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-110 border border-orange-500/20"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Services
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Code className="h-4 w-4" />
                <span>Web Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <span>Web App Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <Camera className="h-4 w-4" />
                <span>Photography</span>
              </li>
              <li className="flex items-center space-x-2">
                <Camera className="h-4 w-4" />
                <span>Video Editing</span>
              </li>
              <li className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <span>Web Design</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Ashim. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>

        {/* Education & Experience Summary */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">
              Currently pursuing Bachelor's in Software Engineering (2026-2030)
            </p>
            <p className="text-sm text-gray-400">
              Completed Computer Engineering (Grade 9-12) • Multiple internships in software & hardware
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;