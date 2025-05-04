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
              <a href="/languages" className="button-link">Learn A Language</a>
              <a href="/scanner" className="button-link">AR Scanner</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${AfricanPattern})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">CULTURE PULSE</h1>
          <p className="hero-subtitle">Preserving Heritage Through Language</p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="plans-section">
        <h2 className="section-title">❖ Our Approach ❖</h2>
        <p className="section-subtitle">How we empower language and culture</p>
        <div className="plans-grid">
          {[
            { icon: '📚', title: 'Interactive Lessons', desc: 'Learn through immersive and engaging activities.' },
            { icon: '🌍', title: 'Cultural Preservation', desc: 'Keeping traditions alive through language.' },
            { icon: '🤝', title: 'Community Connection', desc: 'Building bridges through shared language learning.' }
          ].map(({ icon, title, desc }) => (
            <div className="plan-card" key={title}>
              <div className="card-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">Rooted in heritage, growing with purpose</p>
        <div className="story-columns">
          <div className="story-column">
            <p>In South Africa and beyond, many young people are growing up unable to speak or understand their indigenous languages.</p>
          </div>
          <div className="story-column">
            <p>Culture Pulse was born out of a desire to reconnect generations with their mother tongues.</p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="why-matters-section">
        <h2 className="section-title">♢ Why It Matters ♢</h2>
        <p className="section-subtitle">Language is more than words—it’s a way of life</p>
        <div className="why-grid">
          {[
            { title: 'Identity', desc: 'Language connects us to who we are and where we come from.' },
            { title: 'Knowledge', desc: 'Indigenous languages hold wisdom passed down for generations.' },
            { title: 'Legacy', desc: 'Ensure the next generation can carry our cultural legacy forward.' }
          ].map(({ title, desc }) => (
            <div className="why-card" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Language Map */}
      <section className="map-section">
        <h2 className="section-title">⧉ Language Spread ⧉</h2>
        <div className="map-container">
          <img src={Map} alt="Language Distribution Map" className="map-image" />
        </div>
      </section>
    </div>
  );
};

export default Home;