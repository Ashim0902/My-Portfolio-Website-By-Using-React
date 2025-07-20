import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Camera, Video, Palette, GitBranch, Monitor } from 'lucide-react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 85 }
      ]
    },
    {
      title: "Design & Media",
      icon: <Camera className="h-6 w-6" />,
      skills: [
        { name: "Web Design", level: 80 },
        { name: "Photography", level: 85 },
        { name: "Video Editing", level: 75 },
        { name: "Photo/Video Production", level: 80 }
      ]
    }
  ];

  const additionalSkills = [
    { name: "Web Designing", icon: <Palette className="h-5 w-5" /> },
    { name: "Web Development", icon: <Monitor className="h-5 w-5" /> },
    { name: "Web App Development", icon: <Globe className="h-5 w-5" /> },
    { name: "Photo/Video Graphy", icon: <Camera className="h-5 w-5" /> },
    { name: "Click Photos/Videos", icon: <Camera className="h-5 w-5" /> },
    { name: "Video Editing", icon: <Video className="h-5 w-5" /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSkills(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-calculate experience metrics
  const calculateExperience = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    
    // Calculate total months of experience
    // 2024: 3 months hardware + 1 month workshop = 4 months
    // 2025: 3 months software + 1 month workshop = 4 months  
    // 2026: 6 months software = 6 months
    // Total: 14 months
    const totalMonths = 14;
    
    // Projects completed (currently 1 - NepaliThali)
    const projectsCompleted = 1;
    
    // Total internships (3 internships)
    const internships = 3;
    
    return {
      months: totalMonths,
      projects: projectsCompleted,
      internships: internships
    };
  };

  const experience = calculateExperience();

  return (
    <section id="skills" className="py-20 bg-gray-900" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and creative abilities developed through education and hands-on experience
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-900/30 p-3 rounded-lg mr-4 border border-orange-500/20">
                  <div className="text-orange-400">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: visibleSkills ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 4 + skillIndex) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center border border-orange-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-white">
                  {skill.icon}
                </div>
                <h4 className="text-sm font-semibold text-white">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Learning Journey</h3>
            <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
              Currently pursuing Bachelor's in Software Engineering (2026-2030) with hands-on experience 
              from multiple internships and workshops. Passionate about continuous learning and staying 
              updated with the latest technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{experience.months}+</div>
                <div className="text-sm opacity-90">Months of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{experience.projects}+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{experience.internships}</div>
                <div className="text-sm opacity-90">Internships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;