import React, { useState, useRef } from 'react';
import { FaCamera, FaLanguage } from 'react-icons/fa';
import { GiPencil } from 'react-icons/gi';
import { PiTextAaBold } from 'react-icons/pi';
import { BsLightbulb, BsCrosshair, BsPhone } from 'react-icons/bs';
import { QRCodeSVG } from 'qrcode.react';
import './AR.css'; // <-- Keep this to apply styling

const ARScanner = () => {
  const [scannerActive, setScannerActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [recognitionResult, setRecognitionResult] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Zulu');
  const [error, setError] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const qrCodeUrl = `${window.location.origin}/ARScanner/`;

  const modelDatabase = [
    {
      name: 'Tree',
      translations: {
        Zulu: 'Isihlahla',
        Xhosa: 'Umthi',
        Afrikaans: 'Boom',
        Sesotho: 'Sefate',
        Setswana: 'Setlhare',
        isiNdebele: 'Isihlahla',
        Sepedi: 'Setlhare',
        Tshivenda: 'Mutshelo',
        Xitsonga: 'Murhi',
        English: 'Tree',
      },
    },
  ];

  const languages = [
    'Zulu', 'Xhosa', 'Afrikaans', 'Sesotho',
    'Setswana', 'isiNdebele', 'Sepedi',
    'Tshivenda', 'Xitsonga', 'English',
  ];

  const startScanner = async () => {
    try {
      setScannerActive(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      setError("Camera access denied. Please allow access.");
      setScannerActive(false);
    }
  };

  const captureAndProcess = () => {
    try {
      if (videoRef.current && canvasRef.current) {
        const context = canvasRef.current.getContext('2d');
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);

        const stream = videoRef.current.srcObject;
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }

        const imageUrl = canvasRef.current.toDataURL('image/png');
        setCapturedImage(imageUrl);
        setScannerActive(false);

        const randomObject = modelDatabase[Math.floor(Math.random() * modelDatabase.length)];
        const translation = randomObject.translations[selectedLanguage] || 'Translation not available';
        setRecognitionResult(`Recognized: ${randomObject.name} (${selectedLanguage}: ${translation})`);
      }
    } catch (err) {
      setError("Error processing image: " + err.message);
    }
  };

  if (error) {
    return (
      <div className="scanner-container scanner-panel">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => setError(null)}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="scanner-container">
      <h1>AR Language Scanner</h1>

      <div className="scanner-grid">
        {/* LEFT: Instructions */}
        <div className="how-it-works">
          <h2>How It Works</h2>
          <ul>
            <li><FaCamera /> Point your camera at any object or text</li>
            <li><GiPencil /> The AR system recognizes it</li>
            <li><PiTextAaBold /> Instantly see a translation in your language</li>
          </ul>
        </div>

        {/* RIGHT: Scanner Interface */}
        <div className="scanner-panel">
          <button onClick={startScanner}><FaCamera /> Start Scanner</button>

          {scannerActive && (
            <div className="camera-area">
              <video ref={videoRef} autoPlay playsInline muted />
              <canvas ref={canvasRef} style={{ display: 'none' }} />
              <button className="capture-btn" onClick={captureAndProcess}>Capture</button>
            </div>
          )}

          {!scannerActive && (
            <div className="camera-area">
              <QRCodeSVG value={qrCodeUrl} size={200} />
            </div>
          )}

          {/* Tips */}
          <div className="tips">
            <h3>Tips</h3>
            <ul>
              <li><BsLightbulb /> Ensure good lighting</li>
              <li><BsPhone /> Hold your device steady</li>
              <li><BsCrosshair /> Keep objects centered</li>
            </ul>
          </div>

          {/* Recognition Result */}
          {recognitionResult && (
            <div className="result">
              <p>{recognitionResult}</p>
              {capturedImage && <img src={capturedImage} alt="Captured preview" />}
            </div>
          )}
        </div>
      </div>

      {/* Language Dropdown */}
      <div className="lang-dropdown">
        <label><FaLanguage /> Choose Language:</label>
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
