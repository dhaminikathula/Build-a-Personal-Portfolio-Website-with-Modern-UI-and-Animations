import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-textMuted text-sm font-mono">
          Designed & Built by Alex Morgan &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
