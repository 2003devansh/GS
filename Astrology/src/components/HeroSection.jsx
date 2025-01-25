import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen absolute top-0 left-0 w-full"
      style={{ backgroundImage: "url(/Background.jpg)" }}
    >
      <div className="flex justify-center items-center h-full text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold mb-8">
            Welcome to <span className="text-yellow-500">Nitya Astrology</span>
          </h1>
          <span className="text-2xl text-yellow-500 font-semibold">
            <Typewriter
              words={[
                "Discover Your Zodiac Destiny.",
                "Unlock the Secrets of the Stars.",
                "Astrology Insights Tailored for You.",
                "Explore Love Compatibility and More!",
                "Find Guidance in the Celestial Realm.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
