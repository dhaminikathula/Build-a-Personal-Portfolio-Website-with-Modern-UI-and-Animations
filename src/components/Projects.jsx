import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'THUB Prime: AI-Powered Student Success',
    description: 'A high-performance, secure educational platform for streamlining feedback and attendance. Features real-time tracking, an asynchronous Kafka pipeline, AES-256-GCM encryption, and AI-driven sentiment analysis using Google Gemini Pro.',
    tech: ['Flutter', 'Node.js', 'Kafka', 'MongoDB', 'Gemini AI', 'Docker'],
    github: 'https://github.com/jaswanth4237/Thub_Prime.git',
    live: '#',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Event-Driven CDC System',
    description: 'A production-style Change Data Capture system built using MySQL, Kafka, and Python. Implements deterministic watermark tracking, reliable event publishing, and idempotent processing with robust unit testing.',
    tech: ['Python', 'Kafka', 'MySQL', 'Docker', 'Zookeeper', 'Pytest'],
    github: 'https://github.com/dhaminikathula/Event-Driven-Change-Data-Capture-for-a-Relational-Database.git',
    live: '#',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Polyglot Data Export Engine',
    description: 'A memory-efficient data export engine designed to stream massive datasets (up to 10M rows) into multiple formats (CSV, JSON, XML, Parquet) while operating strictly under 256MB memory constraints using async real-time streaming.',
    tech: ['PostgreSQL', 'asyncpg', 'PyArrow', 'Python'],
    github: 'https://github.com/dhaminikathula/Polyglot-Data-Export-Engine.git',
    live: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-textMain mb-4"
          >
            Featured <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-textMuted max-w-2xl mx-auto text-lg"
          >
            A selection of my recent endeavors in crafting digital perfection.
          </motion.p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative group rounded-2xl perspective-1000">
                <TiltCard className="relative w-full h-full rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 group-hover:opacity-0 transition-opacity duration-500 z-10 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-secondary/10 blur-xl scale-110 -z-10 group-hover:bg-primary/20 transition-colors duration-500 rounded-2xl"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover rounded-2xl border border-white/10"
                    loading="lazy"
                  />
                </TiltCard>
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:text-right' : 'text-left'} z-20`}>
                <p className="text-secondary font-medium mb-2 tracking-widest uppercase text-sm">Featured Project</p>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-textMain mb-6 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className={`glass-card p-8 rounded-2xl shadow-2xl mb-8 border border-white/5 backdrop-blur-xl ${index % 2 !== 0 ? 'md:-ml-12' : 'md:-mr-12'} relative z-30 transform hover:-translate-y-2 transition-transform duration-300`}>
                  <p className="text-textMuted text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <ul className={`flex flex-wrap gap-4 text-primary/80 font-mono text-sm mb-8 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                  {project.tech.map((item) => (
                    <li key={item} className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{item}</li>
                  ))}
                </ul>
                
                <div className={`flex gap-6 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-all hover:scale-125 text-2xl">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-all hover:scale-125 text-2xl">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
