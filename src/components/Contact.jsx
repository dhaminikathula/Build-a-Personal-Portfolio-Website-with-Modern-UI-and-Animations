import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const MagneticButton = ({ children, className, href, ariaLabel }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      whileHover={{ scale: 1.1 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-textMain mb-6"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-textMuted text-lg mb-10 max-w-2xl mx-auto"
          >
            Whether you have an idea for a project or just want to chat, my inbox is always open. Let's create something extraordinary together.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <form className="glass-card p-8 md:p-10 rounded-3xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  required 
                  className="w-full bg-transparent border-b border-white/20 focus:border-primary outline-none py-3 px-2 text-white peer transition-colors"
                  placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-2 top-3 text-textMuted transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-primary pointer-events-none"
                >
                  Your Name
                </label>
              </div>

              <div className="relative group mt-2">
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="w-full bg-transparent border-b border-white/20 focus:border-primary outline-none py-3 px-2 text-white peer transition-colors"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-2 top-3 text-textMuted transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs peer-valid:text-primary pointer-events-none"
                >
                  Your Email
                </label>
              </div>

              <div className="relative group mt-2">
                <textarea 
                  id="message" 
                  required 
                  rows="4"
                  className="w-full bg-transparent border-b border-white/20 focus:border-primary outline-none py-3 px-2 text-white peer transition-colors resize-none"
                  placeholder=" "
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-2 top-3 text-textMuted transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-6 peer-valid:text-xs peer-valid:text-primary pointer-events-none"
                >
                  Your Message
                </label>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-medium shadow-[0_0_20px_-5px_#0ea5e9] hover:shadow-[0_0_30px_-5px_#0ea5e9] transition-all"
              >
                Send Message <FiSend />
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
          >
            <div className="flex gap-6 mb-12">
              <MagneticButton 
                href="mailto:dhaminikathula@gmail.com" 
                className="p-6 glass rounded-full text-textMain hover:text-primary border border-white/10 hover:border-primary/50 transition-colors shadow-2xl"
                ariaLabel="Email"
              >
                <FiMail className="text-3xl" />
              </MagneticButton>
              <MagneticButton 
                href="https://github.com/dhaminikathula" 
                className="p-6 glass rounded-full text-textMain hover:text-white border border-white/10 hover:border-white/50 transition-colors shadow-2xl"
                ariaLabel="GitHub"
              >
                <FiGithub className="text-3xl" />
              </MagneticButton>
              <MagneticButton 
                href="https://www.linkedin.com/in/dhamini-kathula-170a50280/" 
                className="p-6 glass rounded-full text-textMain hover:text-secondary border border-white/10 hover:border-secondary/50 transition-colors shadow-2xl"
                ariaLabel="LinkedIn"
              >
                <FiLinkedin className="text-3xl" />
              </MagneticButton>
            </div>
            
            <div className="glass p-8 rounded-3xl w-full border border-white/5 text-center lg:text-left">
              <h4 className="text-xl font-display font-medium text-white mb-2">Location</h4>
              <p className="text-textMuted mb-6">India</p>
              
              <h4 className="text-xl font-display font-medium text-white mb-2">Status</h4>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="text-green-400">Available for Opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
