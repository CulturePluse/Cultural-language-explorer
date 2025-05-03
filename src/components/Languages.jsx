import React, { useState } from 'react';
import './Languages.css';
import isiZulu from '../assets/ndebele.jpg';
import isiXhosa from '../assets/ndebele2.jpg';
import sesotho from '../assets/ndebele3.jpg';
import setswana from '../assets/ndebele4.jpg';
import afrikaans from '../assets/ndebele.jpg';
import sepedi from '../assets/ndebele3.jpg';

const languages = [
  { name: 'isiZulu', desc: 'Most widely spoken language in South Africa', img: isiZulu },
  { name: 'isiXhosa', desc: 'Known for its distinctive click sounds', img: isiXhosa },
  { name: 'Sesotho', desc: 'Traditional language of the Basotho people', img: sesotho },
  { name: 'Setswana', desc: 'Widely spoken in Botswana and South Africa', img: setswana },
  { name: 'Afrikaans', desc: 'Developed from Dutch colonial settlers', img: afrikaans },
  { name: 'Sepedi', desc: 'Northern Sotho language of South Africa', img: sepedi },
];

const greetings = {
  word: 'Sawubona',
  meaning: 'Hello',
  context: 'In Zulu culture, greeting is a sacred moment of acknowledgement for the presence of another person or being.',
  examples: [
    { zulu: 'Sawubona, unjani?', english: 'Hello, how are you?' },
    { zulu: 'Sawubona, ngiyaphila!', english: 'Hello, I am fine!' },
  ]
};

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="app">
      {!selectedLanguage ? (
        <div className="language-selection">
          <h1>Choose Your Language Journey</h1>
          <div className="language-grid">
            {languages.map((lang) => (
              <div key={lang.name} className="language-card">
                <img src={lang.img} alt={lang.name} />
                <h3>{lang.name}</h3>
                <p>{lang.desc}</p>
                <button onClick={() => setSelectedLanguage(lang.name)}>Start Learning</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="learning-interface">
          <header className="header">
            <h2>Learn {selectedLanguage}</h2>
          </header>
          <aside className="sidebar">
            <ul>
              <li className="active">Greetings</li>
              <li>Food</li>
              <li>Clothing</li>
              <li>Household</li>
            </ul>
          </aside>
          <main className="content">
            <h3>{greetings.word}</h3>
            <p className="meaning">{greetings.meaning}</p>
            <p className="context">{greetings.context}</p>
            <div className="examples">
              {greetings.examples.map((ex, index) => (
                <p key={index}><strong>{ex.zulu}</strong> – {ex.english}</p>
              ))}
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
