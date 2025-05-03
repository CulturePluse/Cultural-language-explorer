import React, { useState } from 'react';
import './Learninglanguage.css';
import ndebele from '../../assets/ndebele2.jpg';
const categories = [
  { name: 'Greetings' },
  { name: 'Food' },
  { name: 'Clothing' },
  { name: 'Household' }
];

const currentWord = {
  zulu: 'Sawubona',
  english: 'Hello',
  context: 'In Zulu culture, greeting is a sacred moment of acknowledging the presence of another person\'s spirit.',
  examples: [
    'Sawubona, unjani? (Hello, how are you?)',
    'Sawubona, ngiyaphila (Hello, I am fine)'
  ]
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Greetings');

  return (
    <div className="app">
      <header className="header">
        <h1>Learn isiZulu</h1>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <ul>
            {categories.map((category) => (
              <li
                key={category.name}
                className={selectedCategory === category.name ? 'active' : ''}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </aside>

        <div className="content">
          <div className="image-section">
            <img src= {ndebele} alt="Cultural Animal" />
          </div>
          <div className="word-info">
            <h3>{currentWord.zulu} <span role="img" aria-label="sound">🔊</span></h3>
            <p className="translation">{currentWord.english}</p>

            <div>
              <p className="section-title">Cultural Context</p>
              <p>{currentWord.context}</p>
            </div>

            <div className="examples-section">
              <p className="section-title">Usage Examples</p>
              <ul>
                {currentWord.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
