import React from "react";
import { Github, Mail, ArrowDown, Download, Code, Camera } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/30"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600/20 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-orange-400/20 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="relative mb-8">
            <img
              src="Ashim.jpg"
              alt="Ashim Profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500 shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-gray-900 animate-pulse"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Ashim
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Software Engineer & Full-Stack Developer
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative digital solutions with modern
            technologies. Specializing in web development, photography, and
            video editing with hands-on experience from multiple internships and
            workshops.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-orange-500/20">
              <Code className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-medium text-white">
                Full-Stack Developer
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-orange-500/20">
              <Camera className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-medium text-white">
                Photo/Video Editor
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>

            <a
              href="/ashim-cv.pdf"
              download
              className="px-8 py-4 bg-gray-800 text-white border-2 border-orange-500 rounded-lg font-semibold hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Download CV</span>
            </a>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Ashim0902"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-110 shadow-lg border border-orange-500/20"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a
                href="mailto:ashimzwork1@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-110 shadow-lg border border-orange-500/20"
              >
                <Mail className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          <button
            onClick={scrollToProjects}
            className="animate-bounce text-gray-400 hover:text-orange-400 transition-colors"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
