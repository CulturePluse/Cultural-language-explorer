import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const greetings = [
  "Hello",
  "Sawubona",
  "Lotjhani",
  "Goeie More",
  "Dumela",
  "Thobela",
  "Molo",
  "Avuxeni",
  "Ndaa",
  "Aa"
];

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex + 1 === greetings.length) {
          clearInterval(interval);
          setTimeout(() => navigate("/home"), 2000); // Navigate to /home after last greeting
        }
        return (prevIndex + 1) % greetings.length;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    const audio = new Audio("/djembe-3-296679.mp3");
    audio.loop = true;
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
        {greetings[index]}
      </motion.div>
    </div>
  );
};

export default LandingPage;
