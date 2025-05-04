import React from 'react';
import './Home.css';
import Map from '../assets/MapOfSA.png';
import AfricanPattern from '../assets/african.png'; // African pattern background

const Home = () => {
  return (
    <div className="african-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <a href="/" className="navbar-brand">Culture Pulse</a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li className="nav-links-right">
              <a href="/languages">Learn A Language</a>
              <a href="/scanner">AR Scanner</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${AfricanPattern})` }}>
        <div className="hero-overlay tribal-overlay">
          <h1 className="hero-title african-text">CULTURE PULSE</h1>
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
              In South Africa and beyond, many young people are growing up unable to speak or understand their indigenous languages. 
              Urbanization, globalization, and a shift toward dominant languages have led to a slow erosion of linguistic heritage.
            </p>
          </div>
          <div className="story-column">
            <p>
              Culture Pulse was born out of a desire to reconnect generations with their mother tongues. 
              We’re not just building a platform—we’re building a movement to reclaim identity, 
              restore pride, and reawaken the beauty of our cultural languages.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="why-matters-section">
        <h2 className="section-title">
          <span className="title-decoration">♢</span> Why It Matters <span className="title-decoration">♢</span>
        </h2>
        <p className="section-subtitle">Language is more than words—it’s a way of life</p>
        <div className="why-grid">
          <div className="why-card">
            <h3>Identity</h3>
            <p>Language connects us to who we are and where we come from. It holds our stories, values, and roots.</p>
          </div>
          <div className="why-card">
            <h3>Knowledge</h3>
            <p>Indigenous languages hold wisdom passed down for generations—from farming techniques to moral lessons.</p>
          </div>
          <div className="why-card">
            <h3>Legacy</h3>
            <p>By learning and teaching our languages, we ensure that the next generation can carry our legacy forward.</p>
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
        </div>
      </section>
    </div>
  );
};

export default Home;
