'use client';
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

const TopBar = () => {
  const text = [
    'Secure Payment',
    'Free Delivery on all orders over £50 + 60-day free return',
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white p-4 text-center text-sm">
      <motion.p
        key={text[textIndex]}
        initial={{ opacity: 0, y: '-50%' }}
        animate={{ opacity: 1, y: '0%' }}
        exit={{ opacity: 0, y: '50%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '5px 0',
        }}
      >
        {text[textIndex]}
      </motion.p>
    </div>
  );
};

export default TopBar;
