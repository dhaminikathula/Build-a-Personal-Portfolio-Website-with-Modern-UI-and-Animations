import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center gap-16 glass-card p-8 md:p-12 rounded-3xl"
        >
          {/* Image Side */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div variants={itemVariants} className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-6 scale-105 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 opacity-70 blur-md"></div>
              <img 
                src="/profile.jpg" 
                alt="Dhamini Sri Raja Jahnavi Kathula" 
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:shadow-[0_0_2rem_-0.5rem_#0ea5e9]"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-bold text-textMain mb-6">
              Who <span className="text-primary">Am I?</span>
            </motion.h2>
            <div className="space-y-4 text-textMuted text-lg leading-relaxed">
              <motion.p variants={itemVariants}>
                I'm Dhamini Sri Raja Jahnavi Kathula, a passionate tech enthusiast currently pursuing my final year B.Tech in the Data Science group. 
              </motion.p>
              <motion.p variants={itemVariants}>
                My journey is driven by a deep fascination for data-driven architectures, machine learning models, and building highly scalable, event-driven applications that solve real-world problems.
              </motion.p>
              <motion.p variants={itemVariants}>
                Whether it's orchestrating complex data pipelines, developing cross-platform applications, or exploring the depths of generative AI, I am always eager to learn, adapt, and build digital perfection.
              </motion.p>
            </div>
            
            <motion.div variants={itemVariants} className="mt-8 flex gap-4">
              <div className="glass px-6 py-3 rounded-xl border border-white/10 text-center">
                <div className="text-2xl font-bold text-textMain">15+</div>
                <div className="text-sm text-textMuted">Tech Skills</div>
              </div>
              <div className="glass px-6 py-3 rounded-xl border border-white/10 text-center">
                <div className="text-2xl font-bold text-textMain">10+</div>
                <div className="text-sm text-textMuted">Projects Built</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
