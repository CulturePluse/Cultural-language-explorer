import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import djembe-3-296679 from '../assets/audio/djembe-3-296679.mp3';
import vite from '/vite.svg';

const languages = [
  "IsiZulu", "IsiXhosa", "Afrikaans", "Sepedi", 
  "Setswana", "English", "Sesotho", "Xitsonga", 
  "Siswati", "Tshivenda", "IsiNdebele"
];

const LangingPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000); // Change language every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = new Audio("/djembe-3-296679.mp3"); 
    audio.loop = true;  // Enable looping
    audio.play();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: "2rem", fontWeight: "bold" }}
      >
        {languages[index]}
      </motion.div>
    </div>
  );
};

export default LandingPage;
