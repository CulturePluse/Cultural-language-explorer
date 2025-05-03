import { useState, useEffect } from "react";
import { motion } from "framer-motion";
/*import djembeAudio from './djembe-3-296679.mp3';*/

const languages = [
  {English:"Hello"},
  {IsiZulu:"Sawubona"}, 
  {IsiNdebel:"Lotjhani"}, 
  {Afrikaans:"Goeie More"}, 
  {SePedi:"Dumela"}, 
  {SeSotho:"Thobela"}, 
  {IsiXhosa:"Molo"}, 
  {XiTsonga:"Avuxeni"},
  {TshiVenda:"Ndaa","Aa"} 
];

const LandingPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000); // Change language every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = new Audio("/djembe-3-296679.mp3" );
    audio.loop = true;  // Enable looping
    audio.play().catch(error => console.error("Audio playback error:", error));
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
