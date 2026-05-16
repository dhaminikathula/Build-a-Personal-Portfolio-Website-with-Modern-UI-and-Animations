import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 rounded-3xl max-w-4xl mx-auto backdrop-blur-2xl"
        >
          <motion.h2 variants={itemVariants} className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
            Welcome to my universe
          </motion.h2>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold text-textMain mb-6 leading-tight">
            Hi, I'm Dhamini Kathula
            <br />
            <span className="text-gradient">
              Data Science Innovator.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I specialize in orchestrating robust data pipelines, scalable architectures, and intelligent systems to transform complex data into actionable insights and seamless digital experiences.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#projects" 
              className="group relative flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all backdrop-blur-md border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#8b5cf6]"
            >
              Explore My Work <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 text-textMuted hover:text-white rounded-full font-medium transition-all hover:scale-105 underline-offset-4 hover:underline"
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
