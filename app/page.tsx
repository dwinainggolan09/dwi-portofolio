"use client";

import { useState, useEffect } from "react";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  Code,
  Server,
  Cpu,
  Cloud,
  Database,
  Terminal,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    fullstack: [
      { name: "PHP & MySQL", level: 90 },
      { name: "RESTful API", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React/Next.js", level: 75 },
    ],
    backend: [
      { name: "Node.js/Express", level: 85 },
      { name: "Python", level: 88 },
      { name: "C/C++", level: 90 },
      { name: "Database Design", level: 85 },
    ],
    iot: [
      { name: "Arduino/ESP32", level: 90 },
      { name: "Sensor Integration", level: 88 },
      { name: "MQTT Protocol", level: 85 },
      { name: "Embedded C", level: 87 },
    ],
    devops: [
      { name: "Docker", level: 85 },
      { name: "Ansible", level: 82 },
      { name: "Linux Server", level: 88 },
      { name: "Apache Kafka", level: 80 },
    ],
  };

  const projects = [
    {
      title: "Campus Lost & Found Microservices",
      category: "Backend & DevOps",
      description:
        "Distributed system with Docker, MongoDB, Apache Kafka, and gRPC for fault-tolerant operations",
      tech: ["Docker", "MongoDB", "Kafka", "gRPC", "Microservices"],
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      highlights: ["Scalable Architecture", "Event-Driven", "Containerized"],
      github: "https://github.com/yourusername/campus-lost-found",
    },
    {
      title: "IoT Health Monitoring System",
      category: "IoT & Embedded",
      description:
        "Non-invasive GLURAKOL monitoring with Python, Arduino/ESP32, and real-time MQTT cloud integration",
      tech: ["Python", "Arduino", "ESP32", "MQTT", "Sensors"],
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      highlights: [
        "Real-time Monitoring",
        "Cloud Integration",
        "Data Analytics",
      ],
      github: "https://github.com/yourusername/iot-health-monitor",
    },
    {
      title: "Automated Server Configuration",
      category: "DevOps",
      description:
        "Ansible-based automation for DNS, HTTP, SMTP, SSH, and Proxy servers across VMs",
      tech: ["Ansible", "Linux", "Networking", "Infrastructure as Code"],
      icon: Terminal,
      color: "from-green-500 to-emerald-500",
      highlights: [
        "Infrastructure Automation",
        "Multi-Server Management",
        "Scalable Deployment",
      ],
      github: "https://github.com/yourusername/ansible-server-config",
    },
    {
      title: "Healthcare Information Platform",
      category: "Full Stack",
      description:
        "Web-based system centralizing healthcare facilities data across multiple cities",
      tech: ["PHP", "MySQL", "REST API", "Web Development"],
      icon: Code,
      color: "from-orange-500 to-red-500",
      highlights: ["RESTful API", "Database Design", "User Authentication"],
      github: "https://github.com/yourusername/healthcare-platform",
    },
    {
      title: "Library Management System",
      category: "Full Stack",
      description:
        "Dynamic web system with PHP/MySQL backend and secure RESTful APIs",
      tech: ["PHP", "MySQL", "REST API", "Authentication"],
      icon: Database,
      color: "from-indigo-500 to-blue-500",
      highlights: ["CRUD Operations", "API Security", "Transaction Management"],
      github: "https://github.com/yourusername/library-management",
    },
    {
      title: "IoT Automatic Clothes Dryer",
      category: "IoT & Hardware",
      description:
        "Arduino-based prototype with rainfall and LDR sensors for environmental adaptation",
      tech: ["Arduino", "IoT", "Sensors", "Wireless Control"],
      icon: Cloud,
      color: "from-teal-500 to-cyan-500",
      highlights: [
        "Sensor Integration",
        "Real-time Response",
        "Automated Control",
      ],
      github: "https://github.com/yourusername/iot-clothes-dryer",
    },
  ];

  const techStack = [
    {
      category: "Languages",
      items: ["Python", "PHP", "C/C++", "JavaScript", "SQL"],
    },
    { category: "Backend", items: ["Node.js", "Express", "REST API", "gRPC"] },
    { category: "Database", items: ["MySQL", "MongoDB", "PostgreSQL"] },
    {
      category: "DevOps",
      items: ["Docker", "Ansible", "Linux", "Apache Kafka"],
    },
    { category: "IoT", items: ["Arduino", "ESP32", "MQTT", "Sensors"] },
    { category: "Tools", items: ["Git", "Postman", "VS Code", "VirtualBox"] },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              DAN
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                    onClick={() => setActiveSection(item.toLowerCase())}
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block hover:text-cyan-400 transition-colors"
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-cyan-400 text-lg mb-2">Hi, I&apos;m</div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Dwi Aprino
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Nainggolan
                </span>
              </h1>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Final-year Computer Technology student passionate about building
                scalable systems, IoT solutions, and automated infrastructure.
                Experienced in microservices, distributed systems, and modern
                development practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
                >
                  Get In Touch <ChevronRight size={20} />
                </a>
                <a
                  href="#projects"
                  className="border border-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
                >
                  View Projects
                </a>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/dwinainggolan09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dwinainggolan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:dwigolan@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">
                        Available for Internship
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-gray-400 text-sm"></div>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <div className="text-gray-400 text-sm mb-2">
                        Quick Stats:
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 p-3 rounded">
                          <div className="text-2xl font-bold text-cyan-400">
                            7+
                          </div>
                          <div className="text-xs text-gray-400">Projects</div>
                        </div>
                        <div className="bg-gray-800/50 p-3 rounded">
                          <div className="text-2xl font-bold text-blue-400">
                            10+
                          </div>
                          <div className="text-xs text-gray-400">
                            Technologies
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I&apos;m a final-year Associate Degree student in Computer
                Technology at IT Del with a strong passion for building robust,
                scalable systems. My experience spans across full-stack
                development, IoT solutions, microservices architecture, and
                DevOps practices.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I thrive on solving complex technical challenges and
                implementing modern development practices. From building
                distributed systems with Docker and Kafka to creating IoT
                solutions with Arduino and ESP32, I enjoy working across the
                entire technology stack.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently seeking internship opportunities to apply my skills in
                real-world projects and contribute to innovative technical
                solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                What I Do
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-start gap-3">
                    <Code className="text-cyan-400 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-2">
                        Full Stack Development
                      </h4>
                      <p className="text-sm text-gray-400">
                        Building complete web applications with modern
                        frameworks, RESTful APIs, and database design
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start gap-3">
                    <Server className="text-blue-400 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-2">
                        Backend Engineering
                      </h4>
                      <p className="text-sm text-gray-400">
                        Designing scalable microservices, distributed systems,
                        and event-driven architectures
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all">
                  <div className="flex items-start gap-3">
                    <Cpu className="text-purple-400 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-2">IoT Development</h4>
                      <p className="text-sm text-gray-400">
                        Creating embedded systems with Arduino/ESP32, sensor
                        integration, and cloud connectivity
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all">
                  <div className="flex items-start gap-3">
                    <Terminal className="text-green-400 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-2">DevOps Engineering</h4>
                      <p className="text-sm text-gray-400">
                        Automating infrastructure with Docker, Ansible, and
                        implementing CI/CD pipelines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Showcasing my expertise across multiple domains
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500/50"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${project.color}`}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}
                      >
                        <Icon size={24} />
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-900 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-900 text-cyan-400 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-1 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-gray-400"
                        >
                          <ChevronRight size={14} className="text-cyan-400" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Proficient across multiple technology stacks
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500/30">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Full Stack
              </h3>
              {skills.fullstack.map((skill, i) => (
                <SkillBar key={i} {...skill} />
              ))}
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Backend
              </h3>
              {skills.backend.map((skill, i) => (
                <SkillBar key={i} {...skill} />
              ))}
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                IoT
              </h3>
              {skills.iot.map((skill, i) => (
                <SkillBar key={i} {...skill} />
              ))}
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                DevOps
              </h3>
              {skills.devops.map((skill, i) => (
                <SkillBar key={i} {...skill} />
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Technology Stack
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((category, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-cyan-400 mb-3">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, j) => (
                      <span
                        key={j}
                        className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Open for internship opportunities and collaborations
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <a
                        href="mailto:dwigolan@gmail.com"
                        className="text-cyan-400 hover:underline"
                      >
                        dwigolan@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <a
                        href="tel:+62895612419871"
                        className="text-cyan-400 hover:underline"
                      >
                        +62 895 6124 19871
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">LinkedIn</div>
                      <a
                        href="https://www.linkedin.com/in/dwinainggolan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        linkedin.com/in/dwinainggolan
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href="https://drive.google.com/file/d/1gHr4O6hX0FKazB68fbzujVEBZfMOgWBt/view?usp=sharing"
                  className="block bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  <div className="flex items-center justify-center gap-2 font-semibold text-lg">
                    <Download size={24} />
                    Download CV / Resume
                  </div>
                </a>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Available For</h3>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-semibold">
                        Internship Positions
                      </span>
                    </div>
                    <ul className="text-sm text-gray-400 space-y-1 ml-6">
                      <li>• Full Stack Developer</li>
                      <li>• Backend Engineer</li>
                      <li>• IoT Developer</li>
                      <li>• DevOps Engineer</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <div className="font-semibold mb-2">Location</div>
                    <div className="text-sm text-gray-400">
                      Open to remote and on-site opportunities
                    </div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <div className="font-semibold mb-2">Availability</div>
                    <div className="text-sm text-gray-400">
                      Ready to start immediately
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <a
                      href="mailto:dwigolan@gmail.com?subject=Internship Opportunity"
                      className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                    >
                      Contact Me for Opportunities
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Dwi Aprino Nainggolan. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dwinainggolan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:dwigolan@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
