import React from 'react';
import '../../components/Home.css';
import cultureImage from '../../assets/woman-pic.png'; 
import mapImage from '../../assets/Africa-Map.png'; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to <span className="highlight">CulturePulse</span></h1>
          <p>Explore South African languages and culture like never before.</p>
        </div>
        <div className="hero-image">
          <img src={cultureImage} alt="Cultural representation" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>Learn Through Immersion</h3>
          <p>Use interactive tools and augmented reality to experience culture.</p>
        </div>
        <div className="feature-card">
          <h3>Language Explorer</h3>
          <p>Discover greetings and words in all 11 official languages.</p>
        </div>
        <div className="feature-card">
          <h3>Community Contributions</h3>
          <p>Powered by real voices and authentic stories from locals.</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Language Distribution</h2>
        <img src={mapImage} alt="Language Map" className="map-image" />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 CulturePulse. Celebrating South African Heritage.</p>
      </footer>
    </div>
  );
};

export default Home;
