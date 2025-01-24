import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';

const Navbar = () => {
  const socialLinks = [
    { id: 1, href: "#", src: "/facebook.png", alt: "Facebook" },
    { id: 2, href: "#", src: "/INSTAGRAM.png", alt: "Instagram" },
    { id: 3, href: "#", src: "/X.png", alt: "Twitter/X" },
  ];

  return (
    <>
      <div className='h-screen py-4 bg-gray-900'>
        <Sidebar/>
        <div className='wrapper max-w-[1200px] mx-auto flex items-center justify-between'>
          <motion.span
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}   
            transition={{ duration: 1 }}     
            className="text-2xl font-bold text-white"
          >
            NITYA
          </motion.span>
          <div className='socials flex gap-6'>
            {socialLinks.map(({ id, href, src, alt }) => (
              <motion.a
                key={id}
                href={href}
                className="hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}  
              >
                <motion.img
                  className="h-auto max-h-10"
                  src={src}
                  alt={alt}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: id * 0.2 }} 
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
