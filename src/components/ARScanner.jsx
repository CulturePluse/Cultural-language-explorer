import React, { useState, useRef, useEffect } from 'react';
import { FaCamera, FaLanguage } from 'react-icons/fa';
import './ARScanner.css';

const ARScanner = () => {
  const [scannerActive, setScannerActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [recognitionResult, setRecognitionResult] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Swahili');

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const modelDatabase = [
    {
      name: 'Tree',
      translations: {
        Swahili: 'Mti',
        Yoruba: 'Igi',
        Zulu: 'Isihlahla',
        Hausa: 'Itace',
        Igbo: 'Osisi',
        Shona: 'Muti',
        Oromo: 'Muka'
      }
    }
  ];

  const languages = ['Swahili', 'Yoruba', 'Zulu', 'Hausa', 'Igbo', 'Amharic', 'Shona', 'Oromo'];

  const startScanner = async () => {
    setScannerActive(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      alert("Camera access denied. Please allow access.");
    }
  };

  const captureAndProcess = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      const imageDataUrl = canvasRef.current.toDataURL('image/png');
      setCapturedImage(imageDataUrl);
      const stream = videoRef.current.srcObject;
      stream.getTracks().forEach(track => track.stop());
      setScannerActive(false);
      const randomObject = modelDatabase[Math.floor(Math.random() * modelDatabase.length)];
      const translation = randomObject.translations[selectedLanguage];
      setRecognitionResult(`Recognized: ${randomObject.name} (${selectedLanguage}: ${translation})`);
    }
  };

  return (
    <div className="scanner-container">
      <h1>AR Language Scanner</h1>
      <div className="scanner-grid">
        <div className="how-it-works">
          <h2>How It Works</h2>
          <ul>
            <li><FaCamera /> Point your camera at any object or text in your environment</li>
            <li><span>✏️</span> Our AR system will recognize the object or text</li>
            <li><FaLanguage /> See the translation in your chosen African language instantly</li>
          </ul>
        </div>

        <div className="scanner-panel">
          <button onClick={startScanner}><span>▶</span> Start Scanner</button>
          <div className="tips">
            <h3>Tips</h3>
            <ul>
              <li>💡 Ensure good lighting for better recognition</li>
              <li>✲ Hold your device steady</li>
              <li>🖼 Keep objects within frame</li>
            </ul>
          </div>
        </div>
      </div>

      {scannerActive && (
        <div className="camera-area">
          <video ref={videoRef} autoPlay playsInline muted />
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          <button onClick={captureAndProcess} className="capture-btn">Capture Object</button>
        </div>
      )}

      {capturedImage && (
        <div className="result">
          <img src={capturedImage} alt="Captured" />
          <p>{recognitionResult}</p>
        </div>
      )}

      <div className="lang-dropdown">
        <label>Select Language: </label>
        <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
          {languages.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ARScanner;
