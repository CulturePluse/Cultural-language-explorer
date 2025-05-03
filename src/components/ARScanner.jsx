import React, { useState, useRef } from 'react';
import { FaCamera, FaLanguage } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';

const ARScanner = () => {
  const [scannerActive, setScannerActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [recognitionResult, setRecognitionResult] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Swahili');
  const [error, setError] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const qrCodeUrl = `${window.location.origin}/ARScanner/`;

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
      <div>
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => setError(null)}>Try Again</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>AR Language Scanner</h1>

      <div>
        <button onClick={startScanner}><FaCamera /> Start Scanner</button>
      </div>

      {scannerActive && (
        <>
          <video ref={videoRef} autoPlay playsInline muted style={{ width: 400 }} />
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          <button onClick={captureAndProcess}>Capture</button>
        </>
      )}

      {!scannerActive && (
        <div style={{ marginTop: 20 }}>
          <QRCodeSVG value={qrCodeUrl} size={200} />
        </div>
      )}

      {capturedImage && (
        <div>
          <img src={capturedImage} alt="Captured" width="300" />
          <p>{recognitionResult}</p>
        </div>
      )}

      <div style={{ marginTop: 20 }}>
        <label><FaLanguage /> Choose Language: </label>
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
