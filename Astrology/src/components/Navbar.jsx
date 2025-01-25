import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const socialLinks = [
    { id: 1, href: "#", src: "/facebook.png", alt: "Facebook" },
    { id: 2, href: "#", src: "/INSTAGRAM.png", alt: "Instagram" },
    { id: 3, href: "#", src: "/X.png", alt: "Twitter/X" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-zinc-900 text-white z-50">
        <div className="wrapper max-w-screen-xl mx-auto flex items-center py-4 justify-between border-b-[1.5px] border-zinc-700">


          <motion.span
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}   
            transition={{ duration: 1 }}     
            className="text-2xl font-bold text-white font-['Satoshi']"
          >
            NITYA
          </motion.span>

          {/* Astrology Navigation Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}   
            transition={{ duration: 1.2 }}     
            className="links flex gap-10"
          >
            {[
              "Horoscope",
              "Zodiac Signs",
              "Astrology Reports",
              "Love Compatibility",
              "Daily Insights",
            ].map((elem, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-sm font-['Satoshi'] flex items-center gap-1 hover:text-yellow-500 transition-colors"
                whileHover={{ scale: 1.1, color: "#FFD700" }}
                whileTap={{ scale: 0.9 }}
              >
                {elem}
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <div className="socials flex gap-6">
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
