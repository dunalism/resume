import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0">
      {/* Base background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          zIndex: -2
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, rgba(26, 35, 126, 0.95), rgba(13, 71, 161, 0.95), rgba(41, 98, 255, 0.9))',
          zIndex: -1
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 2 + 'px',
              height: Math.random() * 3 + 2 + 'px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated gradient mesh */}
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent)',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Background;