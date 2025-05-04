import React, { useState } from 'react';
import '/Learninglanguage.css'
import { useParams } from 'react-router-dom';
import ndebele from '../../assets/ndebele2.jpg';

const data = {
  isiZulu: {
    Greetings: [
      {
        word: 'Sawubona',
        translation: 'Hello',
        context: 'In Zulu culture, greeting is a sacred moment of acknowledging the presence of another person\'s spirit',
        examples: ['Sawubona, unjani? (Hello, how are you?)', 'Sawubona, ngiyaphila (Hello, I am fine)'],
        image: monkeyImage,
      },
      {
        word: 'Unjani',
        translation: 'How are you',
        context: 'Used to inquire about someone’s well-being',
        examples: ['Unjani? Ngiyaphila. (How are you? I’m well.)'],
        image: monkeyImage,
      },
    ],
    // Other categories like Food, Clothing, etc.
  },
  // Add other languages as needed
};

export default function LearningLanguage() {
  const { lang } = useParams();
  const [category, setCategory] = useState('Greetings');
  const [index, setIndex] = useState(0);

  const categories = ['Greetings', 'Food', 'Clothing', 'Household'];
  const entries = data[lang]?.[category] || [];

  const current = entries[index] || {};

  const next = () => setIndex((prev) => (prev + 1) % entries.length);
  const prev = () => setIndex((prev) => (prev - 1 + entries.length) % entries.length);

  return (
    <div className="learning-page">
      <div className="header" style={{ backgroundImage: `url(/assets/ndebele.jpg)` }}>
        <h1>Learn {lang}</h1>
      </div>

      <div className="content">
        <div className="sidebar">
          <h2>Categories</h2>
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === category ? 'active' : ''}
              onClick={() => {
                setCategory(cat);
                setIndex(0);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="card">
          <div className="nav-button" onClick={prev}>⬅️</div>
          <div className="card-content">
            <img src={current.image} alt={current.word} />
            <div className="details">
              <h2>{current.word} <button className="audio-btn">🔊</button></h2>
              <p className="translation">{current.translation}</p>
              <div className="context">
                <strong>Cultural Context</strong>
                <p>{current.context}</p>
              </div>
              <div className="examples">
                <strong>Usage Examples</strong>
                <ul>
                  {current.examples?.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-button" onClick={next}>➡️</div>
        </div>
      </div>
    </div>
  );
}