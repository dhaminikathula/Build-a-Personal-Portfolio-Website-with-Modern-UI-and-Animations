import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiC, SiPython, SiDart, SiFlutter, SiApachekafka, 
  SiDocker, SiMongodb, SiNumpy, SiPandas, SiNodedotjs, SiMysql
} from 'react-icons/si';
import { FaJava, FaChartBar } from 'react-icons/fa';

const skills = [
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Dart', icon: SiDart, color: '#0175C2' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Kafka', icon: SiApachekafka, color: '#231F20' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Numpy', icon: SiNumpy, color: '#013243' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'Matplotlib', icon: FaChartBar, color: '#11557C' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring' } },
};

const floatingAnimation = {
  y: ["-5%", "5%"],
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-textMain mb-4"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-textMuted max-w-2xl mx-auto text-lg"
          >
            The tools and technologies I wield to forge high-end digital experiences.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 flex flex-col items-center justify-center rounded-3xl group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300"
              style={{ '--hover-color': skill.color }}
            >
              <motion.div
                animate={floatingAnimation}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <skill.icon 
                  className="text-6xl mb-6 text-textMuted/70 group-hover:text-[var(--hover-color)] transition-colors duration-500 drop-shadow-lg" 
                />
              </motion.div>
              <span className="font-medium text-textMain tracking-wide">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
