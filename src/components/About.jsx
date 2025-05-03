import React from 'react';
import './About.css';
import Map from '../assets/MapOfSA.png';
import AfricanPattern from '../assets/african.png'; // Add an African pattern background


const About = () => {
  return (
    <div className="african-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${AfricanPattern})` }}>
        <div className="hero-overlay tribal-overlay">
          <h1 className="hero-title african-text">Language Vision</h1>
          <p className="hero-subtitle">Preserving Heritage Through Language</p>
          <div className="african-border"></div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="plans-section">
        <h2 className="section-title">
          <span className="title-decoration">❖</span> Our Approach <span className="title-decoration">❖</span>
        </h2>
        <p className="section-subtitle">How we empower language and culture</p>
        <div className="plans-grid">
          <div className="plan-card">
            <div className="card-icon">📚</div>
            <h3>Interactive Lessons</h3>
            <p>Learn through immersive and engaging activities.</p>
          </div>
          <div className="plan-card">
            <div className="card-icon">🌍</div>
            <h3>Cultural Preservation</h3>
            <p>Keeping traditions alive through language.</p>
          </div>
          <div className="plan-card">
            <div className="card-icon">🤝</div>
            <h3>Community Connection</h3>
            <p>Building bridges through shared language learning.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">Rooted in heritage, growing with purpose</p>
        <div className="story-columns">
          <div className="story-column">
            <p>
              ZuluLingo was born from the desire to preserve and share the rich linguistic and cultural heritage of the Zulu people.
              In a world rapidly moving toward globalization, we believe it's essential to protect the soul of indigenous languages.
            </p>
          </div>
          <div className="story-column">
            <p>
              We aim to empower both native speakers and language learners by creating a platform that's accessible, beautiful, and meaningful.
              Our journey continues with each person who discovers the rhythm and richness of isiZulu.
            </p>
          </div>
        </div>
      </section>

      {/* Language Map */}
      <section className="map-section">
        <h2 className="section-title">
          <span className="title-decoration">⧉</span> Language Spread <span className="title-decoration">⧉</span>
        </h2>
        <div className="map-container">
          <img src={Map} alt="Language Distribution Map" className="map-image" />
            <div className="legend">
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">
          <span className="title-decoration">✻</span> What Learners Say <span className="title-decoration">✻</span>
        </h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <div className="testimonial-border-top"></div>
            <p>"This platform brought me closer to my roots."</p>
            <strong>Thabang Ndaba</strong>
            <small>isiZulu Learner</small>
            <div className="testimonial-border-bottom"></div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-border-top"></div>
            <p>"Fun, beautiful, and meaningful learning experience."</p>
            <strong>Sibongile Dlamini</strong>
            <small>isiXhosa Learner</small>
            <div className="testimonial-border-bottom"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
